use crate::{Entier, Exercice, ExerciceQCM};

#[derive(Clone, Default)]
pub struct Addition2relatifs {
    pub a: i64,
    pub b: i64
}

impl Exercice for Addition2relatifs {
    fn variables(&mut self) {
        self.a = Entier::entre(-50, 50).valeur();
        self.b = Entier::entre(-50, 50).valeur();
    }
}

impl ExerciceQCM for Addition2relatifs {
    fn enonce(&self) -> String {
        format!("({})+({})=", self.a, self.b)
    }
    /// ```
    /// use exercices::{Exercice, ExerciceQCM};
    /// use exercices::exos::ex4::ch00::operations::Addition2relatifs;
    /// 
    /// assert_eq!(Addition2relatifs{a: 3, b: 5}.bonne_reponse(), "8".to_string());
    /// assert_eq!(Addition2relatifs{a: -2, b: -8}.bonne_reponse(), "-10".to_string());
    /// assert_eq!(Addition2relatifs{a: -9, b: 15}.bonne_reponse(), "6".to_string());
    /// ```
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a+self.b)
    }
    /// ```
    /// use exercices::{Exercice, ExerciceQCM};
    /// use exercices::exos::ex4::ch00::operations::Addition2relatifs;
    /// 
    /// assert_ne!(Addition2relatifs{a: 3, b: 5}.mauvaise_reponse(), "8".to_string());
    /// assert_ne!(Addition2relatifs{a: -2, b: -8}.mauvaise_reponse(), "-10".to_string());
    /// assert_ne!(Addition2relatifs{a: -9, b: 15}.mauvaise_reponse(), "6".to_string());
    /// ```
    fn mauvaise_reponse(&self) -> String {
        let valeurs_possibles: Vec<i64> = vec![
            self.a - self.b,
            self.a * 2,
            self.b * 2,
            self.a * self.b,
            self.b - self.a,
            -1*(self.a + self.b)
        ];
        format!("{}", Entier::parmi(valeurs_possibles).valeur())
    }
}

#[derive(Clone, Default)]
pub struct Soustraction2relatifs {
    pub a: i64,
    pub b: i64
}

impl Exercice for Soustraction2relatifs {
    fn variables(&mut self) {
        self.a = Entier::entre(-50, 50).valeur();
        self.b = Entier::entre(-50, 50).valeur();
    }
}

impl ExerciceQCM for Soustraction2relatifs {
    fn enonce(&self) -> String {
        format!("({})-({})=", self.a, self.b)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a-self.b)
    }
    fn mauvaise_reponse(&self) -> String {
        let valeurs_possibles: Vec<i64> = vec![
            self.a + self.b,
            self.a * 2,
            self.b * 2,
            self.a * self.b,
            self.b - self.a,
            -1*(self.a + self.b)
        ];
        format!("{}", Entier::parmi(valeurs_possibles).valeur())
    }
}

#[derive(Clone, Default)]
pub struct Multiplication2relatifs {
    pub a: i64,
    pub b: i64
}

impl Exercice for Multiplication2relatifs {
    fn variables(&mut self) {
        self.a = Entier::entre(-50, 50).valeur();
        self.b = Entier::entre(-50, 50).valeur();
    }
}

impl ExerciceQCM for Multiplication2relatifs {
    fn enonce(&self) -> String {
        format!("({}) \\times ({})=", self.a, self.b)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", self.a*self.b)
    }
    fn mauvaise_reponse(&self) -> String {
        let valeurs_possibles: Vec<i64> = vec![
            self.a + self.b,
            self.a * 2,
            self.b * 2,
            self.a * self.a,
            self.b * self.b,
            -1*(self.a * self.a),
            -1*(self.b * self.b),
            -1*(self.a * self.b),
            self.a - self.b,
            self.b - self.a,
            -1*(self.a + self.b)
        ];
        format!("{}", Entier::parmi(valeurs_possibles).valeur())
    }
}

#[derive(Clone,Default)]
pub struct AdditionMultiplication3relatifs {
    pub a: i64,
    pub b: i64,
    pub c: i64
}

impl Exercice for AdditionMultiplication3relatifs {
    fn variables(&mut self) {
        self.a = Entier::entre(-20, 20).valeur();
        self.b = Entier::entre(-20, 20).valeur();
        self.c = Entier::entre(-20, 20).valeur();
    }
}

impl ExerciceQCM for AdditionMultiplication3relatifs {
    fn enonce(&self) -> String {
        format!("({})+({}) \\times ({})", self.a, self.b, self.c)
    }
    fn bonne_reponse(&self) -> String {
        format!("{}", (self.b*self.c) + self.a)
    }
    fn mauvaise_reponse(&self) -> String {
        let valeurs_possibles: Vec<i64> = vec![
            (self.a + self.b)*self.c,
            (self.a + self.b)*self.c + 1,
            (self.a + self.b)*self.c - 1,
            (self.b*self.c) + self.a + 1,
            (self.b*self.c) + self.a - 1,
            (self.b*self.c) + self.a + 2,
            (self.b*self.c) + self.a - 2,
            (self.a + self.c)*self.b,
            (self.a + self.c)*self.b + 1,
            (self.a + self.c)*self.b - 1,
        ];
        format!("{}", Entier::parmi(valeurs_possibles).valeur())
    }
}