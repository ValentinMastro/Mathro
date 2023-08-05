use exercices::nombre::{Nombre,Generateur};

fn main() {
    let x = Nombre::premier(100).valeur();
    println!("{}", x);
}
