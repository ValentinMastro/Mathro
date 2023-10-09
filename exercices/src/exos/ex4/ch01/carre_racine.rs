use crate::{Entier, Exercice, ExerciceQCM};
use num_format::{Locale, ToFormattedString};

#[derive(Clone,Default)]
pub struct CarreSimple {
    pub a: i64
}

impl Exercice for CarreSimple {
    fn variables(&mut self) {
        self.a = Entier::entre(-20, 20).valeur();
    }
}

impl ExerciceQCM for CarreSimple {
    fn enonce(&self) -> String {
        if self.a >= 0 {
            format!("{}^2", self.a)
        } else {
            format!("({})^2", self.a)
        }
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a*self.a)
    }
    fn mauvaise_reponse(&self) -> String {
        let valeurs_possibles: Vec<i64> = vec![
            -1*(self.a * self.a),
            self.a * 2,
            self.a + 2,
            (self.a - 1) * (self.a - 1),
            (self.a + 1) * (self.a + 1),
            self.a * self.a - 1,
            self.a * self.a + 1
        ];
        format!("{}", Entier::parmi(valeurs_possibles).valeur())
    }
}

#[derive(Clone, Default)]
pub struct Carre {
    pub a: i64
}

impl Exercice for Carre {
    fn variables(&mut self) {
        self.a = Entier::entre(-100, 100).valeur()
    }
}

impl ExerciceQCM for Carre {
    fn enonce(&self) -> String {
        if self.a >= 0 {
            format!("{}^2=?", self.a)
        } else {
            format!("({})^2=?", self.a)
        }
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a.pow(2).to_formatted_string(&Locale::fr))
    }
    fn mauvaise_reponse(&self) -> String {
        let erreur = Entier::parmi( (-30..30).filter(|&x| x!=0).collect()).valeur();
        format!("{}", (self.a + erreur).pow(2).to_formatted_string(&Locale::fr))
    }
}

#[derive(Clone,Default)]
pub struct RacineCarreParfait {
    pub a: i64
}

impl Exercice for RacineCarreParfait {
    fn variables(&mut self) {
        self.a = Entier::parmi(
            (1..=20).collect()
        ).valeur()
    }
}

impl ExerciceQCM for RacineCarreParfait {
    fn enonce(&self) -> String {
        format!("\\sqrt{{ {} }}=", self.a*self.a)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a)
    }
    fn mauvaise_reponse(&self) -> String {
        let valeurs_possibles: Vec<i64> = vec![
            self.a + 1,
            self.a - 1,                        
            self.a + 2,
            self.a - 2,
            self.a + 3,
            self.a - 3,
            self.a + 4,
            self.a - 4
        ];
        format!("{}", Entier::parmi(valeurs_possibles).valeur())
    }
}

#[derive(Clone,Default)]
pub struct RacineCarre {
    pub a: i64
}

impl Exercice for RacineCarre {
    fn variables(&mut self) {
        self.a = Entier::parmi(
            (21..=999).collect()
        ).valeur()
    }
}

impl ExerciceQCM for RacineCarre {
    fn enonce(&self) -> String {
        format!("\\sqrt{{ {} }}", self.a.to_formatted_string(&Locale::fr))
    }
    fn bonne_reponse(&self) -> String {
        let copie: f64 = self.a as f64;
        format!("\\approx {:.2}", copie.sqrt()).replacen(".", ",", 1)
    }
    fn mauvaise_reponse(&self) -> String {
        let copie: f64 = (self.a + Entier::parmi(
            (-20..20).filter(|&x| x != 0).collect()
        ).valeur() ) as f64;
        format!("\\approx {:.2}", copie.sqrt()).replacen(".", ",", 1)
    }
}