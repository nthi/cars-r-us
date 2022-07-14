import { InteriorChoice } from "./Interiors.js"
import { ColorChoice } from "./Paints.js"
import { TechChoice } from "./Technologies.js"
import { WheelChoice } from "./Wheels.js"



export const CarsRus = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class ="customChoices">
        <section class="paintOption">
            <h2>Paints</h2>
            ${ColorChoice()}
        </section>

        <section class="interiorOption">
            <h2>Interiors</h2>
            ${InteriorChoice()}
        </section>

        <section class="wheelOption">
            <h2>Wheels</h2>
            ${WheelChoice()}

        </section>

        <section class="technologyOption">
            <h2>Technologies</h2>
            ${TechChoice()}

        </section>

    </article>
    `
}