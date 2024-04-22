import Chapitre00 from "./Chapitre00.svelte";
import Chapitre01 from "./Chapitre01.svelte";

const chapitres = [
    Chapitre00,
    Chapitre01
];

export function getChapitre(numero_chapitre: number) {
    return chapitres[numero_chapitre];
}