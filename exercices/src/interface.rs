#[derive(Debug)]
pub enum Requete {
    QCM { niveau: u8, id_exercice: usize },
    VraiFaux { niveau: u8, id_exercice: usize }
}

pub fn requete(args: Vec<String>) -> Requete {
    if args.len() != 5 {
        panic!("Nombre d'arguments incorrects");
    }

    let type_requete: &str = &args[1];
    let niveau: u8 = args[2].parse::<u8>().unwrap();
    let id_exercice: usize = args[3].parse::<usize>().unwrap();
    let _graine: u64 = args[4].parse::<u64>().unwrap();

    match type_requete {
        "vraifaux" => Requete::VraiFaux { niveau, id_exercice},
        "qcm" => Requete::QCM { niveau, id_exercice},
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
    let exercice: String = match requete {
        Requete::QCM { id_exercice, .. } => {
            use crate::ExerciceQCM;
            match id_exercice {
                1 => {
                    use crate::exos::ex6::ch00::chiffre_nombre::ChiffreDes;
                    ChiffreDes::default().afficher_exercice(5)
                },
                2 => {
                    use crate::exos::ex6::ch00::chiffre_nombre::NombreDe;
                    NombreDe::default().afficher_exercice(5)
                },
                3 => {
                    use crate::exos::ex6::ch00::chiffre_nombre::TableMultiplication;
                    TableMultiplication::default().afficher_exercice(5)
                },
                4 => {
                    use crate::exos::ex6::ch00::chiffre_nombre::ComparaisonPlusPetitQue;
                    ComparaisonPlusPetitQue::default().afficher_exercice(5)
                },
                5 => {
                    use crate::exos::ex6::ch00::chiffre_nombre::ComparaisonPlusGrandQue;
                    ComparaisonPlusGrandQue::default().afficher_exercice(5)
                },
                _ => todo!()
            }
        },
        Requete::VraiFaux { id_exercice, .. } => {
            use crate::ExerciceVraiFaux;
            match id_exercice {
                _ => todo!()
            }
        }
    };
    exercice
}

// 4EME
pub fn envoyer_exercice_4eme(requete: Requete) -> String {
    let exercice: String = match requete {
        Requete::QCM { id_exercice, .. } => {
            use crate:: ExerciceQCM;
            match id_exercice {
                1 => {
                    use crate::exos::ex4::ch00::operations::Addition2relatifs;
                    Addition2relatifs::default().afficher_exercice(5)
                },
                2 => {
                    use crate::exos::ex4::ch00::operations::Soustraction2relatifs;
                    Soustraction2relatifs::default().afficher_exercice(5)
                },
                3 => {
                    use crate::exos::ex4::ch00::operations::Multiplication2relatifs;
                    Multiplication2relatifs::default().afficher_exercice(5)
                },
                4 => {
                    use crate::exos::ex4::ch01::carre_racine::Carre;
                    Carre::default().afficher_exercice(5)
                },
                5 => {
                    use crate::exos::ex4::ch01::carre_racine::RacineCarreParfait;
                    RacineCarreParfait::default().afficher_exercice(5)
                },
                6 => {
                    use crate::exos::ex4::ch00::operations::AdditionMultiplication3relatifs;
                    AdditionMultiplication3relatifs::default().afficher_exercice(5)
                }
                _ => todo!()
            }
        },
        Requete::VraiFaux { id_exercice, .. } => {
            use crate::ExerciceVraiFaux;
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