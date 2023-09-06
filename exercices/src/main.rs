use exercices::interface::{requete, Requete, envoyer_json};
use std::env;

/// Exemples d'utilisations :
///     cargo run -- vraifaux 4 1
fn main() {
    let config: Requete = requete(env::args().collect());
    let data = envoyer_json(config);
    println!("{}", data);
}