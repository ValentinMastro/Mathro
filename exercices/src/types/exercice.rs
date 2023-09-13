pub mod exercice {
    extern crate serde;
    extern crate serde_json;
    use serde::Serialize;
    use serde_json::json;

    #[derive(Serialize)]
    struct Question {
        #[serde(rename = "type")]
        question_type: String,
        enonce: String,
        reponse: Reponse
    }

    #[derive(Serialize)]
    struct Reponse {
        bonne: String,
        mauvaises: Vec<String>,
    }
    
    pub trait Exercice {
        fn variables(&mut self);
    }
    pub trait ExerciceVraiFaux: Exercice {
        fn enonce(&self) -> String;
        fn bonne_reponse(&self) -> bool;
        fn afficher_exercice(&mut self) -> String {
            self.variables();
            format!(
                "{{ \"type\": \"VraiFaux\", \"enonce\": \"{}\", \"reponse\": {} }}", 
                    self.enonce(),
                    self.bonne_reponse(),)
        }
    }
    
    use std::collections::HashSet;
    pub trait ExerciceQCM: Exercice {
        fn enonce(&self) -> String;
        fn bonne_reponse(&self) -> String;
        fn mauvaise_reponse(&self) -> String;
        fn afficher_exercice(&mut self, reponses: usize) -> String {
            self.variables();
            
            let mut s = self.enonce();
            let mut set: HashSet<String> = HashSet::new();

            s += &self.bonne_reponse();
            
            while set.len() < reponses - 1 {
                set.insert(self.mauvaise_reponse());
            }
            
            let question = Question {
                question_type: "QCM".to_string(),
                enonce: self.enonce(),
                reponse: Reponse { 
                    bonne: self.bonne_reponse(), 
                    mauvaises: set.into_iter().collect()
                }
            };
            
            let json_string = serde_json::to_string(&question)
                                .expect("Erreur JSON");
            json_string
        }
    }
}