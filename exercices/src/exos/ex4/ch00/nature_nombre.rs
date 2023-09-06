use crate::{Entier, NombreDecimal, Rationnel};
use crate::{Exercice, ExerciceVraiFaux};
use rust_decimal::Decimal;

#[derive(Copy, Clone, Default)]
pub struct EstEntierNaturel {
    pub n: Decimal
}

impl Exercice for EstEntierNaturel {
    fn variables(&mut self) {
        // ~1 chance sur 20 d'avoir un entier
        self.n = NombreDecimal::entre(-1000, 1000, 1).valeur();
    }
}

impl ExerciceVraiFaux for EstEntierNaturel {
    fn enonce(&self) -> String {
        if self.n.is_integer() {
            format!("Le nombre {} est-il un entier naturel ?", 
                    self.n.mantissa())
        } else {
            format!("Le nombre {} est-il un entier naturel ?", 
                    self.n)
        }
    }
    ///
    /// ```
    /// use rust_decimal_macros::dec;
    /// use exercices::{Exercice, ExerciceVraiFaux};
    /// use exercices::exos::ex4::ch00::nature_nombre::EstEntierNaturel;
    /// 
    /// assert_eq!(EstEntierNaturel{n: dec!(2)}.bonne_reponse(), true );
    /// assert_eq!(EstEntierNaturel{n: dec!(2.3)}.bonne_reponse(), false);
    /// assert_eq!(EstEntierNaturel{n: dec!(-3)}.bonne_reponse(), false);
    /// assert_eq!(EstEntierNaturel{n: dec!(-7.5)}.bonne_reponse(), false);
    /// 
    /// ```
    fn bonne_reponse(&self) -> bool {
        self.n.is_zero() || (self.n.is_integer() && self.n.is_sign_positive())
    }
}

#[derive(Copy,Clone,Default)]
pub struct EstEntierRelatif {
    pub n: Decimal
}

impl Exercice for EstEntierRelatif {
    fn variables(&mut self) {
        // ~1 chance sur 10 d'avoir un entier relatif
        self.n = NombreDecimal::entre(-1000, 1000, 1).valeur();
    }
}

impl ExerciceVraiFaux for EstEntierRelatif {
    fn enonce(&self) -> String {
        if self.n.is_integer() {
            format!("Le nombre {} est-il un entier relatif ?", 
                    self.n.mantissa())
        } else {
            format!("Le nombre {} est-il un entier relatif ?", 
                    self.n)
        }
    }
    ///
    /// ```
    /// use rust_decimal_macros::dec;
    /// use exercices::{Exercice, ExerciceVraiFaux};
    /// use exercices::exos::ex4::ch00::nature_nombre::EstEntierRelatif;
    /// 
    /// assert_eq!(EstEntierRelatif{n: dec!(2)}.bonne_reponse(), true );
    /// assert_eq!(EstEntierRelatif{n: dec!(2.3)}.bonne_reponse(), false);
    /// assert_eq!(EstEntierRelatif{n: dec!(-3)}.bonne_reponse(), true);
    /// assert_eq!(EstEntierRelatif{n: dec!(-7.5)}.bonne_reponse(), false);
    /// 
    /// ```
    fn bonne_reponse(&self) -> bool {
        self.n.is_integer()
    }
}
