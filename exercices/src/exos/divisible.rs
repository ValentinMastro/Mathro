use crate::{Exercice, ExerciceVraiFaux, ExerciceQCM};
use crate::Entier;

#[derive(Clone,Copy,Default)]
pub struct EstDivisiblePar {
    // k % n == 0 ?
    pub n: i64,
    pub k: i64
}

impl Exercice for EstDivisiblePar {
    fn variables(&mut self) {
        self.n = Entier::parmi(vec!(2,3,5,9,10)).valeur();
        self.k = Entier::entre(1, 100).valeur();
    }
}

impl ExerciceVraiFaux for EstDivisiblePar {
    fn enonce(&self) -> String {
        format!("{} est divisible par {} ?", self.k, self.n)
    }
    ///
    /// ```
    /// use exercices::{Exercice,ExerciceVraiFaux};
    /// use exercices::exos::divisible::EstDivisiblePar;
    /// 
    /// assert_eq!(EstDivisiblePar{n: 2, k:10}.bonne_reponse(), true);
    /// assert_eq!(EstDivisiblePar{n: 3, k:21}.bonne_reponse(), true);
    /// assert_eq!(EstDivisiblePar{n: 5, k:95}.bonne_reponse(), true);
    /// ```
    fn bonne_reponse(&self) -> bool {
        self.k % self.n == 0
    }
}

impl ExerciceQCM for EstDivisiblePar {
    fn enonce(&self) -> String {
        format!("Lequel de ces nombres est divisible par {} ? ", self.n)
    }
    ///
    /// ```
    /// use exercices::{Exercice,ExerciceQCM};
    /// use exercices::exos::divisible::EstDivisiblePar;
    /// 
    /// assert!(EstDivisiblePar{n: 3, k: 0}.bonne_reponse().parse::<i64>().unwrap() % 3 == 0);
    /// assert!(EstDivisiblePar{n: 5, k: 0}.bonne_reponse().parse::<i64>().unwrap() % 5 == 0);
    /// assert!(EstDivisiblePar{n: 7, k: 0}.bonne_reponse().parse::<i64>().unwrap() % 7 == 0);
    /// ```
    fn bonne_reponse(&self) -> String {
        Entier::Parmi { 
            valeurs_possibles: (1..100).filter(|x| x % self.n == 0)
                                       .collect()
        }.valeur().to_string()
    }
    ///
    /// ```
    /// use exercices::{Exercice,ExerciceQCM};
    /// use exercices::exos::divisible::EstDivisiblePar;
    /// 
    /// assert!(EstDivisiblePar{n: 3, k: 0}.mauvaise_reponse().parse::<i64>().unwrap() % 3 != 0);
    /// assert!(EstDivisiblePar{n: 5, k: 0}.mauvaise_reponse().parse::<i64>().unwrap() % 5 != 0);
    /// assert!(EstDivisiblePar{n: 7, k: 0}.mauvaise_reponse().parse::<i64>().unwrap() % 7 != 0);
    /// ```
    fn mauvaise_reponse(&self) -> String {
        Entier::Parmi { 
            valeurs_possibles: (1..100).filter(|x| x % self.n != 0)
                                       .collect()
        }.valeur().to_string()
    }
}