use crate::{types::exercice::Question, exos::ex4::ch02::fraction::FractionsEgales};
use serde_json;

use crate::exos::ex6::{
    ch00::chiffre_nombre::{
        ChiffreDes,
        NombreDe,
        TableMultiplication,
        ComparaisonPlusPetitQue,
        ComparaisonPlusGrandQue
    },
    ch01::geometrie::{
        ObjetGeometrique,
        ObjetGeometriqueSimple,
        ComprehensionPointsAlignes
    },
    ch03::{
        addition::{
            Addition5chiffres,
            AdditionDecimaux
        },
        soustraction::{
            Soustraction5chiffres,
            SoustractionDecimaux
        }
    },
    ch07::multiplication::MultiplicationPar11
};

use crate::exos::ex4::{
    ch00::operations::{
            Addition2relatifs,
            Soustraction2relatifs,
            Multiplication2relatifs,
            AdditionMultiplication3relatifs
    },
    ch01::{
        carre_racine::{
            Carre,
            CarreSimple,
            RacineCarre,
            RacineCarreParfait
        },
        pythagore::{
            EgalitePythagore,
            PythagoreCoteAngleDroitApproche,
            PythagoreHypotenuse,
            PythagoreHypotenuseApprochee
        }
    },
    ch02::{
        fraction::{
            AdditionFraction,
            AdditionFractionRelatifs,
            MultiplicationFraction,
            DivisionFraction
        },
        divisions::{
            ProblemeDivision1,
            ProblemeDivision2
        }
    }
};

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

    match type_requete {
        "vraifaux" => Requete::VraiFaux { niveau, id_exercice},
        "qcm" => Requete::QCM { niveau, id_exercice},
        &_ => panic!("Requete incorrecte")
    }
}

pub fn envoyer_question(requete: Requete) -> Question {
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

pub fn envoyer_json(requete: Requete) -> String {
    let question = envoyer_question(requete);
    serde_json::to_string(&question).unwrap()
}

pub fn envoyer_exercice_6eme(requete: Requete) -> Question {
    let exercice: Question = match requete {
        Requete::QCM { id_exercice, .. } => {
            use crate::ExerciceQCM;
            match id_exercice {
                1 => ChiffreDes::default().question(5),
                2 => NombreDe::default().question(5),
                3 => TableMultiplication::default().question(5),
                4 => ComparaisonPlusPetitQue::default().question(5),
                5 => ComparaisonPlusGrandQue::default().question(5),
                6 => ObjetGeometrique::default().question(5),
                7 => ComprehensionPointsAlignes::default().question(5),
                8 => MultiplicationPar11::default().question(5),
                9 => Addition5chiffres::default().question(5),
                10 => Soustraction5chiffres::default().question(5),
                11 => ObjetGeometriqueSimple::default().question(5),
                12 => AdditionDecimaux::default().question(5),
                13 => SoustractionDecimaux::default().question(5),
                _ => todo!()
            }
        },
        _ => todo!()
    };
    exercice
}

pub fn envoyer_exercice_4eme(requete: Requete) -> Question {
    let exercice: Question = match requete {
        Requete::QCM { id_exercice, .. } => {
            use crate:: ExerciceQCM;
            match id_exercice {
                1 => Addition2relatifs::default().question(5),
                2 => Soustraction2relatifs::default().question(5),
                3 => Multiplication2relatifs::default().question(5),
                4 => CarreSimple::default().question(5),
                5 => RacineCarreParfait::default().question(5),
                6 => AdditionMultiplication3relatifs::default().question(5),
                7 => RacineCarre::default().question(5),
                8 => PythagoreHypotenuse::default().question(5),
                9 => PythagoreHypotenuseApprochee::default().question(5),
                10 => Carre::default().question(5),
                11 => EgalitePythagore::default().question(5),
                12 => PythagoreCoteAngleDroitApproche::default().question(5),
                13 => AdditionFraction::default().question(5),
                14 => AdditionFractionRelatifs::default().question(5),
                15 => MultiplicationFraction::default().question(5),
                16 => ProblemeDivision1::default().question(5),
                17 => ProblemeDivision2::default().question(5),
                18 => FractionsEgales::default().question(5),
                19 => DivisionFraction::default().question(5),
                _ => todo!()
            }
        },
        _ => todo!()
    };
    exercice
}