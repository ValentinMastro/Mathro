#[derive(Debug)]
pub enum Requete {
    QCM { niveau: u8, id_exercice: usize, graine: u64 },
    VraiFaux { niveau: u8, id_exercice: usize, graine: u64 }
}

pub fn requete(args: Vec<String>) -> Requete {
    if args.len() != 5 {
        panic!("Nombre d'arguments incorrects");
    }

    let type_requete: &str = &args[1];
    let niveau: u8 = args[2].parse::<u8>().unwrap();
    let id_exercice: usize = args[3].parse::<usize>().unwrap();
    let graine: u64 = args[4].parse::<u64>().unwrap();

    match type_requete {
        "vraifaux" => Requete::VraiFaux { niveau, id_exercice, graine },
        "qcm" => Requete::QCM { niveau, id_exercice, graine },
        &_ => panic!("Requete incorrecte")
    }
}

pub fn envoyer_json(requete: Requete) -> String {
    let niveau = match requete {
        Requete::QCM { niveau, .. } => niveau,
        Requete::VraiFaux { niveau, .. } => niveau
    };
    match niveau {
        6 => envoyer_exercice_6eme(requete),
        4 => envoyer_exercice_4eme(requete),
        _ => panic!("Niveau non pris en charge")
    }
}

// 6EME
pub fn envoyer_exercice_6eme(requete: Requete) -> String {
    let exercice = match requete {
        Requete::QCM { niveau , id_exercice, graine } => {
            use crate::{Exercice, ExerciceQCM};
            match id_exercice {
                _ => todo!()
            }
        },
        Requete::VraiFaux { niveau, id_exercice, graine } => {

        }
    };
    todo!()
}

// 4EME
pub fn envoyer_exercice_4eme(requete: Requete) -> String {
    let exercice: String = match requete {
        Requete::QCM { niveau, id_exercice, graine } => {
            use crate::{Exercice, ExerciceQCM};
            match id_exercice {
                1 => {
                    use crate::exos::ex4::ch00::nature_nombre::EstEntierNaturel;
                    todo!()
                },
                _ => todo!()
            }
        },
        Requete::VraiFaux { niveau, id_exercice, graine } => {
            use crate::{Exercice, ExerciceVraiFaux};
            match id_exercice {
                1 => {
                    use crate::exos::ex4::ch00::nature_nombre::EstEntierNaturel;
                    EstEntierNaturel::default().afficher_exercice()
                },
                2 => {
                    use crate::exos::ex4::ch00::nature_nombre::EstEntierRelatif;
                    EstEntierRelatif::default().afficher_exercice()
                },
                _ => todo!()
            }
        }
    };
    exercice
}