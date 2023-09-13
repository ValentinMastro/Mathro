use crate::{Entier, Exercice, ExerciceQCM, NombreDecimal};
use num_format::{Locale, ToFormattedString};
use rust_decimal::Decimal;
use rust_decimal_macros::dec;

#[derive(Clone, Default)]
pub struct ChiffreDes {
    pub a: i64,
    pub index: i64
}

impl Exercice for ChiffreDes {
    fn variables(&mut self) {
        self.a = Entier::entre(1_000_000, 999_999_999).valeur();
        self.index = Entier::entre(0, 6).valeur();
    }
}

impl ExerciceQCM for ChiffreDes {
    fn enonce(&self) -> String {
        let noms = vec!["unités", "dizaines", "centaines", 
                "milliers", "dizaines de milliers", "centaines de milliers",
                "millions"];
        format!("Chiffre des {} de {}", 
                        noms[self.index as usize], 
                        self.a.to_formatted_string(&Locale::fr))
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", (self.a / 10i64.pow(self.index as u32)) % 10)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites = (0..=9).filter(|&x| x != (self.a / 100) % 10)
                                    .collect();
        format!("{}", Entier::parmi(possibilites).valeur())
    }
}

#[derive(Clone, Default)]
pub struct NombreDe {
    pub a: i64,
    pub index: i64
}

impl Exercice for NombreDe {
    fn variables(&mut self) {
        self.a = Entier::entre(1_000_000, 999_999_999).valeur();
        self.index = Entier::entre(0, 6).valeur();
    }
}

impl ExerciceQCM for NombreDe {
    fn enonce(&self) -> String {
        let noms = vec!["unités", "dizaines", "centaines", 
                "milliers", "dizaines de milliers", "centaines de milliers",
                "millions"];
        format!("Nombre de {} de {}", 
                        noms[self.index as usize], 
                        self.a.to_formatted_string(&Locale::fr))
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", (self.a / 10i64.pow(self.index as u32))
                        .to_formatted_string(&Locale::fr) )
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites = vec![
            self.a / 10i64.pow((self.index as u32) -1),
            self.a / 10i64.pow((self.index as u32) +1),
            self.a / 10i64.pow((self.index as u32) +2),
            self.a / 10i64.pow((self.index as u32) +3),
            self.a % 10i64.pow(self.index as u32),
            self.a % 10i64.pow((self.index as u32) -1),
            self.a % 10i64.pow((self.index as u32) +1),
            (self.a / 10i64.pow(self.index as u32)) % 10,
            0,
        ];
        format!("{}", Entier::parmi(possibilites)
                            .valeur()
                            .to_formatted_string(&Locale::fr))
    }
}

#[derive(Clone, Default)]
pub struct TableMultiplication {
    pub a: i64,
    pub b: i64
}

impl Exercice for TableMultiplication {
    fn variables(&mut self) {
        self.a = Entier::entre(2, 10).valeur();
        self.b = Entier::entre(2, 10).valeur();
    }
}

impl ExerciceQCM for TableMultiplication {
    fn enonce(&self) -> String {
        format!("{} \\times {} =", self.a, self.b)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a * self.b)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites =  vec![
            self.a * (self.b+1),
            (self.a + 1) * self.b,
            self.a * (self.b-1),
            (self.a - 1) * self.b
        ];
        format!("{}", Entier::parmi(possibilites).valeur())
    }
}

#[derive(Clone, Default)]
pub struct ComparaisonPlusPetitQue {
    pub a: Decimal
}

impl Exercice for ComparaisonPlusPetitQue {
    fn variables(&mut self) {
        self.a = NombreDecimal::entre(100, 999, 2).valeur();
    }
}

impl ExerciceQCM for ComparaisonPlusPetitQue {
    fn enonce(&self) -> String {
        format!("{} < ?", self.a)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a + Decimal::new(Entier::entre(1, 50).valeur(), 2) )
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{}", self.a - Decimal::new(Entier::entre(1, 80).valeur(), 2) )
    }
}

#[derive(Clone, Default)]
pub struct ComparaisonPlusGrandQue {
    pub a: Decimal
}

impl Exercice for ComparaisonPlusGrandQue {
    fn variables(&mut self) {
        self.a = NombreDecimal::entre(100, 999, 2).valeur();
    }
}

impl ExerciceQCM for ComparaisonPlusGrandQue {
    fn enonce(&self) -> String {
        format!("{} > ?", self.a)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a - Decimal::new(Entier::entre(1, 50).valeur(), 2) )
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{}", self.a + Decimal::new(Entier::entre(1, 80).valeur(), 2) )
    }
}
