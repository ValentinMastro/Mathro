<script lang="ts">
	import { draggable, dropzone } from '$lib/constitution_classes/drag_and_drop';

	type Élève = { nom: string; prénom: string; sexe: 'F' | 'G' };

	const élèves_initiaux: Élève[] = [
		{ nom: 'Martin', prénom: 'Emma', sexe: 'F' },
		{ nom: 'Bernard', prénom: 'Lucas', sexe: 'G' },
		{ nom: 'Dubois', prénom: 'Chloé', sexe: 'F' },
		{ nom: 'Thomas', prénom: 'Nathan', sexe: 'G' },
		{ nom: 'Robert', prénom: 'Léa', sexe: 'F' },
		{ nom: 'Petit', prénom: 'Hugo', sexe: 'G' },
		{ nom: 'Richard', prénom: 'Manon', sexe: 'F' },
		{ nom: 'Durand', prénom: 'Enzo', sexe: 'G' },
		{ nom: 'Leroy', prénom: 'Inès', sexe: 'F' },
		{ nom: 'Moreau', prénom: 'Louis', sexe: 'G' },
		{ nom: 'Simon', prénom: 'Camille', sexe: 'F' },
		{ nom: 'Laurent', prénom: 'Raphaël', sexe: 'G' },
		{ nom: 'Michel', prénom: 'Jade', sexe: 'F' },
		{ nom: 'Garcia', prénom: 'Arthur', sexe: 'G' },
		{ nom: 'Lefebvre', prénom: 'Louise', sexe: 'F' },
		{ nom: 'Roux', prénom: 'Gabriel', sexe: 'G' },
		{ nom: 'David', prénom: 'Alice', sexe: 'F' },
		{ nom: 'Bertrand', prénom: 'Adam', sexe: 'G' },
		{ nom: 'Morel', prénom: 'Lina', sexe: 'F' },
		{ nom: 'Fournier', prénom: 'Jules', sexe: 'G' },
		{ nom: 'Girard', prénom: 'Rose', sexe: 'F' },
		{ nom: 'Bonnet', prénom: 'Léo', sexe: 'G' },
		{ nom: 'Dupont', prénom: 'Anna', sexe: 'F' },
		{ nom: 'Lambert', prénom: 'Mathis', sexe: 'G' },
		{ nom: 'Fontaine', prénom: 'Lola', sexe: 'F' },
		{ nom: 'Rousseau', prénom: 'Ethan', sexe: 'G' },
		{ nom: 'Vincent', prénom: 'Sarah', sexe: 'F' },
		{ nom: 'Muller', prénom: 'Tom', sexe: 'G' }
	];

	let places: (Élève | null)[] = $state(Array(32).fill(null));

	function mélanger<T>(tableau: T[]): T[] {
		const copie = [...tableau];
		for (let i = copie.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[copie[i], copie[j]] = [copie[j]!, copie[i]!];
		}
		return copie;
	}

	function assigner_aléatoirement() {
		const filles = mélanger(élèves_initiaux.filter((e) => e.sexe === 'F'));
		const garçons = mélanger(élèves_initiaux.filter((e) => e.sexe === 'G'));

		const paires: [Élève | null, Élève | null][] = [];

		const nb_paires_mixtes = Math.min(filles.length, garçons.length);
		for (let i = 0; i < nb_paires_mixtes; i++) {
			if (Math.random() < 0.5) {
				paires.push([garçons[i]!, filles[i]!]);
			} else {
				paires.push([filles[i]!, garçons[i]!]);
			}
		}

		const restants = [...filles.slice(nb_paires_mixtes), ...garçons.slice(nb_paires_mixtes)];
		for (let i = 0; i < restants.length; i += 2) {
			paires.push([restants[i] ?? null, restants[i + 1] ?? null]);
		}

		const paires_mélangées = mélanger(paires);
		const nouveau: (Élève | null)[] = Array(32).fill(null);

		for (let i = 0; i < paires_mélangées.length && i < 16; i++) {
			const rangée = Math.floor(i / 4);
			const paire_dans_rangée = i % 4;
			const index_base = rangée * 8 + paire_dans_rangée * 2;
			nouveau[index_base] = paires_mélangées[i]![0];
			nouveau[index_base + 1] = paires_mélangées[i]![1];
		}

		places = nouveau;
	}

	function gérer_drop(cible: number, source: number) {
		const nouveau = [...places];
		const temp = nouveau[cible];
		nouveau[cible] = nouveau[source]!;
		nouveau[source] = temp ?? null;
		places = nouveau;
	}

	function effacer() {
		places = Array(32).fill(null);
	}

	function sauvegarder() {
		const json = JSON.stringify(places, null, '\t');
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'plan_de_classe.json';
		a.click();
		URL.revokeObjectURL(url);
	}

	let input_fichier: HTMLInputElement;

	function on_import(event: Event) {
		const fichier = (event.target as HTMLInputElement).files?.[0];
		if (!fichier) return;
		const reader = new FileReader();
		reader.onload = () => {
			places = JSON.parse(reader.result as string);
		};
		reader.readAsText(fichier);
		input_fichier.value = '';
	}

	function on_keydown(event: KeyboardEvent) {
		if (event.key === 'r' && !event.ctrlKey && !event.metaKey && !event.altKey) {
			assigner_aléatoirement();
		}
	}

	// Indices de colonnes groupées par paire pour chaque rangée
	const rangées = [0, 1, 2, 3] as const;
	const paires_par_rangée = [0, 1, 2, 3] as const;

	function index_cellule(rangée: number, paire: number, côté: 0 | 1): number {
		return rangée * 8 + paire * 2 + côté;
	}

	// Assigner au chargement
	assigner_aléatoirement();
</script>

<svelte:window on:keydown={on_keydown} />

<div class="plan">
	<div class="haut">
		<div class="porte">Fenêtre 1</div>
		<div class="fenêtres">Fenêtre 2</div>
	</div>

	<div class="grille">
		{#each rangées as rangée}
			<div class="rangée">
				{#each paires_par_rangée as paire}
					<div class="paire">
						{#each [0, 1] as côté}
							{@const idx = index_cellule(rangée, paire, côté as 0 | 1)}
							{@const élève = places[idx]}
							<div
								class="cellule"
								class:vide={!élève}
								class:fille={élève?.sexe === 'F'}
								class:garçon={élève?.sexe === 'G'}
								use:dropzone={{
									on_dropzone: (source_idx: number) => gérer_drop(idx, source_idx),
									dragover_class: 'survol'
								}}
								use:draggable={idx}
							>
								{#if élève}
									<span class="prénom">{élève.prénom}</span>
									<span class="nom">{élève.nom}</span>
								{/if}
								<span class="numéro">{idx + 1}</span>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<div class="bas">
		<div class="tableau">Tableau</div>
	</div>
</div>

<input type="file" accept=".json" class="caché" bind:this={input_fichier} onchange={on_import} />

<div class="boutons">
	<button onclick={effacer}>Effacer</button>
	<button onclick={sauvegarder}>Sauvegarder</button>
	<button onclick={() => input_fichier.click()}>Importer</button>
</div>

<style>
	.caché {
		display: none;
	}

	.boutons {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		display: flex;
		gap: 0.5rem;
	}

	.boutons button {
		padding: 0.4rem 1rem;
		font-size: 0.85rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		background: white;
		color: #555;
		cursor: pointer;
		opacity: 0.7;
		transition:
			opacity 0.15s,
			background-color 0.15s;
	}

	.boutons button:hover {
		opacity: 1;
	}

	.plan {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 2rem;
		box-sizing: border-box;
		background: #f8f9fa;
		font-family: 'Segoe UI', system-ui, sans-serif;
		overflow: hidden;
	}

	.haut {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}

	.porte,
	.fenêtres {
		width: 30%;
		padding: 0.6rem;
		text-align: center;
		border-radius: 0.5rem;
		background: #e5e7eb;
		color: #6b7280;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.grille {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		flex: 1;
		justify-content: center;
	}

	.rangée {
		display: flex;
		gap: 1.8rem;
		justify-content: center;
	}

	.paire {
		display: flex;
		gap: 0.3rem;
	}

	.cellule {
		width: 7rem;
		height: 4rem;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
		transition:
			transform 0.15s ease,
			opacity 0.15s ease,
			box-shadow 0.15s ease;
		cursor: move;
		user-select: none;
	}

	.cellule.fille {
		background: #fce7f3;
		border: 1.5px solid #f9a8d4;
	}

	.cellule.garçon {
		background: #dbeafe;
		border: 1.5px solid #93c5fd;
	}

	.cellule.vide {
		background: white;
		border: 1.5px dashed #d1d5db;
		cursor: default;
	}

	.cellule:global(.survol) {
		box-shadow: 0 0 0 2px #6366f1;
		transform: scale(1.03);
	}

	.cellule :global(.dragging) {
		opacity: 0.4;
	}

	:global(.dragging) {
		opacity: 0.4;
	}

	.prénom {
		font-size: 0.85rem;
		font-weight: 600;
		line-height: 1.2;
	}

	.nom {
		font-size: 0.75rem;
		color: #374151;
		line-height: 1.2;
	}

	.numéro {
		position: absolute;
		bottom: 2px;
		right: 4px;
		font-size: 0.6rem;
		color: #9ca3af;
	}

	.bas {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.tableau {
		width: 60%;
		padding: 0.7rem;
		text-align: center;
		border-radius: 0.5rem;
		background: #1f2937;
		color: #d1d5db;
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 0.05em;
	}
</style>
