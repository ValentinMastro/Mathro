export type Categories =   "Nombres et calculs" | 
                    "Espace et géométrie" | 
                    "Grandeurs et mesures" | 
                    "Algorithmique et programmation" | 
                    "Organisation et gestion de données";

export function couleur_de_la_categorie(categorie: Categories) {
    switch (categorie) {
        case "Nombres et calculs":
            return "blue";
        case "Espace et géométrie":
            return "green";
        case "Grandeurs et mesures":
            return "orange";
        case "Algorithmique et programmation":
            return "purple";
        case "Organisation et gestion de données":
            return "red"
        default:
            return "black";
    }
}

type Chapitre = {
    titre: string,
    categories: Categories[],
    premiere_page?: number,
}

let sommaire_6eme: Chapitre[] = [
    { titre: "Connaître les différentes écritures d’un nombre décimal", categories: ["Nombres et calculs"], premiere_page: 3 },
    { titre: "Connaître le vocabulaire de base et les notations usuelles en géométrie", categories: ["Espace et géométrie"]},
    { titre: "Comparer des nombres, repérer et encadrer un nombre décimal", categories: ["Nombres et calculs"]},
    { titre: "Le cercle", categories: ["Espace et géométrie"] },
    { titre: "Reconnaître une situation de proportionnalité", categories: ["Nombres et calculs"] },
    { titre: "Connaître le vocabulaire des angles et estimer leur mesure", categories: ["Grandeurs et mesures"] },
    { titre: "Position relative de deux droites", categories: ["Espace et géométrie"] },

    { titre: "Résoudre des problèmes avec les 4 opérations", categories: ["Nombres et calculs"] },
    { titre: "Connaître les définitions des polygones usuels et le vocabulaire associé", categories: ["Espace et géométrie"] },
    { titre: "Périmètres", categories: ["Grandeurs et mesures"] },
    { titre: "Multiplier ou diviser par 10, 100, 1000 et convertir des unités", categories: ["Nombres et calculs", "Grandeurs et mesures"] },
    { titre: "Aires", categories: ["Grandeurs et mesures"] },
    { titre: "Utiliser la simple distributivité sur des exemples numériques", categories: ["Nombres et calculs"] },
    { titre: "Effectuer des conversions d’unités de temps", categories: ["Grandeurs et mesures"] },
    { titre: "Utiliser la symétrie axiale", categories: ["Espace et géométrie"] },
    { titre: "Utiliser et ajouter des fractions simples", categories: ["Nombres et calculs"] },

    { titre: "Utiliser le rapporteur", categories: ["Grandeurs et mesures"] },
    { titre: "Multiplier un nombre par une fraction", categories: ["Nombres et calculs"] },
    { titre: "Reconnaître et décrire un parallélépipède rectangle", categories: ["Espace et géométrie"] },
    { titre: "Déterminer l’aire d’un triangle", categories: ["Grandeurs et mesures"] },
    { titre: "Multiplier deux nombres décimaux", categories: ["Nombres et calculs"] },
    { titre: "Calculer le volume d’un solide", categories: ["Grandeurs et mesures"] },
    { titre: "La médiatrice d’un segment", categories: ["Espace et géométrie"] },
    { titre: "Calculer le périmètre d’un cercle et l’aire d’un disque", categories: ["Grandeurs et mesures"] },
    { titre: "Utiliser la proportionnalité pour résoudre un problème", categories: ["Nombres et calculs"] },
    { titre: "Utiliser les positions relatives de droites", categories: ["Espace et géométrie"] },
    { titre: "Division décimale", categories: ["Nombres et calculs"] },
];

let sommaire_4eme: Chapitre[] = [
    { titre: "Opérations sur les nombres relatifs", categories: ["Nombres et calculs"], premiere_page: 3 },
    { titre: "Théorème de Pythagore", categories: ["Espace et géométrie", "Nombres et calculs", "Grandeurs et mesures"], premiere_page: 6 },
    { titre: "Fractions et proportionnalité", categories: ["Nombres et calculs"], premiere_page: 10 },
    { titre: "Transformations du plan", categories: ["Espace et géométrie"], premiere_page: 16 },
    { titre: "Calcul littéral", categories: ["Nombres et calculs"], premiere_page: 19 },
    { titre: "Théorème de Thalès", categories: ["Espace et géométrie", "Grandeurs et mesures"], premiere_page: 23 },
    { titre: "Puissances", categories: ["Nombres et calculs"], premiere_page: 25 },
    { titre: "Statistiques", categories: ["Organisation et gestion de données"], premiere_page: 30 },
    { titre: "Cosinus", categories: ["Espace et géométrie", "Nombres et calculs", "Grandeurs et mesures"], premiere_page: 38 },
    { titre: "Équations", categories: ["Nombres et calculs"], premiere_page: 41 },
    { titre: "Probabilités", categories: ["Organisation et gestion de données"], premiere_page: 44 },
    { titre: "Décomposition en facteurs premiers", categories: ["Nombres et calculs"], premiere_page: 47 },
    { titre: "Solides de l'espace", categories: ["Espace et géométrie"], premiere_page: 49 },
    { titre: "Repérage", categories: ["Espace et géométrie"], premiere_page: 54 },
    { titre: "Réciproques", categories: ["Espace et géométrie", "Grandeurs et mesures"], premiere_page: 57 },
    { titre: "Programmation", categories: ["Algorithmique et programmation"], premiere_page: 59 },
];

export function sommaire(niveau: 3 | 4 | 5 | 6): Chapitre[] {
    switch (niveau) {
        case 3:
            return [];
        case 4:
            return sommaire_4eme;
        case 5:
            return [];
        case 6:
            return sommaire_6eme;
    }
}