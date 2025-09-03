<!--
  @component
  ## Pyramide
  Trace une pyramide en perspective cavalière

  ### Props
  - `nature` *number* : nombre de côtés de la base (≥ 3)
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `apex` *{ x: number; y: number; z: number }* : sommet de la pyramide
  - `centre` *{ x: number; y: number; z: number }* : centre de la base
  - `rayon?` *number* : rayon (circonscrit) de la base régulière (défaut : 0.6 * ||APEX–CENTRE||)
  - `rotation?` *number* : rotation initiale de la base (radians, défaut 0)
-->
<script lang="ts">
	import { Polylignes, Projecteur } from '../*';
	import { V3 } from './vecteur3D';

	type Props = {
		nature: number;
		projecteur: Projecteur;
		apex: { x: number; y: number; z: number };
		centre: { x: number; y: number; z: number };
		rayon?: number;
		rotation?: number; // en radians
	};

	let { nature, projecteur, apex, centre, rayon: r, rotation = 0 }: Props = $props();

	let apex_v3 = new V3(apex.x, apex.y, apex.z);
	let centre_v3 = new V3(centre.x, centre.y, centre.z);

	// Axe de la pyramide (du centre vers l’apex)
	const axe = $derived(apex_v3.soustraire(centre_v3));

	// Rayon par défaut si absent : proportionnel à la hauteur de la pyramide
	let rayon = $derived(r ?? 0.6 * axe.norme());

	// Base orthogonale à l’axe : base orthonormée (u, w) dans le plan ⟂ axe
	const u = $derived.by(() => {
		const ref1 = Math.abs(axe.x) + Math.abs(axe.y) < 1e-9 ? new V3(0, 1, 0) : new V3(0, 0, 1);
		const v = axe.cross(ref1);
		const n = v.norme();
		if (n < 1e-9) {
			const ref2 = new V3(1, 0, 0);
			return axe.cross(ref2).normaliser();
		}
		return v.multiplier(1 / n);
	});
	const w = $derived(axe.cross(u).normaliser());

	// Sommets 3D réguliers de la base (ordre trigonométrique dans (u, w))
	const sommets_base_3d: V3[] = $derived.by(() => {
		const n = Math.max(3, Math.floor(nature));
		const pts: V3[] = [];
		for (let i = 0; i < n; i++) {
			const t = rotation + (2 * Math.PI * i) / n;
			const dir = u.multiplier(Math.cos(t)).ajouter(w.multiplier(Math.sin(t)));
			pts.push(centre_v3.ajouter(dir.multiplier(rayon)));
		}
		return pts;
	});

	// Projections 2D
	let APEX = $derived(projecteur.P(apex));
	let CENTRE = $derived(projecteur.P(centre));
	let SOMMETS_BASE = $derived(sommets_base_3d.map((p) => projecteur.P(p)));

	// --- Backface culling pour décider visible/caché ---

	// produit scalaire rapide
	const dot = (a: V3, b: V3) => a.x * b.x + a.y * b.y + a.z * b.z;

	// Direction de projection (numérique) : effet d'un +1 en z sur la projection
	const vueDir = $derived.by(() => {
		const P0 = projecteur.P({ x: 0, y: 0, z: 0 });
		const Pz = projecteur.P({ x: 0, y: 0, z: 1 });
		const a = Pz.x - P0.x;
		const b = Pz.y - P0.y;
		// les rayons de projection vont dans (-a, -b, 1) (vers le plan z=0)
		return new V3(-a, -b, 1).normaliser();
	});

	// Visibilité des faces triangulaires (APEX, Si, S(i+1))
	const faces_visibles = $derived.by(() => {
		const n = sommets_base_3d.length;
		const res: boolean[] = new Array(n);
		for (let i = 0; i < n; i++) {
			const Si = sommets_base_3d[i];
			const Sj = sommets_base_3d[(i + 1) % n];
			const e1 = Si.soustraire(apex_v3); // APEX->Si
			const e2 = Sj.soustraire(apex_v3); // APEX->Sj
			const normale = e1.cross(e2);
			// true = face orientée vers l'observateur (visible)
			res[i] = dot(normale, vueDir) < 0;
			// Si l'orientation te paraît inversée, remplace par > 0
		}
		return res;
	});
</script>

<!-- =================== ARÊTES CACHÉES (pointillés) =================== -->

<!-- Arêtes de base cachées : héritent de la face (APEX, Si, S(i+1)) -->
{#each SOMMETS_BASE as S, i}
	{@const S_NEXT = SOMMETS_BASE[(i + 1) % SOMMETS_BASE.length]}
	{#if !faces_visibles[i]}
		<Polylignes points={[S, S_NEXT]} stroke="#666" stroke-width={6} stroke-dasharray="25 15" />
	{/if}
{/each}

<!-- Arêtes latérales cachées : APEX–Si est cachée si ses 2 faces adjacentes sont cachées -->
{#each SOMMETS_BASE as S, i}
	{@const i_prev = (i - 1 + SOMMETS_BASE.length) % SOMMETS_BASE.length}
	{#if !(faces_visibles[i] || faces_visibles[i_prev])}
		<Polylignes points={[APEX, S]} stroke="#666" stroke-width={6} stroke-dasharray="25 15" />
	{/if}
{/each}

<!-- =================== ARÊTES VISIBLES (plein) =================== -->

<!-- Arêtes de base visibles -->
{#each SOMMETS_BASE as S, i}
	{@const S_NEXT = SOMMETS_BASE[(i + 1) % SOMMETS_BASE.length]}
	{#if faces_visibles[i]}
		<Polylignes points={[S, S_NEXT]} stroke="#111" stroke-width={6} />
	{/if}
{/each}

<!-- Arêtes latérales visibles : APEX–Si visible si au moins 1 face adjacente visible -->
{#each SOMMETS_BASE as S, i}
	{@const i_prev = (i - 1 + SOMMETS_BASE.length) % SOMMETS_BASE.length}
	{#if faces_visibles[i] || faces_visibles[i_prev]}
		<Polylignes points={[APEX, S]} stroke="#111" stroke-width={6} />
	{/if}
{/each}
