<script>
    import Bloc from "../blocs/Bloc.svelte";
	import AllerXy from "../blocs/mouvement/AlleraXY.svelte";
	import Sorienter from "../blocs/mouvement/Sorienter.svelte";
	import TournerNegatif from "../blocs/mouvement/TournerNegatif.svelte";
	import TournerPositif from "../blocs/mouvement/TournerPositif.svelte";
    import Avancer from "../blocs/mouvement/Avancer.svelte";
	import Dire from "../blocs/apparence/Dire.svelte";
	import DrapeauCliqu from "../blocs/evenements/DrapeauClique.svelte";
    import TouchePresse from "../blocs/evenements/TouchePressee.svelte";
	import Repeter from "../blocs/controle/Repeter.svelte";
	import RepeterIndefiniment from "../blocs/controle/RepeterIndefiniment.svelte";
	import Addition from "../blocs/operations/Addition.svelte";
	import Soustraction from "../blocs/operations/Soustraction.svelte";
	import Multiplication from "../blocs/operations/Multiplication.svelte";
	import Division from "../blocs/operations/Division.svelte";
	import Modulo from "../blocs/operations/Modulo.svelte";
	import Aleatoire from "../blocs/operations/Aleatoire.svelte";
	import TestPlusPetitQue from "../blocs/operations/TestPlusPetitQue.svelte";
	import TestPlusGrandQue from "../blocs/operations/TestPlusGrandQue.svelte";
	import TestEgal from "../blocs/operations/TestEgal.svelte";
</script>

<div id="liste_de_blocs">
    <span>Mouvement</span>
        <AllerXy x={0} y={0} />
        <Sorienter angle={0} />
        <TournerNegatif angle={15} />
        <TournerPositif angle={15} />
        <Avancer distance={10} />
    <span>Apparence</span>
        <Dire message="Bonjour !" />
    <span>Évènements</span>
        <DrapeauCliqu />
        <TouchePresse touche="espace" />
    <span>Contrôle</span>
        <Repeter nombre={10} />
        <RepeterIndefiniment />
    <span>Opérateurs</span>
        <Addition a={0} b={0} />
        <Soustraction a={0} b={0} />
        <Multiplication a={0} b={0} />
        <Division a={0} b={0} />
        <Modulo a={0} b={0} />
        <Aleatoire a={0} b={0} />
        <TestPlusPetitQue a={0} b={0} />
        <TestPlusGrandQue a={0} b={0} />
        <TestEgal a={0} b={0} />
    <span>Variables</span>
</div>

<style>
    #liste_de_blocs {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 20%;
        background-color: lightgray;
    }
    span {
        color: black;
        font-weight: bold;
    }
</style>
