use crate::{Exercice, ExerciceQCM, Entier};

#[derive(Default, Clone, Copy)]
pub struct AdditionFraction {
    pub a: i64,
    pub b: i64,
    pub c: i64,
    pub d: i64
}

impl Exercice for AdditionFraction {
    fn variables(&mut self) {
        self.a = Entier::entre(1, 10).valeur();
        self.c = Entier::entre(1, 10).valeur_sauf(vec![self.a]);
        self.b = Entier::entre(10, 25).valeur_sauf(vec![self.a, self.c]);
        self.d = Entier::entre(10, 25).valeur_sauf(vec![self.a, self.b, self.c]);
    }
}

impl ExerciceQCM for AdditionFraction {
    fn enonce(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}} + \\dfrac{{{}}}{{{}}}",
                self.a, self.b, self.c, self.d)
    }
    fn bonne_reponse(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}}", 
                self.a * self.d + self.b * self.c,
                self.b * self.d)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites: Vec<String> = vec![
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b+self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a * self.d + self.b * self.c - 1, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.b),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.d),
        ];

        possibilites.into_iter().nth(Entier::entre(0, 4).valeur() as usize).unwrap()
    }
}

#[derive(Clone,Copy,Default)]
pub struct AdditionFractionRelatifs {
    pub a: i64,
    pub b: i64,
    pub c: i64,
    pub d: i64
}

impl Exercice for AdditionFractionRelatifs {
    fn variables(&mut self) {
        self.a = Entier::entre(-10, 10).valeur();
        self.c = Entier::entre(-10, 10).valeur_sauf(vec![self.a]);
        self.b = Entier::entre(-25, 25).valeur_sauf(vec![self.a, self.c]);
        self.d = Entier::entre(-25, 25).valeur_sauf(vec![self.a, self.b, self.c]);
    }
}

impl ExerciceQCM for AdditionFractionRelatifs {
    fn enonce(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}} + \\dfrac{{{}}}{{{}}}",
                self.a, self.b, self.c, self.d)
    }
    fn bonne_reponse(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}}", 
                self.a * self.d + self.b * self.c,
                self.b * self.d)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites: Vec<String> = vec![
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b+self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a * self.d + self.b * self.c - 1, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.b),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a * self.c, self.b * self.d),
        ];

        possibilites.into_iter().nth(Entier::entre(0, 4).valeur() as usize).unwrap()
    }
}

#[derive(Default, Clone, Copy)]
pub struct MultiplicationFraction {
    pub a: i64,
    pub b: i64,
    pub c: i64,
    pub d: i64
}

impl Exercice for MultiplicationFraction {
    fn variables(&mut self) {
        self.a = Entier::entre(1, 10).valeur();
        self.c = Entier::entre(1, 10).valeur_sauf(vec![self.a]);
        self.b = Entier::entre(10, 25).valeur_sauf(vec![self.a, self.c]);
        self.d = Entier::entre(10, 25).valeur_sauf(vec![self.a, self.b, self.c]);
    }
}

impl ExerciceQCM for MultiplicationFraction {
    fn enonce(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}} \\times \\dfrac{{{}}}{{{}}}",
                self.a, self.b, self.c, self.d)
    }
    fn bonne_reponse(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}}", 
                self.a * self.c,
                self.b * self.d)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites: Vec<String> = vec![
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b+self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a * self.d + self.b * self.c - 1, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.b),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.d),
        ];

        possibilites.into_iter().nth(Entier::entre(0, 4).valeur() as usize).unwrap()
    }
}

#[derive(Clone, Default)]
pub struct FractionsEgales {
    pub a: i64,
    pub b: i64,
    pub k: i64
}

impl Exercice for FractionsEgales {
    fn variables(&mut self) {
        self.a = Entier::entre(1, 20).valeur();
        self.b = Entier::entre(1, 20).valeur_sauf(vec![self.a]);
        self.k = Entier::entre(2, 10).valeur_sauf(vec![self.a, self.b]);
    }
}

impl ExerciceQCM for FractionsEgales {
    fn enonce(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}} = \\dfrac{{{}}}{{?}}",
                self.a, self.b, self.a*self.k)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.b*self.k)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites: Vec<i64> = vec![
            self.b,
            self.a*self.k,      
            self.a,
            self.b*(self.k-1),
            self.b*(self.k+1),
            self.a*(self.k-1),
            self.a*(self.k+1)
        ];
        let n: i64 = possibilites.len() as i64;
        format!("{}", possibilites.into_iter().nth(Entier::entre(0, n-1).valeur() as usize).unwrap())
    }
}
#[derive(Default, Clone, Copy)]
pub struct DivisionFraction {
    pub a: i64,
    pub b: i64,
    pub c: i64,
    pub d: i64
}

impl Exercice for DivisionFraction {
    fn variables(&mut self) {
        self.a = Entier::entre(1, 10).valeur();
        self.c = Entier::entre(1, 10).valeur_sauf(vec![self.a]);
        self.b = Entier::entre(10, 25).valeur_sauf(vec![self.a, self.c]);
        self.d = Entier::entre(10, 25).valeur_sauf(vec![self.a, self.b, self.c]);
    }
}

impl ExerciceQCM for DivisionFraction {
    fn enonce(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}} \\div \\dfrac{{{}}}{{{}}}",
                self.a, self.b, self.c, self.d)
    }
    fn bonne_reponse(&self) -> String {
        format!("\\dfrac{{{}}}{{{}}}", 
                self.a * self.d,
                self.b * self.c)
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites: Vec<String> = vec![
            format!("\\dfrac{{{}}}{{{}}}", self.a*self.c, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b+self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a+self.c, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a * self.d + self.b * self.c - 1, self.b*self.d),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.b),
            format!("\\dfrac{{{}}}{{{}}}", self.a + self.c, self.d),
        ];

        possibilites.into_iter().nth(Entier::entre(0, 4).valeur() as usize).unwrap()
    }
}
