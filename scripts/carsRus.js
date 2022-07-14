import { InteriorChoice } from "./Interiors.js"
import { ColorChoice } from "./Paints.js"
import { TechChoice } from "./Technologies.js"
import { WheelChoice } from "./Wheels.js"



export const CarsRus = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class="customChoices">
        <section class="paintOption">
            ${ColorChoice()}
        </section>

        <section class="interiorOption">
            ${InteriorChoice()}
        </section>

        <section class="wheelOption">
            ${WheelChoice()}

        </section>

        <section class="technologyOption">
            ${TechChoice()}

        </section>

    </article>
    `
}