import Chapitre00 from "./Chapitre00.svelte";
import Chapitre01 from "./Chapitre01.svelte";
import Chapitre02 from "./Chapitre02.svelte";
import Chapitre03 from "./Chapitre03.svelte";
import Chapitre04 from "./Chapitre04.svelte";
import Chapitre05 from "./Chapitre05.svelte";
import Chapitre06 from "./Chapitre06.svelte";
import Chapitre07 from "./Chapitre07.svelte";
import Chapitre08 from "./Chapitre08.svelte";
import Chapitre09 from "./Chapitre09.svelte";
import Chapitre10 from "./Chapitre10.svelte";
import Chapitre11 from "./Chapitre11.svelte";
import Chapitre12 from "./Chapitre12.svelte";
import Chapitre13 from "./Chapitre13.svelte";
import Chapitre14 from "./Chapitre14.svelte";
import Chapitre15 from "./Chapitre15.svelte";

const chapitres = [
    Chapitre00,
    Chapitre01,
    Chapitre02,
    Chapitre03,
    Chapitre04,
    Chapitre05,
    Chapitre06,
    Chapitre07,
    Chapitre08,
    Chapitre09,
    Chapitre10,
    Chapitre11,
    Chapitre12,
    Chapitre13,
    Chapitre14,
    Chapitre15
];

export function getChapitre(numero_chapitre: number) {
    return chapitres[numero_chapitre];
}