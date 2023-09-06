pub mod exercice {
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
            for mauvaise_reponse in set {
                s += &(" ".to_owned() + &mauvaise_reponse);
            }

            s
        }
    }
}