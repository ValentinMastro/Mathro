use crate::{Exercice, ExerciceQCM, Entier};

#[derive(Clone, Default)]
pub struct MultiplicationPar11 {
    a: i64
}

impl Exercice for MultiplicationPar11 {
    fn variables(&mut self) {
        self.a = Entier::entre(21, 99).valeur();
    }
}

impl ExerciceQCM for MultiplicationPar11 {
    fn enonce(&self) -> String {
        format!("{} \\times 11 =", self.a)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a*11)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites = vec![
            self.a*10, 
            self.a*12,
            self.a-1,
            self.a+1,
            self.a-2,
            self.a+2
        ];
        let n: usize = Entier::entre(0, possibilites.len() as i64 -1).valeur() as usize;
        format!("{}", possibilites.into_iter().nth(n).unwrap())
    }
}