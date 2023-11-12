<script lang="ts">
    import Partie from '$lib/chapitrage/Partie.svelte';
	import Definition from '$lib/chapitrage/sections/Definition.svelte';
    import Chapitre from '$lib/chapitrage/Chapitre.svelte';
    import Exemples from '$lib/chapitrage/sections/Exemples.svelte';
	import Propriete from '$lib/chapitrage/sections/Propriete.svelte';
    import Schema from '$lib/chapitrage/sections/Schema.svelte';

    var t: number[] = [-1, -1, -1];

    function lancer_animation(index: number) {
        t[index] = 1
        animation(index);
    }

    function animation(index: number) {
        if (t[index] > -1) {
            t[index] = t[index] - 0.01;
            setTimeout(() => {animation(index)}, 10);
        }
    }
</script>

<Chapitre numero={3} titre="Transformations du plan">
    <Partie numero={1} titre="Symétrie axiale">
        <Definition>
            Deux figures (ℱ) et (ℱ') sont symétriques par rapport à une droite (d) si 
            en "repliant le plan" sur (d), (ℱ) et (ℱ') se superposent.
        </Definition>
        <Exemples>
            <svg viewBox="0 0 700 900" style="width: 25em;" role="none"
                on:click={() => {lancer_animation(0);}}>
                <defs>
                    <path id="trapeze" fill="none" stroke="black" stroke-width={5} d="M 100 400 L 200 200 L 500 200 L 600 400 Z" />
                </defs>
                
                <use href="#trapeze" />
                <line x1={0} y1={500} x2={800} y2={500} stroke="black" stroke-width={5} />
                <use href="#trapeze" style="transform-origin: 400px 500px; transform: scaleY({t[0]});" />
            </svg>

            <svg viewBox="0 -100 1400 900" style="width: 35em;" role="none"
                on:click={() => {lancer_animation(1);}} >
                <defs>
                    <g id="figure2">
                        <line x1={300} x2={400} y1={400} y2={200}  stroke="black" stroke-width={5} />
                        <circle cx={300} cy={400} r={225} fill="none" stroke="black" stroke-width={5} />
                        <circle cx={400} cy={200} r={225} fill="none" stroke="black" stroke-width={5} />
                    </g>
                </defs>

                <use href="#figure2" />
                <line x1={700} x2={700} y1={-100} y2={900} stroke="black" stroke-width={5} />
                <use href="#figure2" style="transform-origin: 700px 400px; transform: scaleX({t[1]});" />
            </svg>
        </Exemples>
        <Propriete>
            Si deux points A et A' sont symétriques par rapport à (d), alors (d) est la médiatrice du segment [AA'].
        </Propriete>
        <Schema>
            <svg viewBox="0 0 40000 32000" style="width: 30em; transform-origin: center; transform: rotate(35deg)" role="none"
                on:click={() => {lancer_animation(2);}} >
                <defs>
                    <path id="flocon" 
                    d="M5970 11298 
                    l0 -873 -448 448 -447 447 -305 -305 -305 -305 753 -753 752 -752 -2 -366 -3 -365 -905 478 
                    c-498 262 -911 476 -918 475 -23 -4 -621 -442 -622 -456 0 -7 38 -237 85 -510 239 -1395 273 -1596 269 -1600 -2 -3 -181 53 -398 124 l-393 128 -474 930 
                    c-261 511 -479 937 -485 945 -9 12 -71 -16 -392 -180 
                    l-381 -194 285 -558 
                    c157 -307 284 -560 282 -561 -2 -2 -368 115 -813 260 -446 145 -816 265 -824 267 -14 3 -38 -64 -214 -607 -36 -110 -63 -203 -59 -206 9 -8 1616 -529 1631 -529 6 0 11 -3 11 -7 0 -5 -252 -136 -559 -293 
                    l-559 -285 110 -215 
                    c160 -312 280 -545 282 -547 1 -1 426 213 944 477 518 264 946 480 951 480 15 0 695 -221 703 -229 4 -3 -310 -314 -697 -691 -388 -377 -705 -689 -705 -694 0 -9 154 -489 213 -666 
                    l22 -65 155 -22 
                    c773 -111 1933 -283 1937 -286 5 -5 -524 -737 -533 -737 -5 0 -1047 -165 -1743 -275 -190 -31 -346 -56 -347 -58 -3 -2 128 -839 132 -845 1 -2 281 41 623 96 341 54 621 97 621 96 0 -2 -230 -319 -510 -705 -281 -386 -509 -703 -508 -705 2 -1 158 -115 348 -253 314 -229 346 -250 358 -234 7 10 236 326 510 702 394 543 498 680 504 665 6 -16 81 -480 177 -1102 10 -62 20 -114 22 -116 2 -1 193 27 424 64 
                    l420 67 -2 24 
                    c-3 32 -33 224 -158 1009 -58 366 -120 756 -137 866 
                    l-31 201 253 348 254 348 15 -34 
                    c9 -18 208 -423 442 -899 
                    l426 -865 390 -3 389 -2 229 462 
                    c126 255 327 660 446 901 
                    l217 438 251 -345 
                    c138 -189 251 -352 251 -361 0 -15 -30 -206 -234 -1495 -47 -294 -86 -548 -88 -564 
                    l-3 -29 420 -67 
                    c372 -59 421 -65 427 -51 4 9 46 264 93 566 48 303 90 571 94 598 5 26 10 50 13 53 3 3 232 -307 508 -688 277 -381 506 -696 510 -701 4 -5 647 451 693 493 4 4 -222 323 -502 710 -281 386 -511 703 -511 704 0 1 280 -42 621 -96 342 -54 623 -97 624 -96 4 6 134 842 131 845 -2 2 -216 37 -477 78 -261 42 -730 116 -1044 166 -316 50 -575 95 -581 102 -21 22 -525 720 -522 723 4 3 132 22 1675 244 229 33 418 61 419 63 7 8 234 717 233 728 0 8 -317 322 -705 699 -387 376 -700 688 -696 691 4 4 164 57 356 119 
                    l349 113 71 -35 
                    c39 -20 464 -236 945 -481 
                    l875 -446 16 27 
                    c9 15 97 187 197 382 
                    l181 356 -559 284 
                    c-307 157 -555 288 -551 291 4 4 372 125 817 269 446 145 813 265 817 269 4 3 -38 143 -93 311 -54 168 -113 349 -130 403 -19 58 -36 97 -44 97 -8 0 -379 -119 -827 -264 -447 -146 -814 -263 -815 -262 -2 2 125 254 281 562 157 307 284 559 283 560 -1 0 -172 88 -380 194 -209 106 -382 188 -387 184 -5 -5 -223 -430 -485 -944 -262 -514 -477 -935 -478 -936 -9 -9 -780 -254 -785 -250 -4 5 40 272 289 1711 54 313 66 402 56 411 -14 12 -586 427 -603 437 -6 4 -423 -209 -925 -473 
                    l-914 -479 -3 367 -2 367 752 752 753 753 -305 305 -305 305 -447 -447 -448 -448 0 873 0 872 -430 0 -430 0 0 -872z 
                    m-725 -3418 
                    l720 -379 3 -660 c1 -364 -2 -661 -6 -661 -17 0 -1145 369 -1152 377 -4 4 -33 157 -64 338 -190 1117 -227 1332 -230 1348 -2 9 -1 17 2 17 4 0 331 -171 727 -380z 
                    m2900 -476 
                    c-80 -467 -147 -849 -148 -850 -5 -4 -1151 -374 -1158 -374 -5 0 -9 290 -9 658 
                    l0 658 727 381 
                    c400 210 729 380 731 378 2 -2 -62 -385 -143 -851z 
                    m-3067 -1844 
                    c339 -111 618 -202 619 -204 6 -6 -659 -917 -673 -923 -12 -4 -1663 233 -1671 240 -1 2 66 71 150 154 231 228 952 932 955 932 2 1 281 -89 620 -199z 
                    m3818 -342 
                    c305 -298 551 -544 547 -548 -12 -10 -1648 -244 -1664 -238 -15 6 -683 918 -677 924 3 2 1227 402 1236 404 2 0 253 -244 558 -542z 
                    m-2147 -848 
                    c188 -258 344 -475 347 -483 6 -17 -37 -108 -416 -872 -156 -313 -285 -563 -288 -555 -3 8 -145 298 -317 645 -376 761 -380 769 -369 788 23 39 688 947 694 947 4 0 161 -211 349 -470z" />
                </defs>

                <use href="#flocon" fill='black' x="5000" y="5000" />
                <line x1="22000" y1="0" x2="22000" y2="30000" stroke="green" stroke-width={200} />
                <use href="#flocon" fill='black' x="5000" y="5000" style="transform-origin: 22000px 15000px; transform: scaleX({t[2]});" />

                <circle cx="17700" cy="12600" r="250" fill="red" />
                <circle cx="26300" cy="12600" r="250" fill="red" />
                <line x1="17700" y1="12600" x2="26300" y2="12600" stroke="red" stroke-width={60} />

                <!-- codage -->
                <text x="17700" y="14000" font-size="1300" fill="red" text-anchor="middle">A</text>
                <text x="26300" y="14000" font-size="1300" fill="red" text-anchor="middle">A'</text>
                <rect x="22000" y={12600-800} width="800" height="800" fill="red" />
                <text x="22000" y="2000" font-size="1300" fill="red" text-anchor="start">(d)</text>
                <text x={(17700 + 22000)/2} y="13000" font-size="1300" fill="red" text-anchor="middle">||</text>
                <text x={(26300 + 22000)/2} y="13000" font-size="1300" fill="red" text-anchor="middle">||</text>
            </svg>
        </Schema>
        <Propriete>
            La symétrie axiale est une <i>isométrie du plan</i>, cela signifie que :
            <ul>
                <li>la nature des objets est conservée <span style="color: blue;">(le symétrique d'un carré est un carré)</span></li>
                <li>les longueurs sont conservées <span style="color: blue;">(le symétrique d'un segment de longueur 5 cm est un segment de longueur 5 cm)</span></li>
                <li>les mesures des angles sont conservées <span style="color: blue;">(le symétrique d'un angle de 90° est un angle de 90°)</span></li>
            </ul>
        </Propriete>
    </Partie>
</Chapitre>