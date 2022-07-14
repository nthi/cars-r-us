import { InteriorChoice } from "./Interiors.js"
import { ColorChoice } from "./Paints.js"



export const CarsRus = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class ="customChoices">
        <section class="paints">
            <h2>Paints</h2>
            ${ColorChoice()}
        </section>

        <section class="interiors">
            <h2>Interiors</h2>
            ${InteriorChoice()}
        </section>

        <section class="wheels">
            <h2>Wheels</h2>
        </section>

        <section class="technologies">
            <h2>Technologies</h2>
        </section>

    </article>
    `
}