pub mod nombre {
    // Nombres décimaux
    use rust_decimal::Decimal;
    // Génération aléatoire
    use rand::Rng;
    // Lire un fichier texte
    use std::fs::File;
    use std::io::Read;


    #[derive(Clone)]
    pub enum Entier {
        Parmi { valeurs_possibles: Vec<i64>},
        Entre { minimum: i64, maximum: i64}
    }

    impl Entier {
        pub fn parmi(valeurs_possibles: Vec<i64>) -> Entier {
            Entier::Parmi { valeurs_possibles }
        }
        pub fn premier(maximum: i64) -> Entier {
            // Ouverture du fichier .txt contenant la liste des nombres premiers
            let mut fichier = match File::open("nombres_premiers.txt") {
                Ok(fichier) => fichier,
                Err(erreur) => panic!("Le fichier n'a pas pu être ouvert.\n{}", erreur)
            };

            // Récolte du contenu du fichier
            let mut contenu = String::new();
            fichier.read_to_string(&mut contenu).ok();

            // Toutes les valeurs inférieures à "maximum"
            Entier::Parmi {
                valeurs_possibles: contenu
                        .split("\n")
                        .filter_map(|s| s.parse::<i64>().ok())
                        .filter(|x| x <= &maximum)
                        .collect()
            }
        }
        pub fn entre(minimum: i64, maximum: i64) -> Entier {
            Entier::Entre { minimum, maximum }
        }
        pub fn valeur(self) -> i64 {
            match self {
                Entier::Parmi { valeurs_possibles } => {
                    valeurs_possibles[rand::thread_rng().gen_range(0..(valeurs_possibles.len()))]
                }
                Entier::Entre { minimum, maximum } => {
                    rand::thread_rng().gen_range(minimum..(maximum+1))
                }
            }
            
        }
    }

    #[derive(Clone)]
    pub enum NombreDecimal {
        Parmi { valeurs_possibles: Vec<Decimal> },
        Entre { minimum: i64, maximum: i64, scale: u32}
    }

    impl NombreDecimal {
        pub fn parmi(valeurs_possibles: Vec<Decimal>) -> NombreDecimal {
            NombreDecimal::Parmi { valeurs_possibles }
        }
        pub fn entre(minimum: i64, maximum: i64, scale: u32) -> NombreDecimal {
            NombreDecimal::Entre { minimum, maximum, scale }
        }
        pub fn valeur(self) -> Decimal {
            match self {
                NombreDecimal::Entre { minimum, maximum, scale } => {
                    let num = rand::thread_rng().gen_range(minimum..(maximum+1));
                    Decimal::new(num, scale)
                }
                NombreDecimal::Parmi { valeurs_possibles } => {
                    valeurs_possibles[rand::thread_rng().gen_range(0..(valeurs_possibles.len()))]
                }
            }
        }
    }

    // Fractions
    use fraction::GenericFraction;
    type F = GenericFraction<u64>;

    #[derive(Clone)]
    pub enum Rationnel {
        Parmi { valeurs_possibles: Vec<F> }
    }

    impl Rationnel {
        pub fn parmi(valeurs_possibles: Vec<F>) -> Rationnel {
            Rationnel::Parmi { valeurs_possibles }
        }
        pub fn valeur(self) -> F {
            match self {
                Rationnel::Parmi { valeurs_possibles } => {
                    valeurs_possibles[rand::thread_rng().gen_range(0..(valeurs_possibles.len()))]
                }
            }
        }
    }
}