use crate::types::nombre::nombre::Entier;
use std::collections::HashSet;

pub fn point_aleatoire() -> char {
    let index = Entier::entre(1, 26).valeur();
    (index as u8 + 64) as char 
}

pub fn multiples_points_aleatoire(nombre_voulu: usize) -> Vec<char> {
    let mut resultat = HashSet::new();
    while resultat.len() < nombre_voulu {
        resultat.insert( point_aleatoire() );
    };

    resultat.into_iter().collect()
}