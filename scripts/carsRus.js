import { InteriorChoice } from "./Interiors.js"
import { ColorChoice } from "./Paints.js"
import { TechChoice } from "./Technologies.js"
import { WheelChoice } from "./Wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

//when customer clicks "Create custom order button," we need to store their choices permanently. Use customOrder state and addCustomOrder to click event
document.addEventListener(
    "click",
    (event) => {
        const itemclicked = event.target
        if (itemclicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

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

    <article>
            <button id="orderButton">Place Car Order</button>
    </article>

    
    <article class="makeOrder">
        <h2>Custom Car Orders</h2>
        ${Orders()}            
    </article>
        `
}