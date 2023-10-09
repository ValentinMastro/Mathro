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
        format!("({:+})+({:+})=", self.a, self.b)
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
    fn explication(&self) -> String{
        if self.a * self.b > 0 {
            let signe: &str = 
                if self.a > 0 {
                    "positif"
                } else {
                    "négatif"
                };
            format!("<Katex>
            \\text{{Les deux nombres sont {}s, donc la somme est du même signe.}} \\\\
            \\text{{On additionne les distances à zéro : }} {} + {} = {} \\\\
            \\text{{D'où : }} {} + {} = {}
            </Katex>", signe, self.a.abs(), self.b.abs(), self.a.abs() + self.b.abs(), self.a, self.b, self.a + self.b)
        } else if self.a * self.b < 0 {
            let max = if self.a.abs() > self.b.abs() {self.a} else {self.b};
            let min = if self.a.abs() > self.b.abs() {self.b} else {self.a};
            let ligne1: String = format!("\\text{{En cachant les signes, }} {} > {} \\\\", max.abs(), min.abs());
            let ligne2: String = format!("\\text{{donc le résultat est du même signe que {:+}, c'est-à-dire \\textcolor{{red}}{{{}}} }} \\\\", max, if max > 0 {"positif"} else {"négatif"});
            let ligne3: String = format!("\\text{{Les signes étant différents, on calcule la différence : }} {} - {} = \\color{{red}} {} \\color{{black}} \\\\", max.abs(), min.abs(), max.abs() - min.abs());
            let ligne4: String = format!("\\text{{D'où : }} ({:+}) + ({:+}) = \\color{{red}} {:+} \\color{{black}}", self.a, self.b, self.a+self.b);
            format!("<Katex>{}{}{}{}</Katex>", ligne1, ligne2, ligne3, ligne4)
        } else {
            format!("\\text{{Un des deux nombres est égal à 0.}}")
        } 
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
        format!("({:+})-({:+})=", self.a, self.b)
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
    fn explication(&self) -> String {
        format!("<Katex>
            ({:+}) - ({:+}) = ({:+}) \\color{{red}} + ({:+}) \\color{{black}} = {:+}
        </Katex>", self.a, self.b, self.a, -1*self.b, self.a - self.b)
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
        format!("({:+}) \\times ({:+})=", self.a, self.b)
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
    fn explication(&self) -> String {
        let mut nombre_de_facteurs_negatifs: u8 = 0;
        if self.a < 0 { nombre_de_facteurs_negatifs += 1}
        if self.b < 0 { nombre_de_facteurs_negatifs += 1}

        format!("<Katex>
            \\text{{Il y a {} facteur(s) négatif(s) ({}), donc le résultat est {}}} \\\\
            \\text{{D'où : }} ({:+}) \\times ({:+}) = {:+}
        </Katex>", nombre_de_facteurs_negatifs, if nombre_de_facteurs_negatifs % 2 == 0 {"pair"} else {"impair"},
         if nombre_de_facteurs_negatifs % 2 == 0 {"positif"} else {"négatif"}, self.a, self.b, self.a * self.b)
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

