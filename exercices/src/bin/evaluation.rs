use exercices::types::exercice::{
    Evaluations, RequeteQuestion, generer_evaluations
};


fn liste_questions(parametres: &ParametresCLI) -> Vec<RequeteQuestion> {
    match parametres.niveau {
        4 => match parametres.numero_evaluation {
                1 => vec![
                    RequeteQuestion{ id: 1, nombre: 4 },
                    RequeteQuestion{ id: 2, nombre: 4 },
                    RequeteQuestion{ id: 3, nombre: 3 },
                    RequeteQuestion{ id: 6, nombre: 3 },
                    RequeteQuestion{ id: 4, nombre: 3 },
                    RequeteQuestion{ id: 5, nombre: 3 },
                ],
                2 => vec![
                    RequeteQuestion{ id: 10, nombre: 6 },
                    RequeteQuestion{ id: 7, nombre: 6 },
                    RequeteQuestion{ id: 8, nombre: 4 },
                    RequeteQuestion{ id: 9, nombre: 4 },
                ],
                3 => vec![
                    RequeteQuestion{ id: 11, nombre: 4},
                    RequeteQuestion{ id: 9, nombre: 5},
                    RequeteQuestion{ id: 12, nombre: 5},
                    RequeteQuestion{ id: 1, nombre: 2},
                    RequeteQuestion{ id: 2, nombre: 2},
                    RequeteQuestion{ id: 3, nombre: 2}
                ],
                4 => vec![
                    RequeteQuestion{ id: 4, nombre: 1},
                    RequeteQuestion{ id: 5, nombre: 2},
                    RequeteQuestion{ id: 1, nombre: 3},
                    RequeteQuestion{ id: 2, nombre: 3},
                    RequeteQuestion{ id: 13, nombre: 3},
                    RequeteQuestion{ id: 18, nombre: 2},
                    RequeteQuestion{ id: 16, nombre: 2},
                    RequeteQuestion{ id: 17, nombre: 4}
                ],
                5 => vec![
                    RequeteQuestion{ id: 11, nombre: 3},
                    RequeteQuestion{ id: 9, nombre: 3},
                    RequeteQuestion{ id: 12, nombre: 3},
                    RequeteQuestion{ id: 20, nombre: 3},
                    RequeteQuestion{ id: 21, nombre: 3},
                    RequeteQuestion{ id: 22, nombre: 5}
                ],
                _ => todo!()
            },
        6 => match parametres.numero_evaluation {
                1 => vec![
                    RequeteQuestion{ id: 11, nombre: 2 },
                    RequeteQuestion{ id: 9, nombre: 2 },
                    RequeteQuestion{ id: 12, nombre: 2 },
                    RequeteQuestion{ id: 3, nombre: 4 },
                    RequeteQuestion{ id: 4, nombre: 4 },
                    RequeteQuestion{ id: 5, nombre: 4 },
                ],
                2 => vec![
                    RequeteQuestion{ id: 1, nombre: 1 },
                    RequeteQuestion{ id: 2, nombre: 2 },
                    RequeteQuestion{ id: 3, nombre: 3 },
                    RequeteQuestion{ id: 4, nombre: 2 },
                    RequeteQuestion{ id: 5, nombre: 2 },
                    RequeteQuestion{ id: 6, nombre: 10}
                ],
                3 => vec![
                    RequeteQuestion{ id: 1, nombre: 1},
                    RequeteQuestion{ id: 2, nombre: 1},
                    RequeteQuestion{ id: 3, nombre: 1},
                    RequeteQuestion{ id: 7, nombre: 7},
                    RequeteQuestion{ id: 8, nombre: 2},
                    RequeteQuestion{ id: 9, nombre: 4},
                    RequeteQuestion{ id: 10, nombre: 4}
                ],
                4 => vec![
                    RequeteQuestion{ id: 11, nombre: 3},
                    RequeteQuestion{ id: 7, nombre: 5},
                    RequeteQuestion{ id: 8, nombre: 2},
                    RequeteQuestion{ id: 9, nombre: 2},
                    RequeteQuestion{ id: 10, nombre: 2},
                    RequeteQuestion{ id: 12, nombre: 3},
                    RequeteQuestion{ id: 13, nombre: 3}
                ],
                5 => vec![
                    RequeteQuestion{ id: 7, nombre: 2},
                    RequeteQuestion{ id: 12, nombre: 3},
                    RequeteQuestion{ id: 13, nombre: 3},
                    RequeteQuestion{ id: 14, nombre: 5},
                    RequeteQuestion{ id: 15, nombre: 4},
                    RequeteQuestion{ id: 16, nombre: 3},
                ],
                _ => todo!()
            },
        _ => todo!()
    }
}


struct ParametresCLI {
    niveau: u8,
    numero_evaluation: u8
}

/// Convertir un String en u8
fn convertir_parametre_en_u8(s: String) -> u8 {
    match s.parse::<u8>() {
        Ok(nombre) => nombre,
        Err(erreur) => panic!("{}", erreur)
    }
}

/// Lis les 2 paramètres : niveau et numero_evaluation
fn lire_parametres() -> ParametresCLI {
    match &std::env::args().into_iter().collect::<Vec<String>>()[..] {
        [_executable, a, b] => {
            ParametresCLI { 
                niveau: convertir_parametre_en_u8(a.to_string()),
                numero_evaluation: convertir_parametre_en_u8(b.to_string())
            }
        },
        _ => panic!("\nMauvais nombre de paramètres.\nExemple:\n\t./evaluation 4 1\n")
    }
}

/// 
/// cargo run --bin evaluation $NIVEAU $NUMERO_EVALUATION
/// 
/// exemples : 
/// cargo run --bin evaluation 4 1
/// ./evaluation 4 1
fn main() {
    // Récupération de la liste des questions
    // via les paramètres CLI
    let parametres: ParametresCLI = lire_parametres();
    let liste_questions = liste_questions(&parametres);

    let evaluations: Evaluations = generer_evaluations(liste_questions, parametres.niveau);
    println!("{}", serde_json::to_string(&evaluations).unwrap());
}