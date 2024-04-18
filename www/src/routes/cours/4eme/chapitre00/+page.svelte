<script lang="ts">
	import { Chapitre, Partie, SousPartie } from '$lib/chapitrage/all_chapitrages';
	import { Definition, Exemples, Remarque, Propriete } from '$lib/chapitrage/sections/all_sections';
	import { math, display } from 'mathlifier';
</script>

<Chapitre numero={0} titre={'Opérations'}>
	<Partie numero={1} titre={'Natures des nombres'}>
		<SousPartie numero={1} titre="Nombres entiers">
			<Definition>
				Un nombre <i>entier naturel</i> permet de compter des éléments. Il est positif et n'a pas de
				partie décimale.
			</Definition>
			<Exemples>
				<ul>
					<li>5 est un nombre entier naturel</li>
					<li>-5 n'est pas un nombre entier naturel</li>
					<li>5,5 n'est pas un nombre entier naturel</li>
				</ul>
			</Exemples>
			<Definition>
				Un nombre <i>entier relatif</i> n'a pas de partie décimale et peut être positif comme négatif.
			</Definition>
			<Remarque>
				0 est considéré comme un nombre négatif <u>et</u> positif.
			</Remarque>
		</SousPartie>
		<SousPartie numero={2} titre="Fractions et nombres rationnels">
			<Definition>
				Une fraction est un moyen d'écrire le résultat d'une division entre deux nombres entiers :
				le numérateur et le dénominateur.
			</Definition>
			<svg viewBox="20 0 160 100" style="width: 17em;">
				<defs>
					<style>
						text {
							font-family: 'Marianne';
							text-anchor: middle;
							alignment-baseline: middle;
							dominant-baseline: middle;
							fill: black;
							font-size: 50px;
						}
					</style>
				</defs>
				<rect x="0" y="0" width="200" height="100" fill="lightgrey" />
				<text x="40" y="50">
					3
					<animate attributeName="x" values="40;40;70;100;100" dur="3s" repeatCount="indefinite" />
					<animate attributeName="y" values="50;50;40;30;30" dur="3s" repeatCount="indefinite" />
				</text>
				<text x="160" y="50">
					4
					<animate attributeName="x" values="160;160;130;100;100" dur="3s" repeatCount="indefinite" />
					<animate attributeName="y" values="50;50;65;80;80" dur="3s" repeatCount="indefinite" />
				</text>
				<line x1="85" y1="50" x2="115" y2="50" stroke="black" stroke-width="3" />
				<circle cx="100" cy="38" r="3" fill="black" >
					<animate attributeName="opacity" values="1;1;1;0;0" dur="3s" repeatCount="indefinite" />
				</circle>
				<circle cx="100" cy="62" r="3" fill="black" >
					<animate attributeName="opacity" values="1;1;1;0;0" dur="3s" repeatCount="indefinite" />
				</circle>
			</svg>
			<Definition>
				S'il existe une division entre deux nombres entiers égale à un nombre, alors ce nombre est <i>rationnel</i>.
			</Definition>
			<Exemples>
				<ul>
					<li>
						{@html math('0{,}75')} est rationnel car {@html math('0{,}75 = \\frac{3}{4}')}
					</li>
					<li>
						{@html math('0{,}17')} est rationnel car {@html math('0{,}17 = \\frac{17}{100}')}
					</li>
					<li>
						{@html math('\\pi')} n'est pas un nombre rationnel
					</li>
				</ul>
			</Exemples>
		</SousPartie>
	</Partie>
	<Partie numero={2} titre={'Les 5 opérations de base'}>
		<SousPartie numero={1} titre={'Addition'}>
			<Definition>
				L'addition décrit la réunion de deux quantités. Elle est notée avec le symbole +, les deux
				nombres additionnés sont les <i>termes</i> et le résultat est appelé la <i>somme</i>.
			</Definition>
			<Propriete>
				La somme ne dépend pas de l'ordre des termes.<br />
				(On dit que l'addition est <i>commutative</i>.)
			</Propriete>
			<Propriete>
				Pour additionner deux nombres relatifs :
				<ul>
					<li>
						s'ils sont de même signe, la somme a le même signe et on additionne les distances à zéro
						;
					</li>
					<li>
						s'ils sont de signes différents, le signe de la somme est celui du terme de la plus
						grande distance à zéro, et on soustrait les distances à zéro.
					</li>
				</ul>
			</Propriete>
			<Exemples>
				<ul>
					<li>{@html math('17+5=')}</li>
					<li>{@html math('12+(-4)=')}</li>
					<li>{@html math('(-3)+(-6)=')}</li>
					<li>{@html math('(-5)+(+14)=')}</li>
				</ul>
			</Exemples>
		</SousPartie>
		<SousPartie numero={2} titre="Soustraction">
			<Definition>
				La soustraction décrit le retranchement d'une quantité à une autre. Elle est notée avec le
				symbole -, les deux nombres sont les <i>termes</i> et le résultat est appelé la
				<i>différence</i>.
			</Definition>
			<Propriete>Soustraire un nombre revient à ajouter son opposé.</Propriete>
			<Exemples>
				<ul>
					<li>{@html math('124-95=')}</li>
					<li>{@html math('12-(-4)=')}</li>
					<li>{@html math('(-12)-(+6)=')}</li>
					<li>{@html math('(-89)-(-51)=')}</li>
				</ul>
			</Exemples>
		</SousPartie>
		<SousPartie numero={3} titre="Multiplication">
			<Definition>
				La multiplication est la répétition successive d'une addition. Les nombres multipliés sont
				les <i>facteurs</i>
				et le résultat est appelé le <i>produit</i>.
			</Definition>
			<Propriete>
				Le produit ne dépend pas de l'ordre des facteurs.<br />
				(On dit que la multiplication est <i>commutative</i>)
			</Propriete>
			<Propriete>
				Pour multiplier des nombres relatifs :
				<ul>
					<li>si le nombre de <i>facteurs négatifs</i> est impair, le produit est négatif ;</li>
					<li>si le nombre de <i>facteurs négatifs</i> est pair, le produit est positif.</li>
				</ul>
			</Propriete>
		</SousPartie>
		<SousPartie numero={4} titre="Division">
			<Definition>
				La division permet de séparer en plusieurs parts égales une quantité. On divise le <i>dividende</i>
				par le <i>diviseur</i> afin d'obtenir le <i>quotient</i>.<br />
				Les symboles utilisés pour la division sont :
				<ul>
					<li>les deux-points « : » ;</li>
					<li>le <i>slash</i> « / »</li>
					<li>l'obélus « ÷ »</li>
				</ul>
			</Definition>
		</SousPartie>
		<SousPartie numero={5} titre="Modulo">
			<Definition>
				À deux entiers naturels {@html math('a')} et {@html math('b')}, {@html math('b')} non nul, on
				associe deux entiers naturels : le quotient {@html math('q')} et le reste {@html math('r')} tels
				que :
				{@html display('a = bq + r')}
			</Definition>
			<Definition>
				« {@html math('a')} modulo {@html math('b')} » est le reste de la division euclidienne 
				de {@html math('a')} par {@html math('b')}.
			</Definition>
		</SousPartie>
	</Partie>
	<Partie numero={3} titre="La priorité des opérations">
		<Propriete>
			Dans un calcul contenant plusieurs opérations :
			<ul>
				<li>la priorité est donnée aux calculs entres parenthèses</li>
				<li>puis, aux multiplications et aux divisions (de gauche à droite)</li>
				<li>enfin, aux additions et aux soustractions (de gauche à droite)</li>
			</ul>
		</Propriete>
		<Remarque>
			Dans un calcul contenant un trait de fraction, on calcule d'abord le numérateur et le
			dénominateur, puis on effectue la division.
		</Remarque>
	</Partie>
</Chapitre>
