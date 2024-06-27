type Eleve = {
    nom: string,
    prenom: string,
    niveau: "A" | "B" | "C" | "D" | "",
    moteur: boolean,
    zozo: boolean,
    genre: "M" | "F",
    LV1: 'AGL1',
    LV2: 'ALL' | 'ESP' | 'ALL2' | 'HISP',
    options: {
        chorale: boolean,
        latin: boolean,
        grec: boolean,
    }
}

type Classe = {
    index: number,
    eleves: Eleve[],
    options: {
        latin: boolean,
        grec: boolean,
        allemand_lv2: boolean,
        allemand_bilangue: boolean,
        espagnol_lv2: boolean,
        hispanica: boolean,
    }
}

type Donnees = {
    classes: Classe[],
    eleves: Eleve[]
}

function ajouterEleve(classe: Classe, eleve: Eleve): Classe {
    return {
        ...classe,
        eleves: [...classe.eleves, eleve].sort((a, b) => a.nom.localeCompare(b.nom))
    }
}

function creer_classe(index: number) {
    return {
        index,
        eleves: [],
        options: {
            latin: false,
            grec: false,
            allemand_lv2: false,
            allemand_bilangue: false,
            espagnol_lv2: false,
            hispanica: false,
        }
    }
}

async function importerDonneesDepuisLePressePapier(nombre_de_classes: number): Promise<Donnees> {
    let presse_papier = await navigator.clipboard.readText();
    let lignes = presse_papier.split('\n');

    let eleves: Eleve[] = [];

    for (var ligne in lignes) {
        var contenu = lignes[ligne].split('\t');

        if (contenu.length < 8) {
            console.log(ligne, contenu)
            continue
        }
        
        eleves.push({
            nom: contenu[2],
            prenom: contenu[3],
            niveau: contenu[0] as "A" | "B" | "C" | "D" | "",
            moteur: contenu[1].includes('M'),
            zozo: contenu[1].includes('Z'),
            genre: contenu[4] as "M" | "F",
            LV1: contenu[5] as 'AGL1',
            LV2: contenu[6] as 'ALL' | 'ESP' | 'ALL2' | 'HISP',
            options: {
                chorale: contenu[7].includes('CHOR'),
                latin: contenu[7].includes('LAT'),
                grec: contenu[7].includes('GREC'),
            }
        })
    }

    return {
        classes: Array.from({length: nombre_de_classes}, (_, i) => creer_classe(i)),
        eleves: eleves
    }
}

function couleur(option: string): string {
    switch (option) {
        case 'latin':
            return 'green';
        case 'grec':
            return 'purple';
        case 'allemand_lv2':
        case 'ALL2':
            return 'blue';
        case 'allemand_bilangue':
        case 'ALL':
            return 'darkblue';
        case 'espagnol_lv2':
        case 'ESP':
            return 'darkorange';
        case 'hispanica':
        case 'HISP':
            return 'red';
    }
    return 'black';
}

function texte(option: string): string {
    switch (option) {
        case 'latin':
            return 'Latin';
        case 'grec':
            return 'Grec';
        case 'allemand_lv2':
        case 'ALL2':
            return 'All. LV2';
        case 'allemand_bilangue':
        case 'ALL':
            return 'All. bilangue';
        case 'espagnol_lv2':
        case 'ESP':
            return 'Esp. LV2';
        case 'hispanica':
        case 'HISP':
            return 'Hispanica';
    }
    return '';
}

export type { Eleve, Classe, Donnees };
export { ajouterEleve, importerDonneesDepuisLePressePapier, couleur, texte };
