import { ColorChoice } from "./Paints.js"



export const CarsRus = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class ="customChoices">
        <h2>Paints</h2>
        <section class="paints">
        ${ColorChoice()}
        </section>

        <article class =""></article>
        <h2></h2>
        <section class=""></section>

        <article class =""></article>
        <h2></h2>
        <section class=""></section>

        <article class =""></article>
        <h2></h2>
        <section class=""></section>
    </article>
    `
}