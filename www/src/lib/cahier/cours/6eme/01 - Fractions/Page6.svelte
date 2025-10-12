<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Exemples, MultiItem, Methode } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<Exercice niveau={6} id_exercice={255003} position={13} />
	<Exercice niveau={6} id_exercice={255004} position={22} />
</DansLaMarge>

<Contenu>
	<Partie numero={6} titre="Nombres mixtes" />
	<Definition lignes={3}>
		Un nombre mixte est composé :
		<Item>d'un nombre entier {@html math('>1')}</Item>
		<Item>d'une fraction {@html math('<1')}</Item>
	</Definition>
	<Exemples>
		<MultiItem>
			<Item>{@html math('\\large{2} \\footnotesize{\\frac{1}{3}}')}</Item>
			<Item>{@html math('\\large{3} \\footnotesize{\\frac{4}{5}}')}</Item>
			<Item>{@html math('\\large{5} \\footnotesize{\\frac{1}{9}}')}</Item>
		</MultiItem>
	</Exemples>
	<Methode lignes={7}>
		Convertir un nombre mixte en fraction
		<MultiItem style="color: var(--bleu);">
			<LatexAlign
				lignes={6}
				code={`\\large{2} \\footnotesize{\\frac{1}{3}} &= 2 + \\dfrac{1}{3} \\\\ & \\\\ &= \\dfrac{6}{3} + \\dfrac{1}{3} \\\\ & \\\\ &= \\dfrac{7}{3}`}
			/>
			<LatexAlign
				lignes={6}
				code={`\\large{3} \\footnotesize{\\frac{4}{5}} &= 3 + \\dfrac{4}{5} \\\\ & \\\\ &= \\dfrac{15}{5} + \\dfrac{4}{5} \\\\ & \\\\ &= \\dfrac{19}{5}`}
			/>
			<LatexAlign
				lignes={6}
				code={`\\large{5} \\footnotesize{\\frac{1}{9}} &= 5 + \\dfrac{1}{9} \\\\ & \\\\ &= \\dfrac{45}{9} + \\dfrac{1}{9} \\\\ & \\\\ &= \\dfrac{46}{9}`}
			/>
		</MultiItem>
	</Methode>
	<Methode lignes={7}>
		Convertir une fraction en nombre mixte
		<MultiItem style="color: var(--bleu);">
			<LatexAlign
				lignes={6}
				code={`\\frac{7}{3} &= \\dfrac{6}{3} + \\dfrac{1}{3} \\\\ & \\\\ &= 2 + \\dfrac{1}{3} \\\\ & \\\\ &= \\large{2} \\footnotesize{\\frac{1}{3}}`}
			/>
			<LatexAlign
				lignes={6}
				code={`\\frac{19}{5} &= \\dfrac{15}{5} + \\dfrac{4}{5} \\\\ & \\\\ &= 3 + \\dfrac{4}{5} \\\\ & \\\\ &= \\large{3} \\footnotesize{\\frac{4}{5}}`}
			/>
			<LatexAlign
				lignes={6}
				code={`\\frac{46}{9} &= \\dfrac{45}{9} + \\dfrac{1}{9} \\\\ & \\\\ &= 5 + \\dfrac{1}{9} \\\\ & \\\\ &= \\large{5} \\footnotesize{\\frac{1}{9}}`}
			/>
		</MultiItem>
	</Methode>
</Contenu>
