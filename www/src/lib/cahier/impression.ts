import * as htmlToImage from 'html-to-image';
import { NOMBRE_DE_PAGES, page_state } from '$lib/cahier/store.svelte';
import jsPDF from 'jspdf';
import { tick } from 'svelte';

async function captureNoeudEnJPEG(node: HTMLElement): Promise<{ dataUrl: string; w: number; h: number }> {
	// Attends que la mise en page soit prête
	await tick();
	await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

	const rect = node.getBoundingClientRect();
	const w = Math.ceil(rect.width);
	const h = Math.ceil(rect.height);

	const dataUrl = await htmlToImage.toJpeg(node, {
		quality: 0.95,
		pixelRatio: 2, // qualité 2x (augmente la netteté)
		cacheBust: true,
		skipFonts: true
		// crossOriginImages: true  // active si tu as des images externes CORS-friendly
	});

	return { dataUrl, w, h };
}

export async function exporterToutesLesPagesEnPDF() {
	const ancienPleinEcran = page_state.plein_ecran;
	const ancienNumero = page_state.numero_de_la_page;

	try {
		// On passe en mode 2 pages (plus simple pour capturer la même mise en page que l'écran)
		page_state.plein_ecran = false;
		// On active l'impression
		page_state.en_cours_impression = true;
		await tick();

		let doc: jsPDF | null = null;

		// On parcourt les pages 2 par 2
		for (let i = 0; i < NOMBRE_DE_PAGES(); i += 2) {
			page_state.numero_de_la_page = i;
			await tick();
			// Récupère les 2 conteneurs PageDeCahier visibles
			const zone = document.getElementById('zone');
			if (!zone) throw new Error('Zone non trouvée');

			const enfants = Array.from(zone.children).filter((el) => !(el as HTMLElement).matches('#largeur'));
			// enfants[0] = Page gauche, enfants[1] = Page droite (si existe)
			for (const el of enfants as HTMLElement[]) {
				// Ne pas capture la page de gauche si i == 0
				if (el.classList.contains('page_zero')) continue;
				const { dataUrl, w, h } = await captureNoeudEnJPEG(el);

				if (!doc) {
					doc = new jsPDF({
						orientation: w > h ? 'landscape' : 'portrait',
						unit: 'px',
						format: [w, h]
					});
				} else {
					doc.addPage([w, h], w > h ? 'landscape' : 'portrait');
				}
				doc.addImage(dataUrl, 'PNG', 0, 0, w, h);
			}
		}

		if (doc) {
			const nom = `cours_${page_state.niveau}e.pdf`;
			doc.save(nom);
		}
	} catch (e) {
		console.error('Export PDF échoué :', e);
		alert('Export PDF échoué (voir console).');
	} finally {
		// Restaure l’état d’affichage
		page_state.plein_ecran = ancienPleinEcran;
		page_state.numero_de_la_page = ancienNumero;
		page_state.en_cours_impression = false;
		await tick();
	}
}
