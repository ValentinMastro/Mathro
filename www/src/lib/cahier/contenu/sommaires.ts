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
    { titre: "Nombres entiers", categories: ["Nombres et calculs"], premiere_page: 3,
        attendus: [
            "Unités de numération décimale pour les nombres entiers",
            "Décomposition, comparaison, encadrement",
            "Repérage sur une demi-droite graduée"
        ]
    },
    { titre: "Vocabulaire de géométrie", categories: ["Espace et géométrie"], premiere_page: 6,
        attendus: [
            "Rappel : vocabulaire de géométrie (segment, droite, demi-droite, milieu)",
            "Alignement, appartenance",
            "Constructions"
        ]
    },
    { titre: "Fraction/Partage", categories: ["Nombres et calculs"], premiere_page: 9,
        attendus: [
            "Partages d’unités",
            "Repérage sur une demi-droite graduée",
            "Comparaison de fractions de même dénominateur, encadrement par deux entiers consécutifs, décomposition",
            "Egalités de fractions usuelles (exemples : 5/10 = 1/2 ; 10/100 = 1/10 ; 2/4 = 1/2)",
            "Ajouter des fractions de même dénominateurs"
        ]
    },
    { titre: "Figures simples", categories: ["Espace et géométrie"], premiere_page: 15,
        attendus: [
            "Notation et vocabulaire des angles, lexique (angle droit, aigu, obtus)",
            "Reproduire un angle avec le compas",
            "Définition du cercle (ensemble des points situés à une distance donnée d’un point donné), du disque",
            "Vocabulaire associé (centre, rayon, diamètre, corde)",
            "Constructions"
        ]
    },
    { titre: "Nombres décimaux", categories: ["Nombres et calculs"], premiere_page: 19,
        attendus: [
            "Unités de numération décimale",
            "Diverses désignations orales et écrites (fractions décimales, écritures à virgule, décompositions)",
            "Repérage sur une demi-droite graduée",
            "Comparaison, encadrement par deux entiers ou par deux décimaux"
        ]
    },
    // Période 2
    { titre: "Droites", categories: ["Espace et géométrie"], premiere_page: 22,
        attendus: [
            "Perpendicularité, parallélisme : définitions",
            "Distance entre deux points, entre un point et une droite",
            "Constructions",
            "Médiatrice d’un segment : définition, construction à l’équerre",
        ]
    },
    { titre: "Addition, Soustraction et Multiplication", categories: ["Nombres et calculs"], premiere_page: 27,
        attendus: [
            "Propriétés et vocabulaire de l’addition, de la soustraction et de la multiplication",
            "Parenthèses et priorités opératoires",
            "Algorithme de calcul posé pour effectuer : l’addition, la soustraction et la multiplication de décimaux",
            "Distributivité simple",
        ]
    },
    { titre: "Polygones", categories: ["Espace et géométrie"],
        attendus: [
            "Triangles, dont les triangles particuliers (triangle rectangle, triangle isocèle, triangle équilatéral)",
            "Quadrilatères, dont les quadrilatères particuliers (carré, rectangle, losange, première approche du parallélogramme)",
            "Vocabulaire associé (côté, sommet, angle, diagonale, polygone, milieu)",
            "Propriétés des côtés, des angles et des diagonales",
            "Constructions",
        ]
    },
    { titre: "Conversions d'unités", categories: ["Nombres et calculs", "Grandeurs et mesures"],
        attendus: [
            "Multiplier, diviser par 10, 100, 1 000",
            "Convertir des unités de longueurs ou de masse",
        ]
    },
    { titre: "Symétrie axiale", categories: ["Espace et géométrie"],
        attendus: [
            "Figure symétrique, axe de symétrie d’une figure, figures symétriques par rapport à un axe",
            "Constructions à l’équerre",
            "Compléter une figure par symétrie axiale",
            "Propriété de conservation",
        ]
    },
    // Période 3
    { titre: "Division euclidienne", categories: ["Nombres et calculs"],
        attendus: [
            "Vocabulaire (dividende, diviseur, quotient, reste, multiple, divisible)",
            "Critères de divisibilité par 2, 3, 5, 9 et 10",
            "Multiples de 25 et de 50, diviseurs de 100",
            "Algorithme de calcul posé pour effectuer la division euclidienne d’un entier par un entier",
        ]
    },
    { titre: "Aires et périmètres", categories: ["Espace et géométrie", "Grandeurs et mesures"],
        attendus: [
            "Formules du périmètre d’un carré, d’un rectangle, de la longueur d’un cercle",
            "Différenciation périmètre et aire d’une figure",
            "Unités usuelles d’aire et conversions",
            "Formules de l’aire d’un carré, d’un rectangle, d’un triangle, d’un disque",
        ]
    },
    { titre: "Division décimale", categories: ["Nombres et calculs"],
        attendus: [
            "Algorithme de calcul posé pour effectuer la division d’un nombre décimal (entier ou non) par un nombre entier",
            "Utiliser des fractions pour exprimer un quotient",
        ]
    },
    { titre: "Géométrie dans l'espace", categories: ["Espace et géométrie"],
        attendus: [
            "Solides simples et assemblages de solides simples : cube, pavé droit, prisme droit, pyramide, cylindre, cône, boule",
            "Vocabulaire associé : sommet, hauteur solide, face, arête",
            "Perspective cavalière et patron d’un pavé droit, d’un cube",
        ]
    },
    { titre: "Durées, Horaires", categories: ["Grandeurs et mesures"],
        attendus: [
            "Durée écoulée entre deux instants donnés",
            "Déterminer un instant à partir de la connaissance d’un instant et d’une durée",
            "Unités de mesure de durées et conversions (jour, semaine, heure, minute, seconde, dixième de seconde, mois,siècle, millénaire)",
        ]
    },
    // Période 4
    { titre: "Rapporteur", categories: ["Espace et géométrie"],
        attendus: [
            "Utilisation du rapporteur pour déterminer la mesure d’un angle ou pour construire un angle de mesure donnée",
            "Mesure en degré d’un angle",
        ]
    },
    { titre: "Proportionnalité", categories: ["Nombres et calculs"],
        attendus: [
            "Problèmes relevant de la proportionnalité",
            "Propriétés de linéarité (additive et multiplicative), passage à l’unité, coefficient de proportionnalité",
        ]
    },
    { titre: "Médiatrice", categories: ["Espace et géométrie"],
        attendus: [
            "Constructions au compas",
            "Caractérisation : ensemble des points équidistants des extrémités du segment",
            "Lien avec la symétrie axiale (construction au compas)",
        ]
    },
    { titre: "Volumes et contenances", categories: ["Espace et géométrie", "Grandeurs et mesures"],
        attendus: [
            "Unités de volume et de contenance et conversions",
            "Formules du volume d’un cube, d’un pavé droit",
        ]
    },
    { titre: "Se repérer", categories: ["Espace et géométrie", "Algorithmique et programmation"],
        attendus: [
            "Se repérer, décrire ou exécuter des déplacements, sur un plan ou sur une carte (école, quartier, ville, village)",
            "Programmer les déplacements d’un robot ou ceux d’un personnage sur un écran en utilisant un logiciel de programmation",
            "Vocabulaire permettant de définir des positions et des déplacements (tourner à gauche, à droite ; faire demi-tour, effectuer un quart de tour à droite, à gauche)",
            "Divers modes de représentation de l’espace : maquettes, plans, schémas",
        ]
    },
    // Période 5
    { titre: "Résoudre des problèmes", categories: ["Nombres et calculs"],
        attendus: [
            "Multiplier par 0,1 ou 0,5 (multiplier par 1/10 ou 1/2)",
            "Opérateur de partage (lien entre langage courant et écriture mathématique (ex : « la moitié de » et multiplier par 1/2)",
            "Appliquer un taux de pourcentage (Lien fractions et taux de pourcentage)",
        ]
    },
    { titre: "Propriétés des droites", categories: ["Espace et géométrie"],
        attendus: [
            "Propriétés des droites parallèles et des droites perpendiculaires"
        ]
    },
    { titre: "Représentations usuelles", categories: ["Grandeurs et mesures"],
        attendus: [
            "Tableaux (en deux ou plusieurs colonnes, à double entrée)",
            "Diagrammes en bâtons, circulaires ou semi-circulaires",
            "Graphiques cartésiens",
        ]
    },
    { titre: "Échelles, agrandissements et réductions", categories: ["Espace et géométrie"],
        attendus: [
            "Reproduire une figure en respectant une échelle donnée",
            "Agrandissement ou réduction d’une figure",
        ]
    },
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
    { titre: "Nombres premiers", categories: ["Nombres et calculs"], premiere_page: 11,
        attendus: [
            "Savoir calculer le quotient et le reste dans une division euclidienne",
            "Déterminer si un nombre entier est ou n’est pas multiple ou diviseur d’un autre nombre entier",
            "Modéliser et résoudre des problèmes faisant intervenir les notions de multiple, de diviseur, de quotient et de reste",
            "Utiliser les critères de divisibilité (par 2, 3, 5, 9, 10)",
            "Nombres premiers",
            "Décomposition d’un nombre en produit de facteurs premiers"
        ]
    },
    { titre: "Angles d'un triangle", categories: ["Espace et géométrie"], premiere_page: 16,
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