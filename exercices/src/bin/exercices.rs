use exercices::interface::{requete, Requete, envoyer_json};
use std::env;
use exercices::types::nombre::nombre::GRAINE;

/// Exemples d'utilisations :
///     cargo run -- vraifaux 4 1
fn main() {
    let args: Vec<String> = env::args().collect();
    let config: Requete = requete(args.clone());

    *GRAINE.lock().unwrap() = args[4].parse::<u8>().unwrap();
    let data: String = envoyer_json(config);
    println!("{}", data);
}