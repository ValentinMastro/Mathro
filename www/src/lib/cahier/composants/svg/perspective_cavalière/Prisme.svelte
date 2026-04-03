<!--
  @component
  ## Prisme
  Trace un prisme droit à base polygonale régulière en perspective cavalière

  ### Props
  - `nature` *number* : nombre de côtés de la base (≥ 3)
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `centre1` *{ x: number; y: number; z: number }* : centre de la base inférieure
  - `centre2` *{ x: number; y: number; z: number }* : centre de la base supérieure
  - `rayon?` *number* : rayon (circonscrit) de la base régulière (défaut : 0.4 × hauteur)
  - `rotation?` *number* : rotation initiale de la base (radians, défaut 0)
-->
<script lang="ts">
	import { Polylignes } from '../*';
	import { V3 } from './vecteur3D';
	import type { Projecteur } from './projecteur';

	type Props = {
		nature: number;
		projecteur: Projecteur;
		centre1: { x: number; y: number; z: number };
		centre2: { x: number; y: number; z: number };
		rayon?: number;
		rotation?: number;
	};

	let { nature, projecteur, centre1, centre2, rayon: r, rotation = 0 }: Props = $props();

	const c1 = $derived(new V3(centre1.x, centre1.y, centre1.z));
	const c2 = $derived(new V3(centre2.x, centre2.y, centre2.z));
	const axe = $derived(c2.soustraire(c1));
	const rayon = $derived(r ?? 0.4 * axe.norme());

	// Base orthonormée (u, w) dans le plan ⟂ axe
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

	// Sommets 3D des deux bases
	const base1_3d: V3[] = $derived.by(() => {
		const n = Math.max(3, Math.floor(nature));
		const pts: V3[] = [];
		for (let i = 0; i < n; i++) {
			const t = rotation + (2 * Math.PI * i) / n;
			const dir = u.multiplier(Math.cos(t)).ajouter(w.multiplier(Math.sin(t)));
			pts.push(c1.ajouter(dir.multiplier(rayon)));
		}
		return pts;
	});
	const base2_3d: V3[] = $derived.by(() => {
		const n = Math.max(3, Math.floor(nature));
		const pts: V3[] = [];
		for (let i = 0; i < n; i++) {
			const t = rotation + (2 * Math.PI * i) / n;
			const dir = u.multiplier(Math.cos(t)).ajouter(w.multiplier(Math.sin(t)));
			pts.push(c2.ajouter(dir.multiplier(rayon)));
		}
		return pts;
	});

	// Projections 2D
	const BASE1 = $derived(base1_3d.map((p) => projecteur.P(p)));
	const BASE2 = $derived(base2_3d.map((p) => projecteur.P(p)));

	const dot = (a: V3, b: V3) => a.x * b.x + a.y * b.y + a.z * b.z;

	// Direction de projection (identique au calcul de Pyramide)
	const vueDir = $derived.by(() => {
		const P0 = projecteur.P({ x: 0, y: 0, z: 0 });
		const Pz = projecteur.P({ x: 0, y: 0, z: 1 });
		const a = Pz.x - P0.x;
		const b = Pz.y - P0.y;
		return new V3(-a, -b, 1).normaliser();
	});

	// Visibilité des faces latérales (quadrilatère base1[i], base1[i+1], base2[i+1], base2[i])
	const faces_lat_visibles = $derived.by(() => {
		const n = base1_3d.length;
		const res: boolean[] = new Array(n);
		for (let i = 0; i < n; i++) {
			const S1 = base1_3d[i]!;
			const S2 = base1_3d[(i + 1) % n]!;
			const e1 = S2.soustraire(S1);
			const e2 = base2_3d[i]!.soustraire(S1);
			res[i] = dot(e1.cross(e2), vueDir) < 0;
		}
		return res;
	});

	// Visibilité des bases
	const axe_norm = $derived(axe.normaliser());
	const base1_visible = $derived(dot(axe_norm, vueDir) > 0);
	const base2_visible = $derived(dot(axe_norm, vueDir) < 0);
</script>

<!-- =================== ARÊTES CACHÉES (pointillés) =================== -->

<!-- Arêtes de base1 cachées : visibles si base1 visible OU face latérale adjacente visible -->
{#each BASE1 as S, i}
	{@const S_NEXT = BASE1[(i + 1) % BASE1.length]!}
	{#if !(base1_visible || faces_lat_visibles[i])}
		<Polylignes points={[S, S_NEXT]} stroke="#666" stroke-width={6} stroke-dasharray="25 15" />
	{/if}
{/each}

<!-- Arêtes de base2 cachées -->
{#each BASE2 as S, i}
	{@const S_NEXT = BASE2[(i + 1) % BASE2.length]!}
	{#if !(base2_visible || faces_lat_visibles[i])}
		<Polylignes points={[S, S_NEXT]} stroke="#666" stroke-width={6} stroke-dasharray="25 15" />
	{/if}
{/each}

<!-- Arêtes verticales cachées : cachées si les deux faces latérales adjacentes sont cachées -->
{#each BASE1 as S, i}
	{@const S2 = BASE2[i]!}
	{@const i_prev = (i - 1 + BASE1.length) % BASE1.length}
	{#if !(faces_lat_visibles[i] || faces_lat_visibles[i_prev])}
		<Polylignes points={[S, S2]} stroke="#666" stroke-width={6} stroke-dasharray="25 15" />
	{/if}
{/each}

<!-- =================== ARÊTES VISIBLES (trait plein) =================== -->

<!-- Arêtes de base1 visibles -->
{#each BASE1 as S, i}
	{@const S_NEXT = BASE1[(i + 1) % BASE1.length]!}
	{#if base1_visible || faces_lat_visibles[i]}
		<Polylignes points={[S, S_NEXT]} stroke="#111" stroke-width={6} />
	{/if}
{/each}

<!-- Arêtes de base2 visibles -->
{#each BASE2 as S, i}
	{@const S_NEXT = BASE2[(i + 1) % BASE2.length]!}
	{#if base2_visible || faces_lat_visibles[i]}
		<Polylignes points={[S, S_NEXT]} stroke="#111" stroke-width={6} />
	{/if}
{/each}

<!-- Arêtes verticales visibles -->
{#each BASE1 as S, i}
	{@const S2 = BASE2[i]!}
	{@const i_prev = (i - 1 + BASE1.length) % BASE1.length}
	{#if faces_lat_visibles[i] || faces_lat_visibles[i_prev]}
		<Polylignes points={[S, S2]} stroke="#111" stroke-width={6} />
	{/if}
{/each}
