use crate::{Entier, Exercice, ExerciceQCM};
use crate::types::points::multiples_points_aleatoire;

#[derive(Clone,Default)]
pub struct CalculAngleRentrant{
    pub points: [char;3],
    pub angle: i64,
}

impl Exercice for CalculAngleRentrant {
    fn variables(&mut self) {
        self.points = match multiples_points_aleatoire(3).as_slice() {
            [a, b, c] => [*a, *b, *c],
            _ => panic!("")
        };
        self.angle = Entier::entre(1, 179).valeur();
    }
}

impl ExerciceQCM for CalculAngleRentrant {
    fn enonce(&self) -> String {
        format!("\\text{{Si}}~\\widehat{{{}{}{}}}={}° ~\\text{{alors}}~\\widecheck{{{}{}{}}}=?",
            self.points[0], self.points[1], self.points[2],
            self.angle,
            self.points[0], self.points[1], self.points[2],
        )
    }
    fn bonne_reponse(&self) -> String {
        format!("{}°", 360 - self.angle)
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{}°",
            match Entier::entre(0,4).valeur() {
                0 => 180 - self.angle,
                1 => 180 + self.angle,
                2 => 90 + self.angle,
                3 => self.angle,
                4 => Entier::parmi(
                    (181..=359).filter(|&x| x != 360 - self.angle)
                            .collect()
                ).valeur(),
                _ => unreachable!()
            }
        )
    }
    fn explication(&self) -> String {
        format!("
            
        ")
    }
}