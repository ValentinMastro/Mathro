pub mod nombre {
    // Nombres décimaux
    use rust_decimal::Decimal;
    // Génération aléatoire
    use rand::Rng;
    // Lire un fichier texte
    use std::fs::File;
    use std::io::Read;
    // Vec
    use std::vec::Vec;

    #[derive(Clone,Copy)]
    pub enum Nombre {
        Decimal { valeur: Decimal, min: i64, max: i64 },
        Relatif { valeur: Decimal, min: i64, max: i64 },
        Positif { valeur: Decimal, min: i64, max: i64 },
        Premier { valeur: Decimal, max: i64 },
    }

    pub trait Generateur {
        fn decimal(min: i64, max: i64, scale: u32) -> Self;
        fn relatif(min: i64, max: i64) -> Self;
        fn positif(min: i64, max: i64) -> Self;
        fn premier(max: i64) -> Self;
        fn exclure(self, liste: Vec<i64>) -> i64;
        fn exclure_dec(self, liste: Vec<Decimal>) -> Decimal;
        fn valeur_dec(self) -> Decimal;
        fn valeur(self) -> i64;
    }

    impl Generateur for Nombre {
        /// Renvoie un nombre décimal aléatoire dans [[ min\*10^(-scale) ; max\*10^(-scale)]]
        /// 
        /// ## Exemples
        /// 
        /// ```
        /// use rust_decimal_macros::dec;
        /// use exercices::nombre::{Nombre, Generateur};
        /// let x = Nombre::decimal(100, 999, 2).valeur_dec();
        /// assert!( dec!(1) <= x && x < dec!(10) );
        /// ```
        /// 
        fn decimal(min: i64, max: i64, scale: u32) -> Self {
            let mut rng = rand::thread_rng();
            let num: i64 = rng.gen_range(min..(max+1));
            Nombre::Decimal { valeur: Decimal::new(num, scale), min, max }
        }
        /// Renvoie un nombre entier relatif aléatoire dans [[min ; max ]]
        /// 
        /// ## Exemples
        /// 
        /// ```
        /// use exercices::nombre::{Nombre, Generateur};
        /// let x = Nombre::relatif(-5, 8).valeur();
        /// assert!( -5 <= x && x <= 8 );
        /// ```
        /// 
        fn relatif(min: i64, max: i64) -> Self {
            let mut rng = rand::thread_rng();
            let num: i64 = rng.gen_range(min..(max+1));
            Nombre::Relatif { valeur: Decimal::new(num, 0), min, max }
        }
        /// Renvoie un nombre entier positif aléatoire dans [[ min ; max ]]
        /// ## Exemples
        /// ```
        /// use exercices::nombre::{Nombre, Generateur};
        /// let x = Nombre::positif(7, 123).valeur();
        /// assert!(x >= 0);
        /// assert!(7 <= x && x <= 123);
        /// ```
        /// 
        fn positif(min: i64, max: i64) -> Self {
            let mut rng = rand::thread_rng();
            let num: i64 = rng.gen_range(min..(max+1));
            Nombre::Positif { valeur: Decimal::new(num, 0), min, max }
        }
        /// Renvoie un nombre entier positif premier inférieur ou égal à "max"
        /// ## Exemples
        /// ```
        /// use exercices::nombre::{Nombre, Generateur};
        /// assert!(Nombre::premier(50).valeur() <= 50);
        /// ```
        /// 
        fn premier(max: i64) -> Self {
            // On ouvre le fichier .txt qui contient tous les nombres premiers inférieux à 10^6
            let mut fichier = match 
                File::open("nombres_premiers_inf_un_million.txt") {
                    Ok(fichier) => fichier,
                    Err(a) => panic!("Fichier introuvable {}", a)
            };

            // On récolte le contenu entier du fichier
            let mut contenu = String::new();
            fichier.read_to_string(&mut contenu).ok();

            // On crée un vecteur contenant les nombres premiers inférieurs à n
            let nombres_premiers: Vec<i64> = contenu
                        .split("\n")
                        .filter_map(|s| s.parse::<i64>().ok())
                        .filter(|x| x <= &max)
                        .collect();
            
            // On en choisit un au hasard
            let mut rng = rand::thread_rng();
            let index: usize = rng.gen_range(0..nombres_premiers.len().try_into().unwrap());
            
            Nombre::Premier{ valeur: nombres_premiers[index].into(), max }
        }
        /// Renvoie la valeur d'un Nombre sous forme d'un entier i64
        /// Panique si la valeur n'est pas entière
        /// ## Exemples 
        /// ```
        /// use rust_decimal::Decimal;
        /// use exercices::nombre::{Nombre,Generateur};
        /// let x = Nombre::Positif {valeur: Decimal::new(7,0), min: i64::MIN, max: i64::MAX};
        /// assert_eq!(x.valeur(), 7);
        /// ```
        /// 
        fn valeur(self) -> i64 {
            match self {
                Self::Decimal { valeur, ..} => {
                    if valeur.is_integer() {
                        valeur.mantissa() as i64
                    } else {
                        panic!("Pas un entier.")
                    }
                }
                Self::Relatif { valeur, ..} => {
                    if valeur.is_integer() {
                        valeur.mantissa() as i64
                    } else {
                        panic!("Pas un entier.")
                    }
                },
                Self::Positif { valeur, ..} => {
                    if valeur.is_integer() {
                        valeur.mantissa() as i64
                    } else {
                        panic!("Pas un entier.")
                    }
                },
                Self::Premier { valeur, ..} => {
                    if valeur.is_integer() {
                        valeur.mantissa() as i64
                    } else {
                        panic!("Pas un entier.")
                    }
                },
            }
        }
        /// Renvoie la valeur d'un Nombre sous forme d'un Decimal
        /// ## Exemples
        /// ```
        /// use rust_decimal::Decimal;
        /// use exercices::nombre::{Nombre,Generateur};
        /// let x = Nombre::Decimal{ valeur: Decimal::new(345,2), min: i64::MIN, max: i64::MAX };
        /// assert_eq!(x.valeur_dec().to_string(), "3.45");
        /// ```
        /// 
        fn valeur_dec(self) -> Decimal {
            match self {
                Self::Decimal { valeur, ..} => valeur,
                Self::Relatif { valeur, ..} => valeur,
                Self::Positif { valeur, ..} => valeur,
                Self::Premier { valeur, ..} => valeur,
            }
        }
        /// Exclut des valeurs données lors d'une génération aléatoire d'un Nombre
        /// ## Exemples
        /// 
        /// Ci-dessous, on va générer un entier relatif aléatoire entre -5 et 8, mais on ne 
        /// veut pas que cela tombe sur 0.
        /// 
        /// ```
        /// use exercices::nombre::{Nombre,Generateur};
        /// let x = Nombre::relatif(-5,8).exclure(vec![0]);
        /// assert!(x != 0);
        /// ```
        /// 
        fn exclure(self, liste: Vec<i64>) -> i64 {
            let liste_dec: Vec<Decimal> = liste.into_iter().map(|x| x.into()).collect();
            let valeur_obtenue = self.exclure_dec(liste_dec);

            if valeur_obtenue.is_integer() {
                valeur_obtenue.mantissa() as i64
            } else {
                panic!("Pas un entier")
            }
        }
        /// Exclut des valeurs données lors d'une génération aléatoire d'un Nombre::Decimal
        /// ## Exemples
        /// 
        /// Ci-dessous, on va générer un nombre décimal aléatoire entre -2,35 et 8,46, mais
        /// on ne veut pas que cela tombe sur 4,56.
        /// 
        /// ```
        /// use rust_decimal::Decimal;
        /// use rust_decimal_macros::dec;
        /// use exercices::nombre::{Nombre,Generateur};
        /// 
        /// let x = Nombre::decimal(-235,846,2).exclure_dec(vec![dec!(4.56)]);
        /// assert!(x.to_string() != "4.56");
        /// ```
        /// 
        fn exclure_dec(self, liste: Vec<Decimal>) -> Decimal {
            let mut x: Nombre = self.clone();

            while liste.contains(&x.valeur_dec()) {
                match self {
                    Nombre::Decimal { valeur, min, max } => {
                        x = Nombre::decimal(min, max, valeur.scale())
                    },
                    Nombre::Relatif {min, max, .. } => {
                        x = Nombre::relatif(min, max);
                    },
                    Nombre::Positif {min, max, .. } => {
                        x = Nombre::positif(min, max);
                    },
                    Nombre::Premier {max, .. } => {
                        x = Nombre::premier(max);
                    }
                };
            }
            x.valeur_dec()
        }
    }
}