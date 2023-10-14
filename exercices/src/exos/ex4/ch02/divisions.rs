use crate::{Exercice, ExerciceQCM, Entier};

#[derive(Clone, Default)]
pub struct ProblemeDivision1 {
    pub valeur: i64,
    pub facteur: i64,
    pub enonce_id: i64
}

impl Exercice for ProblemeDivision1 {
    fn variables(&mut self) {
        self.valeur = Entier::parmi(
            (20..=100).filter(|x| x % 2 == 0 && x % 3 == 0)
                                        .collect()
        ).valeur();
        self.facteur = Entier::parmi(
            (2..10).filter(|x| self.valeur % x == 0)
                                        .collect()
        ).valeur();    
        self.enonce_id = Entier::entre(0,2).valeur();                  
    }
}

impl ExerciceQCM for ProblemeDivision1 {
    fn katex_enonce(&self) -> bool { false }
    fn enonce(&self) -> String {
        match self.enonce_id {
            0 => format!("Gérard a {} billes. Tiphaine en a {} fois moins, donc elle a ? billes.",
                            self.valeur, self.facteur),
            1 => format!("Thomas a {} €. Prudence a {} fois moins d'argent, donc elle a ? €.",
                            self.valeur, self.facteur),
            2 => format!("Stéphane a {} $. Leslie a {} fois moins d'argent, donc elle a ? $.",
                            self.valeur, self.facteur),
            _ => todo!()
        }
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.valeur / self.facteur)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites: Vec<i64> = vec![
            self.valeur, 
            self.valeur * self.facteur,
            self.valeur + self.facteur,
            self.valeur - self.facteur,
            self.facteur,
            1,
            2
        ];
        let n = possibilites.len();
        format!("{}", 
            possibilites.into_iter().nth(
                Entier::entre(0, n as i64 - 1).valeur() as usize
            ).unwrap()
        )
    }
}

#[derive(Clone,Default)]
pub struct ProblemeDivision2 {
    pub total: i64,
    pub nombre_par_paquet: i64,

    pub enonce_id: i64
}

impl Exercice for ProblemeDivision2 {
    fn variables(&mut self) {
        self.total = Entier::entre(50, 250).valeur();
        self.nombre_par_paquet = Entier::entre(1, 16).valeur();
        self.enonce_id = Entier::entre(0, 2).valeur();
    }
}

impl ExerciceQCM for ProblemeDivision2 {
    fn katex_enonce(&self) -> bool { false }
    fn enonce(&self) -> String {
        match self.enonce_id {
            0 => format!("Pour envoyer {} lettres par paquet de {}, il faut ? paquets.",
                            self.total, self.nombre_par_paquet),
            1 => format!("Pour ranger {} livres dans des étagères pouvant en contenir {}, il faut ? étagères.",
                            self.total, self.nombre_par_paquet),
            2 => format!("Pour acheter {} litres de peintures vendus par pot de {} litres, il faut acheter ? pots.",
                            self.total, self.nombre_par_paquet),
            _ => todo!("{}", self.enonce_id)
        }
        
    }
    fn bonne_reponse(&self) -> String {
        if self.total % self.nombre_par_paquet == 0 {
            format!("{}", self.total / self.nombre_par_paquet)
        } else {
            format!("{}", self.total / self.nombre_par_paquet + 1)
        }
        
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilite: i64 = Entier::parmi(
            (1..16).filter(|&x| x != self.total / self.nombre_par_paquet + 1).collect()
        ).valeur();
        format!("{}", possibilite)
    }
}