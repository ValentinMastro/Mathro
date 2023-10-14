use rust_decimal::Decimal;
use rust_decimal_macros::dec;

use crate::{Exercice, ExerciceQCM, Entier, NombreDecimal};

#[derive(Clone,Default)]
pub struct Addition5chiffres{
    pub a: i64,
    pub b: i64
}

impl Exercice for Addition5chiffres {
    fn variables(&mut self) {
        self.a = Entier::entre(10001, 99999).valeur();
        self.b = Entier::entre(10001, 99999).valeur();
    }
}

impl ExerciceQCM for Addition5chiffres {
    fn enonce(&self) -> String {
        format!("{} + {}=", self.a, self.b)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a + self.b)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites = vec![
            1, -1, 10, -10, 100, -100, 1000, -1000, 101, -101
        ];

        format!("{}",
            self.a + self.b + possibilites.into_iter().nth(
                Entier::entre(0, 9).valeur() as usize
            ).unwrap()  
        )
    }
}

#[derive(Clone,Default)]
pub struct AdditionDecimaux {
    pub a: Decimal,
    pub b: Decimal
}

impl Exercice for AdditionDecimaux {
    fn variables(&mut self) {
        self.a = NombreDecimal::entre(1000, 9999, 2).valeur();
        self.b = NombreDecimal::entre(1000, 9999, 3).valeur();
    }
}

impl ExerciceQCM for AdditionDecimaux {
    fn enonce(&self) -> String {
        format!("{}+{}=", self.a, self.b)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a + self.b)
    }
    fn mauvaise_reponse(&self) -> String {
        let erreur = NombreDecimal::parmi(
            vec![
            dec!(0.01),
            dec!(0.1),
            dec!(-0.1),
            dec!(-0.01),
            dec!(1),
            dec!(-1),
            dec!(-0.001),
            dec!(0.001)
        ]).valeur();
        format!("{}", self.a + self.b + erreur)
    }
}