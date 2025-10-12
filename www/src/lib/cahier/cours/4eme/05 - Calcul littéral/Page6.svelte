<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Paragraphe, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Double distributivité" />
	<Paragraphe couleur="rouge" nom_du_paragraphe="Règle">
		Soient a, b, c, d, quatre nombres :
		{@html math('(a + b) (c + d) = ac + ad + bc + b d')}
	</Paragraphe>
	<Exemples lignes={14}>
		<LatexAlign
			lignes={4}
			lignes_vides={1}
			code="
			\text{'{A}'} &= (2x+3)(4+5x) \\
            &= 2x \times 4 + 2x \times 5x + 3 \times 4 + 3 \times 5x \\
            &= 8x + 10x^2 + 12 + 15x \\
            &= 10x^2 + 23x + 12"
		/>
		<LatexAlign
			lignes={3}
			lignes_vides={1}
			code="
            \text{'{B}'} &= 3(x+12) + 2x(x+12) \\
            &= 3 \fbox{'{$(x + 12)$}'} + 2x \fbox{'{$(x + 12)$}'} \\
            &= (x+12)(3+2x)"
		/>
		<LatexAlign
			lignes={5}
			code="
		    \text{'{C}'} &=(-4x+7)(-2+2x) \\
            &= (-4x) \times (-2) + (-4x) \times 2x + 7 \times (-2) + 7 \times 2x \\
            &= 8x + (-8x^2) + (-14) + 14x \\
            &= -8x^2 + 22x - 14"
		/>
	</Exemples>
</Contenu>
