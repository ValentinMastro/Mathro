import {Exercice, Nombre, Parmi, Formule, type exempleProps} from '$lib/exercices/types'

class EstEntierNaturel extends Exercice {
    n: Nombre

    constructor() {
        super()
        this.n = new Nombre(-100, 100, 1)
    }
    est_reponse_valide(valeur: number): boolean {
        return Number.isInteger(valeur) && valeur >= 0
    }
    est_reponse_invalide(valeur: number): boolean {
        return !Number.isInteger(valeur) || valeur < 0
    }
    vraifaux(x = this.n.valeur()) {
        this.enonce = `${x} est-il un entier naturel ?`
        this.bonne_reponse = this.est_reponse_valide(x)
    }
    qcm(nombre_reponses = 5) {
        this.nombre_reponses = 5
        this.enonce = "Lequel de ces nombres est un entier naturel ?"
        this.bonne_reponse = this.n.jusquà(this.est_reponse_valide)
        this.mauvaises_reponses = this.n.multiple_jusquà(this.nombre_reponses - 1, this.est_reponse_invalide )
    }
    exemple_unitaire() {
        let valeur = this.n.valeur()
        let output: exempleProps[] = []

        output.push({
            type: 'nombre',
            valeur: valeur
        })

        if (this.est_reponse_valide(valeur)) {
            output.push({type: 'coche', valeur: true})
        } else {
            output.push({type: 'coche', valeur: false})
            
            var explication = "car il "
            if (valeur < 0 && !Number.isInteger(valeur)) {
                explication += "est négatif et a une partie décimale"
            } else if (valeur < 0) {
                explication += "est négatif"
            } else if (!Number.isInteger(valeur)) {
                explication += "a une partie décimale"
            }
            output.push({
                type: 'texte',
                valeur: explication
            })
        }

        return output
    }
}

class EstEntierRelatif extends Exercice {
    n: Nombre 

    constructor() {
        super()
        this.n = new Nombre(-100, 100, 1)
    }
    est_reponse_valide(valeur: number): boolean {
        return Number.isInteger(valeur)
    }
    est_reponse_invalide(valeur: number): boolean {
        return !Number.isInteger(valeur)
    }
    vraifaux(x = this.n.valeur()): void {
        this.enonce = `${x} est-il un entier relatif ?`
        this.bonne_reponse = this.est_reponse_valide(x)
    }
    qcm(nombre_reponses = 5): void {
        this.enonce = "Lequel de ces nombres est un entier relatif ?"
        this.bonne_reponse = this.n.jusquà(this.est_reponse_valide)
        this.mauvaises_reponses = this.n.multiple_jusquà(this.nombre_reponses - 1, this.est_reponse_valide)
    }
    exemple_unitaire(): exempleProps[] {
        let valeur = this.n.valeur()
        let output: exempleProps[] = []

        output.push({type: 'nombre', valeur: valeur})
        if (this.est_reponse_valide(valeur)) {
            output.push({type: 'coche', valeur: true})
        } else {
            output.push({type: 'coche', valeur: false})
            output.push({type: 'texte', 
                        valeur: "car il a une partie décimale"})
        }

        return output
    }
}

class EstNombreRationnel extends Exercice {
    n: Parmi

    constructor() {
        super()
        this.n = new Parmi([new Nombre(-10, 10, 1), [new Formule("\\pi")], [new Formule("\\frac{1}{3}")]])
    }
    est_reponse_valide(valeur: any): boolean {
        return (typeof(valeur) === "number")
    }
    est_reponse_invalide(valeur: any): boolean {
        return (!(typeof(valeur) === "number"))
    }
    vraifaux(x = this.n.valeur()): void {
        this.enonce = `${x} est-il un nombre rationnel ?`
        this.bonne_reponse = this.est_reponse_valide(x)
    }
    qcm(nombre_reponses = 5): void {
        this.enonce = `Laquelle de ces valeurs est un nombre rationnel ?`
        this.bonne_reponse = this.n.jusquà(this.est_reponse_valide)
        this.mauvaises_reponses = this.n.multiple_jusquà(this.nombre_reponses - 1, this.est_reponse_invalide)
    }
    exemple_unitaire(): exempleProps[] {
        let valeur = this.n.valeur()
        let output: exempleProps[] = []

        if (this.est_reponse_valide(valeur)) {
            output.push({type: 'nombre', valeur: valeur})
            output.push({type: 'coche', valeur: true})
        } else if (this.est_reponse_invalide(valeur)) {
            output.push({type: 'formule', valeur: valeur.chaine})
            output.push({type: 'coche', valeur: false})
        }
        return output
    }
}

export { EstEntierNaturel, EstEntierRelatif, EstNombreRationnel }