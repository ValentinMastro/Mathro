<script lang="ts">
	import PageExercices from '../../PageExercices.svelte';
	import Exercice from '../../Exercice.svelte';

	const ÉPAISSEUR_SÉPARATEUR = 6;
	const HAUTEUR_MIN = 40;

	let hauteur_conteneur = $state(0);

	// Ratios initiaux : compact=1, normal=2
	let ratios_gauche = [1, 2, 2];
	let ratios_droite = [1, 2, 2];

	let hauteurs_gauche = $state([0, 0, 0]);
	let hauteurs_droite = $state([0, 0, 0]);

	function calculer_hauteurs(ratios: number[], hauteur_totale: number): number[] {
		const espace_séparateurs = (ratios.length - 1) * ÉPAISSEUR_SÉPARATEUR;
		const disponible = hauteur_totale - espace_séparateurs;
		const somme = ratios.reduce((a, b) => a + b, 0);
		return ratios.map((r) => (r / somme) * disponible);
	}

	$effect(() => {
		if (hauteur_conteneur > 0) {
			hauteurs_gauche = calculer_hauteurs(ratios_gauche, hauteur_conteneur);
			hauteurs_droite = calculer_hauteurs(ratios_droite, hauteur_conteneur);
		}
	});

	// Drag state
	let drag: { colonne: 'gauche' | 'droite'; index: number; start_y: number; start_hauteurs: number[] } | null = $state(null);

	function start_drag(colonne: 'gauche' | 'droite', index: number, event: MouseEvent) {
		event.preventDefault();
		const h = colonne === 'gauche' ? hauteurs_gauche : hauteurs_droite;
		drag = { colonne, index, start_y: event.clientY, start_hauteurs: [...h] };
	}

	function on_mousemove(event: MouseEvent) {
		if (!drag) return;
		const delta = event.clientY - drag.start_y;
		const i = drag.index;
		let h1 = drag.start_hauteurs[i]! + delta;
		let h2 = drag.start_hauteurs[i + 1]! - delta;
		const somme = drag.start_hauteurs[i]! + drag.start_hauteurs[i + 1]!;
		if (h1 < HAUTEUR_MIN) {
			h1 = HAUTEUR_MIN;
			h2 = somme - HAUTEUR_MIN;
		}
		if (h2 < HAUTEUR_MIN) {
			h2 = HAUTEUR_MIN;
			h1 = somme - HAUTEUR_MIN;
		}
		if (drag.colonne === 'gauche') {
			hauteurs_gauche[i] = h1;
			hauteurs_gauche[i + 1] = h2;
		} else {
			hauteurs_droite[i] = h1;
			hauteurs_droite[i + 1] = h2;
		}
	}

	function on_mouseup() {
		drag = null;
	}
</script>

<svelte:window onmousemove={on_mousemove} onmouseup={on_mouseup} />

<PageExercices>
	<div class="disposition" bind:clientHeight={hauteur_conteneur}>
		<!-- Colonne gauche : ceinture jaune -->
		<div class="colonne">
			<div class="ex" style="height: {hauteurs_gauche[0]}px">
				<Exercice référence="Exercice 100 p.249">
					<ol class="questions">
						<li>Calculer l'aire d'un carré de côté 6,4 cm.</li>
						<li>Calculer l'aire d'un rectangle de longueur 5,4 cm et de largeur 3 cm.</li>
					</ol>
				</Exercice>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="séparateur" onmousedown={(e) => start_drag('gauche', 0, e)}></div>

			<div class="ex" style="height: {hauteurs_gauche[1]}px">
				<Exercice référence="Exercice 101 p.249">
					<p class="énoncé">Calculer les aires des rectangles suivants.</p>
					<div class="figures-101">
						<svg viewBox="0 0 320 140" class="svg-101">
							<!-- Rectangle a -->
							<rect x="10" y="10" width="130" height="90" fill="none" stroke="#e67e22" stroke-width="2" />
							<!-- Codage double trait horizontal -->
							<line x1="60" y1="7" x2="60" y2="13" stroke="#e67e22" stroke-width="1.5" />
							<line x1="65" y1="7" x2="65" y2="13" stroke="#e67e22" stroke-width="1.5" />
							<line x1="60" y1="97" x2="60" y2="103" stroke="#e67e22" stroke-width="1.5" />
							<line x1="65" y1="97" x2="65" y2="103" stroke="#e67e22" stroke-width="1.5" />
							<!-- Codage simple trait vertical -->
							<line x1="7" y1="52" x2="13" y2="52" stroke="#e67e22" stroke-width="1.5" />
							<line x1="137" y1="52" x2="143" y2="52" stroke="#e67e22" stroke-width="1.5" />
							<!-- Angles droits -->
							<polyline points="10,20 20,20 20,10" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="130,10 130,20 140,20" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="140,90 130,90 130,100" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="20,100 20,90 10,90" fill="none" stroke="#e67e22" stroke-width="1" />
							<text x="15" y="8" font-size="12" fill="#e67e22" font-weight="bold">a.</text>
							<text x="75" y="125" font-size="11" fill="#555" text-anchor="middle">3,3 dm</text>
							<text x="152" y="58" font-size="11" fill="#555">15 cm</text>

							<!-- Rectangle b (carré) -->
							<rect x="200" y="10" width="90" height="90" fill="none" stroke="#e67e22" stroke-width="2" />
							<!-- Codage double trait -->
							<line x1="242" y1="7" x2="242" y2="13" stroke="#e67e22" stroke-width="1.5" />
							<line x1="247" y1="7" x2="247" y2="13" stroke="#e67e22" stroke-width="1.5" />
							<line x1="242" y1="97" x2="242" y2="103" stroke="#e67e22" stroke-width="1.5" />
							<line x1="247" y1="97" x2="247" y2="103" stroke="#e67e22" stroke-width="1.5" />
							<line x1="197" y1="52" x2="203" y2="52" stroke="#e67e22" stroke-width="1.5" />
							<line x1="197" y1="57" x2="203" y2="57" stroke="#e67e22" stroke-width="1.5" />
							<line x1="287" y1="52" x2="293" y2="52" stroke="#e67e22" stroke-width="1.5" />
							<line x1="287" y1="57" x2="293" y2="57" stroke="#e67e22" stroke-width="1.5" />
							<!-- Angles droits -->
							<polyline points="200,20 210,20 210,10" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="280,10 280,20 290,20" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="290,90 280,90 280,100" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="210,100 210,90 200,90" fill="none" stroke="#e67e22" stroke-width="1" />
							<text x="200" y="8" font-size="12" fill="#e67e22" font-weight="bold">b.</text>
							<text x="245" y="125" font-size="11" fill="#555" text-anchor="middle">2,8 cm</text>
						</svg>
					</div>
				</Exercice>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="séparateur" onmousedown={(e) => start_drag('gauche', 1, e)}></div>

			<div class="ex" style="height: {hauteurs_gauche[2]}px">
				<Exercice référence="Exercice 102 p.249">
					<ol class="questions">
						<li>Calculer de deux façons différentes l'aire de la figure suivante.</li>
					</ol>
					<div class="figure-102">
						<svg viewBox="0 0 340 160" class="svg-102">
							<!-- Parallélogramme -->
							<polygon points="60,20 300,20 280,130 40,130" fill="#fef3c7" stroke="#e67e22" stroke-width="2" />
							<!-- Angles droits (hauteur) -->
							<line x1="60" y1="20" x2="60" y2="130" stroke="#e67e22" stroke-width="1.5" stroke-dasharray="4,3" />
							<polyline points="60,120 70,120 70,130" fill="none" stroke="#e67e22" stroke-width="1" />
							<!-- Codage côtés -->
							<line x1="168" y1="17" x2="168" y2="23" stroke="#e67e22" stroke-width="1.5" />
							<line x1="173" y1="17" x2="173" y2="23" stroke="#e67e22" stroke-width="1.5" />
							<line x1="148" y1="127" x2="148" y2="133" stroke="#e67e22" stroke-width="1.5" />
							<line x1="153" y1="127" x2="153" y2="133" stroke="#e67e22" stroke-width="1.5" />
							<!-- Dimensions -->
							<text x="150" y="155" font-size="11" fill="#555" text-anchor="middle">4,5 cm</text>
							<text x="295" y="155" font-size="11" fill="#555">20 mm</text>
						</svg>
					</div>
					<ol class="questions" start={2}>
						<li>Calculer le périmètre de cette figure.</li>
					</ol>
				</Exercice>
			</div>
		</div>

		<!-- Colonne droite : ceinture verte -->
		<div class="colonne">
			<div class="ex" style="height: {hauteurs_droite[0]}px">
				<Exercice référence="Exercice 107 p.249">
					<ol class="questions">
						<li>Calculer en cm² l'aire d'un carré de 23 mm de côté.</li>
						<li>Calculer l'aire d'un rectangle de longueur 57 mm dont la largeur est trois fois plus petite que la longueur.</li>
					</ol>
				</Exercice>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="séparateur" onmousedown={(e) => start_drag('droite', 0, e)}></div>

			<div class="ex" style="height: {hauteurs_droite[1]}px">
				<Exercice référence="Exercice 108 p.249">
					<ol class="questions">
						<li>Calculer l'aire de la figure suivante.</li>
					</ol>
					<div class="figure-108">
						<svg viewBox="0 0 300 200" class="svg-108">
							<!-- Figure en L -->
							<polygon points="10,10 160,10 160,50 250,50 250,180 10,180" fill="none" stroke="#e67e22" stroke-width="2.5" />
							<!-- Angles droits -->
							<polyline points="10,20 20,20 20,10" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="150,10 150,20 160,20" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="160,40 170,40 170,50" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="240,50 240,60 250,60" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="250,170 240,170 240,180" fill="none" stroke="#e67e22" stroke-width="1" />
							<polyline points="20,180 20,170 10,170" fill="none" stroke="#e67e22" stroke-width="1" />
							<!-- Dimensions -->
							<text x="160" y="38" font-size="10" fill="#555">1,1 cm</text>
							<text x="260" y="120" font-size="10" fill="#555">4 cm</text>
							<text x="130" y="198" font-size="10" fill="#555" text-anchor="middle">7,2 cm</text>
						</svg>
					</div>
					<ol class="questions" start={2}>
						<li>Calculer le périmètre de cette figure.</li>
					</ol>
				</Exercice>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="séparateur" onmousedown={(e) => start_drag('droite', 1, e)}></div>

			<div class="ex" style="height: {hauteurs_droite[2]}px">
				<Exercice référence="Exercice 109 p.249">
					<p class="énoncé">Calculer l'aire de la figure ci-contre.</p>
					<div class="figure-109">
						<svg viewBox="0 0 260 240" class="svg-109">
							<!-- Figure en L inversé (rectangle avec encoche en bas à gauche) -->
							<polygon points="10,10 130,10 130,200 70,200 70,50 10,50" fill="#a7f3d0" stroke="#555" stroke-width="2.5" />
							<!-- Angles droits -->
							<polyline points="10,20 20,20 20,10" fill="none" stroke="#555" stroke-width="1" />
							<polyline points="120,10 120,20 130,20" fill="none" stroke="#555" stroke-width="1" />
							<polyline points="130,190 120,190 120,200" fill="none" stroke="#555" stroke-width="1" />
							<polyline points="80,200 80,190 70,190" fill="none" stroke="#555" stroke-width="1" />
							<polyline points="70,60 60,60 60,50" fill="none" stroke="#555" stroke-width="1" />
							<polyline points="20,50 20,40 10,40" fill="none" stroke="#555" stroke-width="1" />
							<!-- Dimensions -->
							<!-- 4 cm en haut -->
							<line x1="10" y1="3" x2="130" y2="3" stroke="#3b82f6" stroke-width="1" marker-start="url(#fl-g2)" marker-end="url(#fl-d2)" />
							<text x="70" y="-2" font-size="10" fill="#3b82f6" text-anchor="middle">4 cm</text>
							<!-- 9 cm à droite -->
							<line x1="140" y1="10" x2="140" y2="200" stroke="#3b82f6" stroke-width="1" marker-start="url(#fl-g2)" marker-end="url(#fl-d2)" />
							<text x="155" y="110" font-size="10" fill="#3b82f6">9 cm</text>
							<!-- 3 cm horizontal bas -->
							<line x1="70" y1="210" x2="130" y2="210" stroke="#3b82f6" stroke-width="1" marker-start="url(#fl-g2)" marker-end="url(#fl-d2)" />
							<text x="100" y="225" font-size="10" fill="#3b82f6" text-anchor="middle">3 cm</text>
							<!-- 2 cm vertical gauche bas -->
							<line x1="62" y1="50" x2="62" y2="200" stroke="#3b82f6" stroke-width="1" />
							<text x="48" y="130" font-size="10" fill="#3b82f6">2 cm</text>
							<!-- Marqueurs -->
							<defs>
								<marker id="fl-d2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
									<path d="M0,0 L6,3 L0,6" fill="none" stroke="#3b82f6" stroke-width="1" />
								</marker>
								<marker id="fl-g2" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
									<path d="M6,0 L0,3 L6,6" fill="none" stroke="#3b82f6" stroke-width="1" />
								</marker>
							</defs>
						</svg>
					</div>
				</Exercice>
			</div>
		</div>
	</div>
</PageExercices>

<style>
	.disposition {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}

	.colonne {
		display: flex;
		flex-direction: column;
	}

	.ex {
		background: #fefefe;
		border-radius: 8px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
		overflow: hidden;
	}

	.séparateur {
		height: 6px;
		cursor: row-resize;
		background: transparent;
		transition: background 0.15s;
		flex-shrink: 0;
	}

	.séparateur:hover {
		background: #6366f180;
	}

	.énoncé {
		font-size: clamp(0.8rem, 1.4vw, 1.15rem);
		font-weight: 600;
		margin: 0 0 0.3rem;
		color: #333;
	}

	.questions {
		margin: 0;
		padding-left: 1.5em;
		font-size: clamp(0.75rem, 1.3vw, 1.05rem);
		line-height: 1.5;
		color: #333;
	}

	.questions li::marker {
		font-weight: 700;
		color: #e67e22;
	}

	.figures-101,
	.figure-102,
	.figure-108,
	.figure-109 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 0;
	}

	.svg-101 {
		width: 80%;
		max-height: 100%;
	}

	.svg-102 {
		width: 80%;
		max-height: 100%;
	}

	.svg-108 {
		width: 70%;
		max-height: 100%;
	}

	.svg-109 {
		width: 70%;
		max-height: 100%;
	}
</style>
