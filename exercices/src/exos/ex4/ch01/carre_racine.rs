use crate::{Entier, Exercice, ExerciceQCM};

#[derive(Clone,Default)]
pub struct Carre {
    pub a: i64
}

impl Exercice for Carre {
    fn variables(&mut self) {
        self.a = Entier::entre(-50, 50).valeur();
    }
}

impl ExerciceQCM for Carre {
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

#[derive(Clone,Default)]
pub struct RacineCarreParfait {
    pub a: i64
}

impl Exercice for RacineCarreParfait {
    fn variables(&mut self) {
        self.a = Entier::parmi(
            (1..=20)
                                .collect()
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