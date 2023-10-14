use crate::{Entier, Exercice, ExerciceQCM};
use crate::types::points::multiples_points_aleatoire;

#[derive(Clone, Default)]
pub struct PythagoreHypotenuse {
    pub ab: i64,
    pub bc: i64,
    pub ac: i64
}

impl Exercice for PythagoreHypotenuse {
    fn variables(&mut self) {
        self.ab = Entier::entre(5,50).valeur();
        self.bc = Entier::entre(5, 50).valeur();
        self.ac = self.ab.pow(2) + self.bc.pow(2)
    }
}

impl ExerciceQCM for PythagoreHypotenuse {
    fn enonce(&self) -> String {
        format!("\\text{{Dans le triangle ABC rectangle en B, si~}} AB~=~{} 
        ~\\text{{et}}~BC~=~{}~\\text{{alors}}~AC~=~?", self.ab, self.bc)
    }
    fn bonne_reponse(&self) -> String {
        format!("\\sqrt{{ {} }}", self.ac)
    }
    fn mauvaise_reponse(&self) -> String {
        let erreur = Entier::parmi( 
            (-20..20).filter(|&x| x != 0).collect()).valeur();
        format!("\\sqrt{{ {} }}", self.ac + erreur)
    }
}

#[derive(Clone, Default)]
pub struct PythagoreHypotenuseApprochee {
    pub de: i64,
    pub ef: i64,
    pub df: i64
}

impl Exercice for PythagoreHypotenuseApprochee {
    fn variables(&mut self) {
        self.de = Entier::entre(5,50).valeur();
        self.ef = Entier::entre(5, 50).valeur();
        self.df = self.de.pow(2) + self.ef.pow(2)
    }
}

impl ExerciceQCM for PythagoreHypotenuseApprochee {
    fn katex_enonce(&self) -> bool { false }
    fn enonce(&self) -> String {
        format!("DEF est rectangle en E,
        si DE={} et EF={} alors DF = ?", self.de, self.ef)
    }
    fn bonne_reponse(&self) -> String {
        format!("{:.3}", (self.df as f64).sqrt() ).replacen(".", "{,}", 1)
    }
    fn mauvaise_reponse(&self) -> String {
        let erreur = Entier::parmi(
            (-20..20).filter(|&x| x != 0).collect()).valeur();
        format!("{:.3}", ((self.df + erreur) as f64).sqrt()).replacen(".", "{,}", 1)
    }
}

#[derive(Clone, Default)]
pub struct PythagoreCoteAngleDroitApproche {
    pub de: i64,
    pub ef: i64,
    pub df: i64
}

impl Exercice for PythagoreCoteAngleDroitApproche {
    fn variables(&mut self) {
        self.de = Entier::entre(5,50).valeur();
        self.df = Entier::entre(51, 100).valeur();
        self.ef = self.df.pow(2) - self.de.pow(2);
    }
}

impl ExerciceQCM for PythagoreCoteAngleDroitApproche {
    fn katex_enonce(&self) -> bool { false }
    fn enonce(&self) -> String {
        format!("DEF est rectangle en E,
        si DE={} et DF={} alors EF = ?", self.de, self.df)
    }
    fn bonne_reponse(&self) -> String {
        format!("{:.3}", (self.ef as f64).sqrt() ).replacen(".", "{,}", 1)
    }
    fn mauvaise_reponse(&self) -> String {
        let erreur = Entier::parmi(
            (-20..20).filter(|&x| x != 0).collect()).valeur();
        format!("{:.3}", ((self.ef + erreur) as f64).sqrt()).replacen(".", "{,}", 1)
    }
}


#[derive(Clone, Default)]
pub struct EgalitePythagore {
    pub points: [char;3],
    pub index_angle_droit: usize
}

impl Exercice for EgalitePythagore {
    fn variables(&mut self) {
        self.points = match multiples_points_aleatoire(3).as_slice() {
            [a, b, c] => [*a, *b, *c],
            _ => panic!("")
        };
        self.index_angle_droit = Entier::entre(0, 2).valeur() as usize;
    }
}

impl ExerciceQCM for EgalitePythagore {
    fn katex_enonce(&self) -> bool { false }
    fn enonce(&self) -> String {
        format!("Dans le triangle {}{}{} rectangle en {} : ",
                self.points[0],
                self.points[1],
                self.points[2],
                self.points[self.index_angle_droit])
    }
    fn bonne_reponse(&self) -> String {
        let x: char = self.points[(self.index_angle_droit + 2)%3];
        let y: char = self.points[self.index_angle_droit];
        let z: char = self.points[(self.index_angle_droit + 1)%3];

        let possibilites: Vec<String> = vec![
            format!("{}{}^2+{}{}^2={}{}^2",
                x, y, y, z, x, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                y, x, y, z, x, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                x, y, z, y, x, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                y, x, z, y, x, z),
        ];

        possibilites.into_iter().nth(Entier::entre(0,3).valeur() as usize).unwrap()
    }
    fn mauvaise_reponse(&self) -> String {
        let x: char = self.points[(self.index_angle_droit + 2)%3];
        let y: char = self.points[self.index_angle_droit];
        let z: char = self.points[(self.index_angle_droit + 1)%3];
        
        let possibilites: Vec<String> = vec![
            format!("{}{}^2+{}{}^2={}{}^2",
                x, y, x, z, y, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                y, x, x, z, y, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                x, y, z, x, y, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                y, x, z, x, y, z),
            format!("{}{}^2+{}{}^2={}{}^2",
                x, y, x, z, z, y),
            format!("{}{}^2+{}{}^2={}{}^2",
                y, x, x, z, z, y),
            format!("{}{}^2+{}{}^2={}{}^2",
                x, y, z, x, z, y),
            format!("{}{}^2+{}{}^2={}{}^2",
                y, x, z, x, z, y),
        ];

        possibilites.into_iter().nth(Entier::entre(0,7).valeur() as usize).unwrap()
    }
}