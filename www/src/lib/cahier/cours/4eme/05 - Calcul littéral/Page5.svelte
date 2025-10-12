<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Paragraphe } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Développer, factoriser, réduire" />
	<Definition lignes={4}>
		Développer une expression littérale, c'est transformer un produit en une somme.<br />
		Factoriser une expression littérale, c'est transformer une somme en un produit.
	</Definition>
	<SousPartie numero={1} titre="Distributivité" />
	<Paragraphe couleur="rouge" nom_du_paragraphe="Règle">
		Soient {@html math('a')}, {@html math('b')} et {@html math('k')} trois nombres :
		{@html math('k (a + b) = ka + kb')}
	</Paragraphe>
	<Exemples lignes={11}>
		<LatexAlign
			lignes={2}
			code="
			    x(x+4)  &= x \times x + x \times 4 \\
                        &= x^2 + 4x"
		/>
		<LatexAlign
			lignes={2}
			code="
			    3(2x+5) &= 3 \times 2x + 3 \times 5 \\
                        &= 6x + 15"
		/>
		<LatexAlign
			lignes={2}
			code="
			    2x(x+3) &= 2x \times x + 2x \times 3 \\
                        &= 2x^2 + 6x"
		/>
		<LatexAlign
			lignes={2}
			code="
			    2x + xy &= 2 \fbox{'{$x$}'} + \fbox{'{$x$}'} y \\
                        &= x (2 + y)"
		/>
		<LatexAlign
			lignes={3}
			code="
                3x + 15 &= 3x + 3 \times 5 \\
                        &= \fbox{'{$3$}'} x + \fbox{'{$3$}'} \times 5 \\
                        &= 3 (x + 5)"
		/>
	</Exemples>
</Contenu>
