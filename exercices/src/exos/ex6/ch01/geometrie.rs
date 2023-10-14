use crate::{Entier, Exercice, ExerciceQCM};
use crate::types::points::{point_aleatoire, multiples_points_aleatoire};


#[derive(Clone,Default)]
enum NatureObjetGeometrique {
    #[default]
    Droite = 1,
    Segment,
    DemiDroiteOrigineGauche,
    DemiDroiteOrigineDroite
}

#[derive(Clone,Default)]
pub struct ObjetGeometriqueSimple {
    a: char,
    b: char,
    nature: NatureObjetGeometrique
}

impl Exercice for ObjetGeometriqueSimple {
    fn variables(&mut self) {
        self.a = point_aleatoire();
        loop {
            self.b = point_aleatoire();
            if self.a != self.b {
                break;
            }
        }
        self.nature = match Entier::entre(1, 4).valeur() {
            1 => NatureObjetGeometrique::Droite,
            2 => NatureObjetGeometrique::Segment,
            3 => NatureObjetGeometrique::DemiDroiteOrigineGauche,
            4 => NatureObjetGeometrique::DemiDroiteOrigineDroite,
            _ => panic!()
        }
    }
}

impl ExerciceQCM for ObjetGeometriqueSimple {
    fn katex_enonce(&self) -> bool { false }
    fn katex_reponses(&self) -> bool { false }
    fn enonce(&self) -> String {
        let limite_gauche = match self.nature {
            NatureObjetGeometrique::Droite => "(",
            NatureObjetGeometrique::Segment => "[",
            NatureObjetGeometrique::DemiDroiteOrigineDroite => "(",
            NatureObjetGeometrique::DemiDroiteOrigineGauche => "["
        };
        let limite_droite = match self.nature {
            NatureObjetGeometrique::Droite => ")",
            NatureObjetGeometrique::Segment => "]",
            NatureObjetGeometrique::DemiDroiteOrigineDroite => "]",
            NatureObjetGeometrique::DemiDroiteOrigineGauche => ")"
        };
        format!("{}{}{}{} est ?",
                limite_gauche, self.a, self.b, limite_droite)
    }
    fn bonne_reponse(&self) -> String {
        match self.nature {
            NatureObjetGeometrique::Segment => format!("un segment"),
            NatureObjetGeometrique::Droite => format!("une droite"),
            NatureObjetGeometrique::DemiDroiteOrigineDroite => 
                    format!("une demi-droite"),
            NatureObjetGeometrique::DemiDroiteOrigineGauche => 
                    format!("une demi-droite"),
        }
    }
    fn mauvaise_reponse(&self) -> String {
        let mut possibilites: Vec<String> = vec![
            "un segment".to_string(),
            "une demi-droite".to_string(),
            "une droite".to_string(),
            "une distance".to_string(),
            "un angle".to_string()
        ];
        possibilites.retain(|x| *x != match self.nature {
            NatureObjetGeometrique::DemiDroiteOrigineDroite | NatureObjetGeometrique::DemiDroiteOrigineGauche => "une demi-droite".to_string(),
            NatureObjetGeometrique::Segment => "un segment".to_string(),
            NatureObjetGeometrique::Droite => "une droite".to_string()
        });

        let n = possibilites.len();
        possibilites.into_iter().nth(Entier::entre(0, n as i64 - 1).valeur() as usize).unwrap()
    }
}

#[derive(Clone,Default)]
pub struct ObjetGeometrique {
    a: char,
    b: char,
    nature: NatureObjetGeometrique
}

impl Exercice for ObjetGeometrique {
    fn variables(&mut self) {
        self.a = point_aleatoire();
        loop {
            self.b = point_aleatoire();
            if self.a != self.b {
                break;
            }
        }
        self.nature = match Entier::entre(1, 4).valeur() {
            1 => NatureObjetGeometrique::Droite,
            2 => NatureObjetGeometrique::Segment,
            3 => NatureObjetGeometrique::DemiDroiteOrigineGauche,
            4 => NatureObjetGeometrique::DemiDroiteOrigineDroite,
            _ => panic!()
        }
    }
}

impl ExerciceQCM for ObjetGeometrique {
    fn enonce(&self) -> String {
        let limite_gauche = match self.nature {
            NatureObjetGeometrique::Droite => "(",
            NatureObjetGeometrique::Segment => "[",
            NatureObjetGeometrique::DemiDroiteOrigineDroite => "(",
            NatureObjetGeometrique::DemiDroiteOrigineGauche => "["
        };
        let limite_droite = match self.nature {
            NatureObjetGeometrique::Droite => ")",
            NatureObjetGeometrique::Segment => "]",
            NatureObjetGeometrique::DemiDroiteOrigineDroite => "]",
            NatureObjetGeometrique::DemiDroiteOrigineGauche => ")"
        };
        format!("Quelle est la nature de {}{}{}{} ?",
                limite_gauche, self.a, self.b, limite_droite)
    }
    fn bonne_reponse(&self) -> String {
        match self.nature {
            NatureObjetGeometrique::Segment => format!("Segment d'extrémités {} et {}", self.a, self.b),
            NatureObjetGeometrique::Droite => format!("Droite passant par {} et {}", self.a, self.b),
            NatureObjetGeometrique::DemiDroiteOrigineDroite => 
                    format!("Demi-droite d'origine {} passant par {}", self.b, self.a),
            NatureObjetGeometrique::DemiDroiteOrigineGauche => 
                    format!("Demi-droite d'origine {} passant par {}", self.a, self.b),
        }
    }
    fn mauvaise_reponse(&self) -> String {
        let mut mauvaises: Vec<String> = vec![];
        mauvaises.push(format!("Distance entre {} et {}", self.a, self.b));

        let droite = format!("Droite passant par {} et {}", self.a, self.b);
        let demi_droite_droite = format!("Demi-droite d'origine {} passant par {}", self.b, self.a);
        let demi_droite_gauche = format!("Demi-droite d'origine {} passant par {}", self.a, self.b);
        let segment = format!("Segment d'extrémités {} et {}", self.a, self.b);

        match self.nature {
            NatureObjetGeometrique::Segment => {
                mauvaises.push(droite);
                mauvaises.push(demi_droite_droite);
                mauvaises.push(demi_droite_gauche);
            },
            NatureObjetGeometrique::Droite => {
                mauvaises.push(segment);
                mauvaises.push(demi_droite_droite);
                mauvaises.push(demi_droite_gauche);
            },
            NatureObjetGeometrique::DemiDroiteOrigineDroite => {
                mauvaises.push(segment);
                mauvaises.push(droite);
                mauvaises.push(demi_droite_gauche);
            },
            NatureObjetGeometrique::DemiDroiteOrigineGauche => {
                mauvaises.push(segment);
                mauvaises.push(droite);
                mauvaises.push(demi_droite_droite);
            }
        }
        mauvaises.into_iter().nth(Entier::entre(0, 3).valeur() as usize).unwrap()
    }
    fn katex_enonce(&self) -> bool {
        false
    }
    fn katex_reponses(&self) -> bool {
        false
    }
    fn explication(&self) -> String {
        format!("<div style='width: 100%; text-align: center'>{}</div>", 
        match self.nature {
            NatureObjetGeometrique::Segment => format!("S'écrit avec des crochets"),
            NatureObjetGeometrique::Droite => format!("S'écrit avec des parenthèses"),
            NatureObjetGeometrique::DemiDroiteOrigineGauche | NatureObjetGeometrique::DemiDroiteOrigineDroite => 
                format!("
                    S'écrit avec un crochet et une parenthèse. <br> 
                    Le crochet est du côté de l'origine.")
        })
    }
}

#[derive(Clone,Default)]
pub struct ComprehensionPointsAlignes {
    pub a: char,
    pub b: char,
    pub c: char,
    pub d: char
}

impl Exercice for ComprehensionPointsAlignes {
    fn variables(&mut self) {
        let points: Vec<char> = multiples_points_aleatoire(4);
        (self.a, self.b, self.c, self.d) = (points[0], points[1], points[2], points[3]);
    }
}

impl ExerciceQCM for ComprehensionPointsAlignes {
    fn enonce(&self) -> String {
        format!("{}, {}, {} \\text{{ et }} {} \\text{{ sont alignés dans cet ordre, alors :}}",
                self.a, self.b, self.c, self.d)
    }
    fn bonne_reponse(&self) -> String {
        let possibilites = vec![
            format!("{} \\in [{}{}]", self.b, self.a, self.c),
            format!("{} \\in [{}{}]", self.c, self.a, self.d),
            format!("{} \\in ({}{}]", self.a, self.b, self.c),
            format!("{} \\in ({}{})", self.a, self.b, self.c),
            format!("{} \\in [{}{})", self.d, self.b, self.c),
            format!("{} \\in ({}{})", self.d, self.b, self.c),
        ];

        possibilites.into_iter().nth(Entier::entre(0,5).valeur() as usize).unwrap()
    }
    fn mauvaise_reponse(&self) -> String {
        let possibilites = vec![
            format!("{} \\in [{}{}]", self.a, self.b, self.c),
            format!("{} \\in [{}{}]", self.d, self.b, self.c),
            format!("{} \\in [{}{})", self.a, self.b, self.c),
            format!("{} \\in [{}{}]", self.a, self.b, self.d),
            format!("{} \\in [{}{})", self.a, self.b, self.c),
            format!("{} \\in ({}{}]", self.d, self.b, self.c),
            format!("{} \\in ({}{}]", self.d, self.a, self.c),
            format!("{} \\in [{}{}]", self.d, self.a, self.c),
        ];

        possibilites.into_iter().nth(Entier::entre(0, 7).valeur() as usize).unwrap()
    }
}

