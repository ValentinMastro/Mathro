use crate::{Entier, Exercice, ExerciceQCM};
use crate::types::points::multiples_points_aleatoire;

#[derive(Clone,Default)]
pub struct AngleTriangle {
    pub points: [char;3],
    pub ang1: i64,
    pub ang2: i64,
}

impl Exercice for AngleTriangle {
    fn variables(&mut self) {
        self.points = match multiples_points_aleatoire(3).as_slice() {
            [a, b, c] => [*a, *b, *c],
            _ => panic!("")
        };
        self.ang1 = Entier::entre(1, 178).valeur();
        self.ang2 = Entier::parmi(
            (1..=178)
                    .filter(|x| x + self.ang1 <= 180 - 1 )
                    .collect()
        ).valeur();
    }
}

impl ExerciceQCM for AngleTriangle {
    fn enonce(&self) -> String {
        format!("\\text{{Dans le triangle {}{}{},}}~ \\widehat{{{}{}{}}} = {}° ~\\text{{et}}~ \\widehat{{{}{}{}}} = {}°",
            self.points[0], self.points[1], self.points[2],
            self.points[0], self.points[1], self.points[2], self.ang1,
            self.points[1], self.points[0], self.points[2], self.ang2
        )
    }
    fn bonne_reponse(&self) -> String {
        format!("\\widehat{{{}{}{}}} = {}°",
            self.points[0], self.points[2], self.points[1], 
            180 - self.ang1 - self.ang2  
        )
    }
    fn mauvaise_reponse(&self) -> String {
        format!("\\widehat{{{}{}{}}} = {}°",
            self.points[0], self.points[2], self.points[1], 
            match Entier::entre(0,5).valeur() {
                0 => 360 - self.ang1 - self.ang2,
                1 => 180 - self.ang1 + self.ang2,
                2 => 180 + self.ang1 - self.ang2,
                3 => self.ang1 + self.ang2,
                4 => (self.ang1 - self.ang2).abs(),
                5 => Entier::parmi((1..=178).filter(|&x| x != 180 - self.ang1 - self.ang2).collect()).valeur(),
                _ => unreachable!()
            } 
        )
    }
}