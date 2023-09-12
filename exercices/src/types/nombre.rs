pub mod nombre {
    // Nombres décimaux
    use rust_decimal::Decimal;
    // Génération aléatoire
    use rand::Rng;
    use rand::SeedableRng;
    use rand::rngs::StdRng;
    // Lire un fichier texte
    use std::fs::File;
    use std::io::Read;
    // Récupération des paramètres CLI
    use std::env;


    pub struct GenerateurAleatoire {
        rng: StdRng
    }

    impl GenerateurAleatoire {
        pub fn creer(graine: u8) -> Self {
            let rng = StdRng::from_seed([graine; 32]);
            GenerateurAleatoire { rng }
        }
        pub fn random_i64(&mut self, minimum: i64, maximum: i64) -> i64 {
            self.rng.gen_range(minimum..=maximum)
        }
        pub fn random_usize(&mut self, maximum: usize) -> usize {
            self.rng.gen_range(0..maximum)
        }
    }

    lazy_static::lazy_static! {
        pub static ref RNG: std::sync::Mutex<GenerateurAleatoire> = {
            let args: Vec<String> = env::args().collect();
            let graine: u8 = args[4].parse::<u8>().unwrap();
            std::sync::Mutex::new(GenerateurAleatoire::creer(graine))
        };
    }

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
                    let mut rng = RNG.lock().unwrap();
                    valeurs_possibles[rng.random_usize(valeurs_possibles.len())]
                }
                Entier::Entre { minimum, maximum } => {
                    let mut rng = RNG.lock().unwrap();
                    rng.random_i64(minimum, maximum)
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
                    let mut rng = RNG.lock().unwrap();
                    let num: i64 = rng.random_i64(minimum, maximum);
                    Decimal::new(num, scale)
                }
                NombreDecimal::Parmi { valeurs_possibles } => {
                    let mut rng = RNG.lock().unwrap();
                    valeurs_possibles[rng.random_usize(valeurs_possibles.len())]
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
                    let mut rng = RNG.lock().unwrap();
                    valeurs_possibles[rng.random_usize(valeurs_possibles.len())]
                }
            }
        }
    }
}