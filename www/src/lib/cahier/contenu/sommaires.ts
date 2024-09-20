export type Categories =   
    "Nombres et calculs" | 
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

export let categories_visibles = [
    "Nombres et calculs",
    "Espace et géométrie",
    "Grandeurs et mesures",
    "Algorithmique et programmation",
    "Organisation et gestion de données"
];

export type Chapitre = {
    titre: string,
    categories: Categories[],
    premiere_page?: number,
    attendus?: string[],
}

let sommaire_6eme: Chapitre[] = [
    // Période 1
    { titre: "Nombres entiers", categories: ["Nombres et calculs"], premiere_page: 3},
    { titre: "Vocabulaire de géométrie", categories: ["Espace et géométrie"]},
    { titre: "Fractions/Partage", categories: ["Nombres et calculs"]},
    { titre: "Figures simples", categories: ["Espace et géométrie"]},
    { titre: "Nombres décimaux", categories: ["Nombres et calculs"]},
    // Période 2
    { titre: "Droites", categories: ["Espace et géométrie"]},
    { titre: "Addition, Soustraction et Multiplication", categories: ["Nombres et calculs"]},
    { titre: "Polygones", categories: ["Espace et géométrie"]},
    { titre: "Conversions d'unités", categories: ["Grandeurs et mesures"]},
    { titre: "Symétrie axiale", categories: ["Espace et géométrie"]},
    // Période 3
    { titre: "Division euclidienne", categories: ["Nombres et calculs"]},
    { titre: "Aires et périmètres", categories: ["Espace et géométrie", "Grandeurs et mesures"]},
    { titre: "Division décimale", categories: ["Nombres et calculs"]},
    { titre: "Géométrie dans l'espace", categories: ["Espace et géométrie"]},
    { titre: "Durées, Horaires", categories: ["Grandeurs et mesures"]},
    // Période 4
    { titre: "Rapporteur", categories: ["Espace et géométrie"]},
    { titre: "Proportionnalité", categories: ["Nombres et calculs"]},
    { titre: "Médiatrice", categories: ["Espace et géométrie"]},
    { titre: "Volumes et contenances", categories: ["Espace et géométrie", "Grandeurs et mesures"]},
    { titre: "Se repérer", categories: ["Espace et géométrie"]},
    // Période 5
    { titre: "Résoudre des problèmes", categories: ["Nombres et calculs"]},
    { titre: "Propriétés des droites", categories: ["Espace et géométrie"]},
    { titre: "Représentations usuelles", categories: ["Grandeurs et mesures"]},
    { titre: "Échelles, agrandissements et réductions", categories: ["Espace et géométrie"]},
];

let sommaire_5eme: Chapitre[] = [
    // Période 1
    { titre: "Fractions", categories: ["Nombres et calculs"], premiere_page: 3,
        attendus: [
            "Décomposer une fraction sous la forme d’une somme (ou d’une différence) d’un entier et d’une fraction",
            "Reconnaître et produire des fractions égales",
            "Comparer, ranger, encadrer des fractions dont les dénominateurs sont égaux ou multiples l’un de l’autre",
            "Simplification de fractions"
        ]
    },
    { titre: "Propriétés de la symétrie", categories: ["Espace et géométrie"], premiere_page: 8,
        attendus: [
            "Consolider le travail sur les codages de figures : interprétation d’une figure codée ou réalisation d’un codage",
            "Comprendre l’effet des symétries (axiale et centrale) : conservation du parallélisme, des longueurs et des angles",
            "Déterminer des longueurs et des mesures d’angles en utilisant les propriétés de conservation des symétries (axiale et centrale)",
            "Prouver que deux droites sont parallèles en utilisant la conservation du parallélisme par les symétries (axiale et centrale)",
            "Reconnaître les axes et centres de symétrie d’une figure",
            "Identifier des symétries dans des frises, des pavages, des rosaces",
            "Mener des raisonnements en utilisant des propriétés des figures, des configurations et des symétries"
        ]
    },
    { titre: "Nombres premiers", categories: ["Nombres et calculs"],
        attendus: [
            "Savoir calculer le quotient et le reste dans une division euclidienne",
            "Déterminer si un nombre entier est ou n’est pas multiple ou diviseur d’un autre nombre entier",
            "Modéliser et résoudre des problèmes faisant intervenir les notions de multiple, de diviseur, de quotient et de reste",
            "Utiliser les critères de divisibilité (par 2, 3, 5, 9, 10)",
            "Nombres premiers",
            "Décomposition d’un nombre en produit de facteurs premiers"
        ]
    },
    { titre: "Angles d'un triangle", categories: ["Espace et géométrie"],
        attendus: [
            "Connaître et utiliser la propriété sur la somme des mesures des angles d’un triangle",
            "Reconnaître des triangles particuliers en utilisant les angles",
            "Calculer les angles d’un triangle"
        ]
     },
    { titre: "Nombres relatifs", categories: ["Nombres et calculs"],
        attendus: [
            "Introduction des nombres relatifs",
            "Déterminer l’opposé d’un nombre relatif",
            "Repérer sur une droite graduée les nombres décimaux relatifs",
            "Placer des points ayant pour coordonnées des nombres relatifs dans un repère orthogonal",
            "Comparer des nombres relatifs"
        ]
     },
    // Période 2
    { titre: "Construction de triangles", categories: ["Espace et géométrie"] },
    { titre: "Enchaînement d'opérations", categories: ["Nombres et calculs"] },
    { titre: "Parallélogrammes", categories: ["Espace et géométrie"] },
    { titre: "Calculs avec fractions", categories: ["Nombres et calculs"] },
    { titre: "Grandeurs", categories: ["Grandeurs et mesures"] },
    // Période 3
    { titre: "Construire des symétriques", categories: ["Espace et géométrie"] },
    { titre: "Calculer avec des relatifs", categories: ["Nombres et calculs"] },
    { titre: "Droites remarquables dans un triangle", categories: ["Espace et géométrie"] },
    { titre: "Expressions littérales", categories: ["Nombres et calculs"] },
    // Période 4
    { titre: "Situations de proportionnalité", categories: ["Nombres et calculs"] },
    { titre: "Solides", categories: ["Espace et géométrie"] },
    { titre: "Tableaux et statistiques", categories: ["Organisation et gestion de données"] },
    { titre: "Calcul littéral", categories: ["Nombres et calculs"] },
    // Période 5
    { titre: "Volumes", categories: ["Espace et géométrie"] },
    { titre: "Utiliser la proportionnalité", categories: ["Nombres et calculs"] },
    { titre: "Angles", categories: ["Espace et géométrie"] },
    { titre: "Diagrammes et graphiques", categories: ["Organisation et gestion de données"] },
    { titre: "Probabilités", categories: ["Organisation et gestion de données"] },
    { titre: "Dépendance de grandeurs", categories: ["Grandeurs et mesures"] },
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
            return sommaire_5eme;
        case 6:
            return sommaire_6eme;
    }
}