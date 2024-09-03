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
    { titre: "Nombres entiers", categories: ["Nombres et calculs"]},
    { titre: "Vocabulaire de géométrie", categories: ["Espace et géométrie"]},
    { titre: "Fractions/Partage", categories: ["Nombres et calculs"]},
    { titre: "Figures simples", categories: ["Espace et géométrie"]},
    { titre: "Nombres décimaux", categories: ["Nombres et calculs"]}
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