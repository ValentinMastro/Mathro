class Nombre {
    min: number
    max: number
    precision: number
    fn: (number: number) => number

    constructor(min: number, max: number, precision: number = 0, fn: (number: number) => number = (nombre) => {return nombre}) {
        this.min = min
        this.max = max
        this.precision = Math.pow(10, precision)
        this.fn = fn
    }

    // Renvoie une valeur aléatoire entre min et max
    valeur() {
        var valeur = Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.precision) / this.precision
        return this.fn(valeur)
    }

    // Renvoie une valeur satisfaisant une condition
    jusquà(condition: (valeur: number) => boolean): number {
        let v: number
        do { v = this.valeur() } while (!condition(v))
        return v
    }

    // Renvoie plusieurs valeurs différentes satisfaisant une condition
    multiple_jusquà(nombre_de_valeurs: number, condition: (valeur: number) => boolean): number[] {
        let ensemble: Set<number> = new Set()
        let v: number
        do {
            v = this.valeur()
            if (condition(v) && !ensemble.has(v)) { ensemble.add(v) }
        } while (ensemble.size < nombre_de_valeurs)

        return Array.from(ensemble)
    }
}

class Parmi {
    valeurs: any[]

    constructor(valeurs: any[]) {
        this.valeurs = valeurs
    }
    valeur(): any {
        var n = this.valeurs.length
        // nombre aléatoire entre 0 et n-1, inclus
        var index: number = Math.floor( Math.random() * n )

        if (this.valeurs[index] instanceof Array) {
            var index_bis: number = 
                Math.floor(Math.random() * this.valeurs[index].length)
            return this.valeurs[index][index_bis]
        } else if (this.valeurs[index] instanceof Nombre) {
            return this.valeurs[index].valeur()
        } else {
            return this.valeurs[index]
        }
    }
    // Renvoie une valeur satisfaisant une condition
    jusquà(condition: (valeur: any) => boolean): number {
        let v: any
        do { v = this.valeur() } while (!condition(v))
        return v
    }
    // Renvoie plusieurs valeurs différentes satisfaisant une condition
    multiple_jusquà(nombre_de_valeurs: number, condition: (valeur: any) => boolean): any[] {
        let ensemble: Set<any> = new Set()
        let v: any
        do {
            v = this.valeur()
            if (condition(v) && !ensemble.has(v)) { ensemble.add(v) }
        } while (ensemble.size < nombre_de_valeurs)

        return Array.from(ensemble)
    }
    multiple(nombre_de_valeurs: number): any[] {
        return this.multiple_jusquà(nombre_de_valeurs, (valeur) => {return true})
    }
}

class Formule {
    chaine: string

    constructor(chaine: string) {
        this.chaine = chaine
    }
}

type exempleProps = 
    | { type: "nombre", valeur: number }
    | { type: "coche", valeur: boolean }
    | { type: "formule", valeur: string }
    | { type: "texte", valeur: string}

class Exercice {
    enonce: string = ""
    bonne_reponse: any = undefined
    mauvaises_reponses: any[] = []
    nombre_reponses = 5

    constructor() {}
    est_reponse_valide(valeur: any): boolean { return true }
    est_reponse_invalide(valeur: any): boolean { return false }

    qcm() {}
    vraifaux() {}

    afficher_qcm() {
        this.qcm()
        return {
            'type': 'QCM',
            'enonce': this.enonce,
            'reponse': {
                'bonne': this.bonne_reponse,
                'mauvaises': this.mauvaises_reponses
            }
        }
    }
    afficher_vraifaux() {
        this.vraifaux()
        return {
            'type': 'VraiFaux',
            'enonce': this.enonce,
            'reponse': this.bonne_reponse
        }
    }

    exemple_unitaire(): exempleProps[] {
        throw new Error("Not implemented")
    }
}

class Lettre extends Parmi {
    constructor() {
        super([
            'A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z'
        ])
    }
}

export {Exercice, Nombre, Parmi, Lettre, Formule}
export type { exempleProps }