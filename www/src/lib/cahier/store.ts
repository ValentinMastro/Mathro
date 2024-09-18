import { writable, derived } from 'svelte/store';

export let numero_de_la_page = writable(0);
export let niveau = writable<3 | 4 | 5 | 6>(6);
export let deux_pages = writable(true);
export let plein_ecran = writable(false);
export let largeur_plein_ecran = writable(100);
export let sur_mobile = writable(false);

export function nombre_de_pages(niveau: 3 | 4 | 5 | 6): number {
    switch (niveau) {
        case 3:
            return 0;
        case 4:
            return 97;
        case 5:
            return 97;
        case 6:
            return 97;
    }
}

export let taille_page = writable(0);
export let taille_sommaire = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 25
});
export let taille_numero_de_page = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 60
});
export let taille_titre = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 20
});
export let taille_chapitre = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 45
});
export let taille_titre_de_sections = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 50
});
export let taille_texte = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 60
});

export let separateur_chapitre = derived([taille_chapitre], ([$taille_chapitre]) => {
    return $taille_chapitre * 1.22
});
export let separateur_texte = derived([taille_texte], ([$taille_texte]) => {
    return $taille_texte * 1.6
});


export let hauteur_ligne_cahier = derived([taille_page], ([$taille_page]) => {
    return $taille_page / 37.1
});

