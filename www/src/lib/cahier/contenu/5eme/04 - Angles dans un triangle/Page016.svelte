<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Item, Propriete, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

	import { math } from "mathlifier";
</script>

<Chapitre titre="Angles d'un triangle" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="La somme des angles d'un triangle" />
		<LigneVide />
		<Propriete lignes={2}>
			Dans un triangle, la somme des mesures des trois angles est égale à 180°.
		</Propriete>
		<Exemples lignes={4}>
			<Item lignes={2}>
				Si, dans le triangle ABC, {@html math("\\widehat{\\text{ABC}} = 60^\\circ")} et {@html math("\\widehat{\\text{ACB}} = 40^\\circ")}, 
				alors {@html math("\\widehat{\\text{BAC}} = 180 - 60 - 40 = 80^\\circ")}.
			</Item>
			<Item lignes={2}>
				Si, dans le triangle DEF, {@html math("\\widehat{\\text{DEF}} = 90^\\circ")} et {@html math("\\widehat{\\text{DFE}} = 30^\\circ")},
				alors {@html math("\\widehat{\\text{EDF}} = 180 - 90 - 30 = 60^\\circ")}.
			</Item>
		</Exemples>
		<Schema lignes={10}>
			{#snippet svg()}
				<defs>
					<polygon id="triangle" points="200,200 800,300 500,800" />
					<style>
						.angle {
							font-size: 50px;
						}
					</style>
				</defs>
				<use href="#triangle" stroke="black" fill="none" stroke-width="8" />	
				<text x={200} y={200} dx={40} dy={70} class="angle">53°</text>
				<text x={800} y={300} dx={-100} dy={50} class="angle">67°</text>
				<text x={500} y={800} dx={-30} dy={-70} class="angle">60°</text>
			{/snippet}
			{#snippet html()}
				<LigneVide lignes={3} />
				<Texte lignes={3}>
					Après avoir mesuré les angles au rapporteur,
					je remarque que {@html math("53^\\circ + 67^\\circ + 60^\\circ = 180^\\circ")}.
				</Texte>
			{/snippet}
		</Schema>
</Contenu>