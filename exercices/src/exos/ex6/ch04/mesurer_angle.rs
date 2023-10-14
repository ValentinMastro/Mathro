use crate::{Entier, Exercice, ExerciceQCM};

#[derive(Default, Clone)]
pub struct MesurerAngle{
    pub angle: i64
}

impl Exercice for MesurerAngle {
    fn variables(&mut self) {
        self.angle = Entier::parmi(
            (1..=17).map(|x| x*10).collect()
        ).valeur()
    }
}

impl ExerciceQCM for MesurerAngle {
    fn katex_enonce(&self) -> bool { false }
    fn enonce(&self) -> String {
        format!("
        <svg style='height: 48px;' viewBox='0 0 150 48'>
            <polyline style='stroke: rgb(0, 0, 0); fill: white;' points='149 45 75 45 {} {}' />
        </svg>", 
            75.0 + f64::cos((self.angle as f64).to_radians()) * 40.0,
            45.0 - f64::sin((self.angle as f64).to_radians()) * 40.0,
        )
    }
    fn bonne_reponse(&self) -> String {
        format!("{}°", self.angle)
    }
    fn mauvaise_reponse(&self) -> String {
        format!("{}°", 
            Entier::parmi(
                (1..=17).map(|x| x*10)
                        .filter(|&x| x != self.angle)
                        .collect()
            ).valeur()
        )
    }
}