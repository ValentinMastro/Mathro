<script lang="ts">
	import PageExercices from '../../PageExercices.svelte';
	import Exercice from '../../Exercice.svelte';

	const ÉPAISSEUR_SÉPARATEUR = 6;
	const HAUTEUR_MIN = 40;

	let hauteur_colonne_droite = $state(0);

	// Ratios initiaux : 1:1 entre ex-43 et ex-44
	let ratios = [1, 1];
	let hauteurs = $state([0, 0]);

	$effect(() => {
		if (hauteur_colonne_droite > 0) {
			const disponible = hauteur_colonne_droite - ÉPAISSEUR_SÉPARATEUR;
			const somme = ratios.reduce((a, b) => a + b, 0);
			hauteurs = ratios.map((r) => (r / somme) * disponible);
		}
	});

	let drag: { start_y: number; start_hauteurs: number[] } | null = $state(null);

	function start_drag(event: MouseEvent) {
		event.preventDefault();
		drag = { start_y: event.clientY, start_hauteurs: [...hauteurs] };
	}

	function on_mousemove(event: MouseEvent) {
		if (!drag) return;
		const delta = event.clientY - drag.start_y;
		const somme = drag.start_hauteurs[0]! + drag.start_hauteurs[1]!;
		let h1 = drag.start_hauteurs[0]! + delta;
		let h2 = drag.start_hauteurs[1]! - delta;
		if (h1 < HAUTEUR_MIN) {
			h1 = HAUTEUR_MIN;
			h2 = somme - HAUTEUR_MIN;
		}
		if (h2 < HAUTEUR_MIN) {
			h2 = HAUTEUR_MIN;
			h1 = somme - HAUTEUR_MIN;
		}
		hauteurs[0] = h1;
		hauteurs[1] = h2;
	}

	function on_mouseup() {
		drag = null;
	}
</script>

<svelte:window onmousemove={on_mousemove} onmouseup={on_mouseup} />

<PageExercices>
	<div class="disposition">
		<!-- Exercice 42 — moitié gauche -->
		<div class="ex-42">
			<Exercice référence="Exercice 42 p.244">
				<p class="énoncé">Associer chaque figure à son périmètre.</p>
				<div class="figures">
					<svg viewBox="0 0 600 420" class="svg-figures">
						<!-- Figure ① — Triangle équilatéral (violet) -->
						<g>
							<polygon points="150,40 60,200 240,200" fill="none" stroke="#9b59b6" stroke-width="3" />
							<!-- Codage côtés égaux -->
							<line x1="99.8" y1="117.1" x2="110.2" y2="122.9" stroke="#9b59b6" stroke-width="1.5" />
							<line x1="189.8" y1="122.9" x2="200.2" y2="117.1" stroke="#9b59b6" stroke-width="1.5" />
							<line x1="150" y1="194" x2="150" y2="206" stroke="#9b59b6" stroke-width="1.5" />
							<text x="130" y="30" font-size="18" fill="#9b59b6" font-weight="bold">①</text>
							<text x="150" y="230" font-size="14" fill="#555" text-anchor="middle">3,3 cm</text>
							<line x1="70" y1="215" x2="230" y2="215" stroke="#555" stroke-width="1" marker-start="url(#fleche-g)" marker-end="url(#fleche-d)" />
						</g>

						<!-- Figure ② — Losange (orange) -->
						<g>
							<polygon points="450,20 520,120 450,220 380,120" fill="none" stroke="#e67e22" stroke-width="3" />
							<!-- Codage côtés égaux -->
							<line x1="480.1" y1="73.4" x2="489.9" y2="66.6" stroke="#e67e22" stroke-width="1.5" />
							<line x1="480.1" y1="166.6" x2="489.9" y2="173.4" stroke="#e67e22" stroke-width="1.5" />
							<line x1="419.9" y1="166.6" x2="410.1" y2="173.4" stroke="#e67e22" stroke-width="1.5" />
							<line x1="419.9" y1="73.4" x2="410.1" y2="66.6" stroke="#e67e22" stroke-width="1.5" />
							<text x="455" y="15" font-size="18" fill="#e67e22" font-weight="bold">②</text>
							<text x="525" y="180" font-size="14" fill="#555">5 dm</text>
						</g>

						<!-- Figure ③ — Carré incliné (bleu) -->
						<g>
							<polygon points="80,330 150,270 210,340 140,400" fill="none" stroke="#3498db" stroke-width="3" />
							<!-- Angles droits (polylines en L) -->
							<polyline points="89.1,322.2 96.9,331.3 87.8,339.1" fill="none" stroke="#3498db" stroke-width="1.5" />
							<polyline points="140.9,277.8 148.7,286.9 157.8,279.1" fill="none" stroke="#3498db" stroke-width="1.5" />
							<polyline points="202.2,330.9 193.1,338.7 200.9,347.8" fill="none" stroke="#3498db" stroke-width="1.5" />
							<polyline points="149.1,392.2 141.3,383.1 132.2,390.9" fill="none" stroke="#3498db" stroke-width="1.5" />
							<!-- Codage côtés égaux -->
							<line x1="111.1" y1="295.4" x2="118.9" y2="304.6" stroke="#3498db" stroke-width="1.5" />
							<line x1="175.4" y1="308.9" x2="184.6" y2="301.1" stroke="#3498db" stroke-width="1.5" />
							<line x1="171.1" y1="365.4" x2="178.9" y2="374.6" stroke="#3498db" stroke-width="1.5" />
							<line x1="114.6" y1="361.1" x2="105.4" y2="368.9" stroke="#3498db" stroke-width="1.5" />
							<text x="55" y="315" font-size="18" fill="#3498db" font-weight="bold">③</text>
							<text x="20" y="350" font-size="14" fill="#555">5 cm</text>
							<line x1="42" y1="335" x2="72" y2="298" stroke="#555" stroke-width="1" />
						</g>

						<!-- Figure ④ — Triangle scalène (vert) -->
						<g>
							<polygon points="350,370 530,370 480,240" fill="none" stroke="#27ae60" stroke-width="3" />
							<text x="490" y="235" font-size="18" fill="#27ae60" font-weight="bold">④</text>
							<text x="370" y="300" font-size="14" fill="#555">3,6 cm</text>
							<text x="510" y="310" font-size="14" fill="#555">6 cm</text>
							<text x="420" y="395" font-size="14" fill="#555">4,8 cm</text>
						</g>

						<!-- Marqueurs de flèches -->
						<defs>
							<marker id="fleche-d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
								<path d="M0,0 L6,3 L0,6" fill="none" stroke="#555" stroke-width="1" />
							</marker>
							<marker id="fleche-g" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
								<path d="M6,0 L0,3 L6,6" fill="none" stroke="#555" stroke-width="1" />
							</marker>
						</defs>
					</svg>
				</div>
				<div class="réponses">
					<span class="étiquette">25 cm</span>
					<span class="étiquette">9,9 cm</span>
					<span class="étiquette">20 dm</span>
					<span class="étiquette">14,4 cm</span>
					<span class="étiquette">2 dm</span>
				</div>
			</Exercice>
		</div>

		<!-- Colonne droite avec séparateur draggable -->
		<div class="colonne-droite" bind:clientHeight={hauteur_colonne_droite}>
			<div class="ex-droit" style="height: {hauteurs[0]}px">
				<Exercice référence="Exercice 43 p.244">
					<ol class="questions">
						<li>Calculer le périmètre d'un carré de longueur de côté 3,2 cm.</li>
						<li>Calculer le périmètre d'un rectangle de longueur 6,8 cm et de largeur 52 mm.</li>
						<li>Calculer le périmètre d'un triangle équilatéral dont la longueur d'un côté est 5,7 dm.</li>
						<li>Calculer le périmètre d'un triangle isocèle dont la base mesure 5,3 cm et dont les deux autres côtés mesurent 1,2 dm.</li>
					</ol>
				</Exercice>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="séparateur" onmousedown={start_drag}></div>

			<div class="ex-droit" style="height: {hauteurs[1]}px">
				<Exercice référence="Exercice 44 p.244">
					<p class="énoncé">En utilisant des ordres de grandeur, relier chaque disque à un arrondi de son périmètre.</p>
					<div class="disques">
						<svg viewBox="0 0 520 130" class="svg-disques">
							<!-- D₁ — grand cercle, diamètre 10,5 cm -->
							<circle cx="65" cy="65" r="55" fill="none" stroke="#555" stroke-width="2" />
							<line x1="10" y1="65" x2="120" y2="65" stroke="#555" stroke-width="1.5" />
							<line x1="65" y1="10" x2="65" y2="120" stroke="#555" stroke-width="1.5" />
							<circle cx="65" cy="65" r="2.5" fill="#555" />
							<text x="55" y="10" font-size="11" fill="#e74c3c" font-weight="bold">𝒟₁</text>
							<text x="72" y="58" font-size="10" fill="#555">10,5 cm</text>

							<!-- D₂ — petit cercle, diamètre 3,9 cm -->
							<circle cx="195" cy="65" r="30" fill="none" stroke="#555" stroke-width="2" />
							<line x1="165" y1="65" x2="225" y2="65" stroke="#555" stroke-width="1.5" />
							<line x1="195" y1="35" x2="195" y2="95" stroke="#555" stroke-width="1.5" />
							<circle cx="195" cy="65" r="2.5" fill="#555" />
							<text x="187" y="30" font-size="11" fill="#e74c3c" font-weight="bold">𝒟₂</text>
							<text x="200" y="58" font-size="10" fill="#555">3,9 cm</text>

							<!-- D₃ — moyen cercle, rayon 3,9 cm (diamètre 7,8 cm) -->
							<circle cx="320" cy="65" r="45" fill="none" stroke="#555" stroke-width="2" />
							<line x1="275" y1="65" x2="365" y2="65" stroke="#555" stroke-width="1.5" />
							<line x1="320" y1="20" x2="320" y2="110" stroke="#555" stroke-width="1.5" />
							<circle cx="320" cy="65" r="2.5" fill="#555" />
							<text x="310" y="16" font-size="11" fill="#e74c3c" font-weight="bold">𝒟₃</text>
							<!-- Flèche rayon -->
							<line x1="320" y1="55" x2="365" y2="55" stroke="#e74c3c" stroke-width="1.5" />
							<text x="330" y="50" font-size="10" fill="#555">3,9 cm</text>

							<!-- D₄ — petit cercle, rayon 3 cm (diamètre 6 cm) -->
							<circle cx="455" cy="65" r="35" fill="none" stroke="#555" stroke-width="2" />
							<line x1="420" y1="65" x2="490" y2="65" stroke="#555" stroke-width="1.5" />
							<line x1="455" y1="30" x2="455" y2="100" stroke="#555" stroke-width="1.5" />
							<circle cx="455" cy="65" r="2.5" fill="#555" />
							<text x="445" y="26" font-size="11" fill="#e74c3c" font-weight="bold">𝒟₄</text>
							<!-- Flèche rayon -->
							<line x1="455" y1="55" x2="490" y2="55" stroke="#e74c3c" stroke-width="1.5" />
							<text x="462" y="50" font-size="10" fill="#555">3 cm</text>
						</svg>
					</div>
					<div class="réponses">
						<span class="étiquette">12,25 cm</span>
						<span class="étiquette">3,3 dm</span>
						<span class="étiquette">1,9 dm</span>
						<span class="étiquette">24,5 cm</span>
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

	.ex-42 {
		background: #fefefe;
		border-radius: 8px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
	}

	.colonne-droite {
		display: flex;
		flex-direction: column;
	}

	.ex-droit {
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
		font-size: clamp(0.9rem, 1.8vw, 1.3rem);
		font-weight: 600;
		margin: 0 0 0.5rem;
		color: #333;
	}

	/* --- Exercice 42 --- */

	.figures {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 0;
	}

	.svg-figures {
		width: 100%;
		height: 100%;
		max-height: 100%;
	}

	.réponses {
		display: flex;
		justify-content: center;
		gap: clamp(0.3rem, 1vw, 0.8rem);
		flex-wrap: wrap;
		margin-top: auto;
		padding-top: 0.3rem;
	}

	.étiquette {
		padding: 0.3rem 0.7rem;
		border: 2px solid #3498db;
		border-radius: 6px;
		font-size: clamp(0.8rem, 1.5vw, 1.1rem);
		font-weight: 600;
		color: #2c3e50;
		background: #ebf5fb;
		white-space: nowrap;
	}

	/* --- Exercice 43 --- */

	.questions {
		margin: 0;
		padding-left: 1.5em;
		font-size: clamp(0.8rem, 1.5vw, 1.15rem);
		line-height: 1.6;
		color: #333;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.questions li::marker {
		font-weight: 700;
		color: #e67e22;
	}

	/* --- Exercice 44 --- */

	.disques {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 0;
	}

	.svg-disques {
		width: 100%;
		height: 100%;
		max-height: 100%;
	}
</style>
