use serde::Serialize;
use crate::interface::{Requete,envoyer_question};
use crate::types::nombre::nombre::{RNG,GenerateurAleatoire};

#[derive(Debug,Serialize)]
pub struct Evaluations {
    pub evaluations: Vec<Evaluation>
}

#[derive(Debug,Serialize)]
pub struct Evaluation {
    pub questions: Vec<Question>
}

#[derive(Debug,Serialize)]
pub struct Question {
    #[serde(rename = "type")]
    question_type: String,
    enonce: String,
    reponse: Reponse,
    katex_enonce: bool,
    katex_reponses: bool,
    explication: String
}

#[derive(Debug,Serialize)]
pub struct Reponse {
    bonne: String,
    mauvaises: Vec<String>,
}

pub struct RequeteQuestion {
    pub id: usize,
    pub nombre: usize
}

fn reset_graine(graine: u8) {
    *RNG.lock().unwrap() = GenerateurAleatoire::creer(graine)
}

pub fn generer_evaluations(liste_questions: Vec<RequeteQuestion>, niveau: u8) -> Evaluations {
    Evaluations { 
        evaluations: (0..=255).map(|graine: u8| {
            let mut questions = Vec::new();

            for q in &liste_questions {
                reset_graine(graine);
                questions.extend((0..q.nombre).map(|_| {
                    envoyer_question(Requete::QCM {
                        niveau,
                        id_exercice: q.id
                    })
                }));
            }

            Evaluation { questions }
        }).collect()
    }
}


pub trait Exercice {
    fn variables(&mut self);
}
pub trait ExerciceVraiFaux: Exercice {
    fn enonce(&self) -> String;
    fn bonne_reponse(&self) -> bool;
    fn question(&mut self) -> Question {
        self.variables();
        Question {
            question_type: "VraiFaux".to_string(),
            enonce: self.enonce(),
            reponse: Reponse {
                bonne : self.bonne_reponse().to_string(),
                mauvaises: vec![]
            },
            katex_enonce: true,
            katex_reponses: true,
            explication: "".to_string()
        }
    }
}

use std::collections::HashSet;
pub trait ExerciceQCM: Exercice {
    fn enonce(&self) -> String;
    fn bonne_reponse(&self) -> String;
    fn mauvaise_reponse(&self) -> String;
    fn explication(&self) -> String { format!("") }
    fn katex_enonce(&self) -> bool { return true }
    fn katex_reponses(&self) -> bool { return true }

    fn question(&mut self, reponses: usize) -> Question {
        self.variables();
        
        let mut s = self.enonce();
        let mut set: HashSet<String> = HashSet::new();

        s += &self.bonne_reponse();
        
        while set.len() < reponses - 1 {
            set.insert(self.mauvaise_reponse());
        }
        
        Question {
            question_type: "QCM".to_string(),
            enonce: self.enonce(),
            reponse: Reponse { 
                bonne: self.bonne_reponse(), 
                mauvaises: set.into_iter().collect()
            },
            katex_enonce: self.katex_enonce(),
            katex_reponses: self.katex_reponses(),
            explication: self.explication()
        }
    }
}
