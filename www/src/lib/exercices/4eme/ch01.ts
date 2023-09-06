import {Exercice, Lettre, Nombre, Parmi, type exempleProps} from '$lib/exercices/types'

class Calculer_le_carre_d_un_nombre extends Exercice {
    gen: Nombre
    n: number

    constructor(gen = new Nombre(-5, 12)) {
        super()
        this.gen = gen
        this.n = this.gen.valeur()
    }
    est_reponse_valide(valeur: any): boolean {
        return (valeur == Math.pow(this.n, 2))
    }
    est_reponse_invalide(valeur: any): boolean {
        return (valeur != Math.pow(this.n, 2))
    }
    vraifaux(): void {
        this.n = this.gen.valeur()
        var x: number = new Parmi([this.n*2, Math.pow(this.n, 2), this.n+2]).valeur()
        this.enonce = `${x} est-il le carré de ${this.n} ?`
        this.bonne_reponse = this.est_reponse_valide(x)
    }
    qcm(nombre_reponses = 5): void {
        this.nombre_reponses = nombre_reponses

        this.n = this.gen.valeur()
        this.enonce = `<Katex>${this.n >= 0 ? "(" : ""}${this.n}${this.n >= 0 ? ")" : ""}^2 =</Katex>`
        this.bonne_reponse = Math.pow(this.n, 2)
        
        var propositions = new Parmi([])
        this.mauvaises_reponses = propositions.multiple_jusquà(this.nombre_reponses - 1,
                                                                this.est_reponse_invalide)
    }
    exemple_unitaire() {
        this.n = this.gen.valeur()
        var output: exempleProps[] = []

        var nombre: string = `${this.n <= 0 ? "(" : ""}${this.n}${this.n <= 0 ? ")" : ""}`

        output.push({
            type: "formule",
            valeur: nombre + `^2 = ${nombre} \\times ${nombre} = ${Math.pow(this.n, 2)}`
        })

        return output
    }
}

class Calculer_la_racine_carree_d_un_nombre extends Exercice {
    gen: Nombre
    n: number   // Le nombre dont on cherche la racine carrée

    constructor(gen = new Nombre(1, 12, 0, (nombre) => { return Math.pow(nombre, 2)} )) {
        super()
        this.gen = gen
        this.n = this.gen.valeur()
    }
    est_reponse_valide(valeur: number): boolean {
        return (valeur == Math.sqrt(this.n))
    }
    est_reponse_invalide(valeur: number): boolean {
        return (valeur != Math.sqrt(this.n))
    }
    qcm(nombre_reponses = 5): void {
        this.nombre_reponses = nombre_reponses

        this.n = this.gen.valeur()
        this.enonce = `<Katex>\\sqrt{${this.n}} = ?</Katex>`
        this.bonne_reponse = Math.sqrt(this.n)

        var propositions = new Parmi([

        ])
        this.mauvaises_reponses = propositions.multiple_jusquà(
            this.nombre_reponses - 1,
            this.est_reponse_invalide
        )
    }
    exemple_unitaire(): exempleProps[] {
        this.n = this.gen.valeur()
        
        return [{
            type: 'formule',
            valeur: `\\sqrt{${this.n}} = ${Math.sqrt(this.n)}`
        }]
    }
}

class Egalite_de_pythagore extends Exercice {
    points: string[]
    index: Nombre   // L'index du point où se situe l'angle droit (0, 1 ou 2)

    constructor() {
        super()
        this.points = new Lettre().multiple(3)
        this.index = new Nombre(0, 2)
    }
    exemple_unitaire(): exempleProps[] {
        var index = this.index.valeur()
        this.points = new Lettre().multiple(3).map((l) => { return `{\\rm ${l}}`})
        var [p1, p2, p3] = this.points
        var [c1, c2, c3] = [
            this.points[(index-1+3)%3]+this.points[(index+1+3)%3],
            this.points[index]+this.points[(index+1+3)%3],
            this.points[(index-1+3)%3]+this.points[index]
        ] // Les +3 permettent d'éviter que -1 % 3 donne -1 au lieu de 2

        return [{
            type: 'formule',
            valeur: `\\text{Si}~${p1 + p2 + p3}~\\text{est rectangle en}~` +
                    `${this.points[index]}, \\text{alors : }` +
                    `${c3}^2 + ${c2}^2 = ${c1}^2`
        }]
    }
}

export {
    Calculer_le_carre_d_un_nombre,
    Calculer_la_racine_carree_d_un_nombre,
    Egalite_de_pythagore
}