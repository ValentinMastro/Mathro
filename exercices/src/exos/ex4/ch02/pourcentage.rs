use rust_decimal::Decimal;
use rust_decimal_macros::dec;

use crate::{Exercice, ExerciceQCM, NombreDecimal, Entier};

#[derive(Clone,Default)]
pub struct AugmentationPourcentage {
    pub prix_depart: Decimal,
    pub augmentation: i64
}

impl Exercice for AugmentationPourcentage {
    fn variables(&mut self) {
        self.prix_depart = NombreDecimal::entre(100, 9999, 2).valeur();
        self.augmentation = Entier::entre(50, 99).valeur();
    }
}

impl ExerciceQCM for AugmentationPourcentage {
    fn enonce(&self) -> String {
        format!("{}~€ + {}~\\% =",
                    self.prix_depart, self.augmentation)
    }
    fn bonne_reponse(&self) -> String {
        // prix * (100 + augmentation)/100
        format!("{}~€", self.prix_depart * Decimal::new(100 + self.augmentation, 2))
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{}~€",
            match Entier::entre(0, 4).valeur() {
                0 => self.prix_depart * Decimal::new(self.augmentation, 2),
                1 => self.prix_depart * Decimal::new(100 - self.augmentation, 2),
                2 => self.prix_depart - Decimal::new(self.augmentation, 0),
                3 => self.prix_depart + Decimal::new(self.augmentation, 0),
                4 => Decimal::new(self.augmentation, 0),
                _ => unreachable!()
            }
        )
    }
}

#[derive(Clone,Default)]
pub struct DiminutionPourcentage {
    pub prix_depart: Decimal,
    pub diminution: i64
}

impl Exercice for DiminutionPourcentage {
    fn variables(&mut self) {
        self.prix_depart = NombreDecimal::entre(100, 9999, 2).valeur();
        self.diminution = Entier::entre(50, 99).valeur();
    }
}

impl ExerciceQCM for DiminutionPourcentage {
    fn enonce(&self) -> String {
        format!("{}~€ - {}~\\% =",
                    self.prix_depart, self.diminution)
    }
    fn bonne_reponse(&self) -> String {
        // prix * (100 - diminution)/100
        format!("{}~€", self.prix_depart * Decimal::new(100 - self.diminution, 2))
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{}~€",
            match Entier::entre(0, 4).valeur() {
                0 => self.prix_depart * Decimal::new(self.diminution, 2),
                1 => self.prix_depart * Decimal::new(100 + self.diminution, 2),
                2 => self.prix_depart - Decimal::new(self.diminution, 0),
                3 => self.prix_depart + Decimal::new(self.diminution, 0),
                4 => Decimal::new(self.diminution, 0),
                _ => unreachable!()
            }
        )
    }
}

#[derive(Clone,Default)]
pub struct PourcentageValeur {
    pub valeur: Decimal,
    pub pourcentage: i64
}

impl Exercice for PourcentageValeur {
    fn variables(&mut self) {
        self.valeur = NombreDecimal::entre(1_000, 999_999, 2).valeur();
        self.pourcentage = Entier::entre(2, 99).valeur();
    }
}

impl ExerciceQCM for PourcentageValeur {
    fn enonce(&self) -> String {
        format!("{}~\\% ~\\text{{de}}~ {}~€ = ",
            self.pourcentage,
            self.valeur)
    }
    fn bonne_reponse(&self) -> String {
        // valeur * pourcentage / 100
        format!("{}~€", self.valeur * Decimal::new(self.pourcentage, 2))
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{:.2}~€",
            match Entier::entre(0, 4).valeur() {
                0 => self.valeur * Decimal::new(self.pourcentage, 0),
                1 => self.valeur + Decimal::new(self.pourcentage, 0),
                2 => self.valeur * dec!(0.01),
                3 => self.valeur * dec!(100) / Decimal::new(self.pourcentage, 0),
                4 => Decimal::new(self.pourcentage, 0) * dec!(100) / self.valeur,
                _ => unreachable!()
            }
        )
    }
}