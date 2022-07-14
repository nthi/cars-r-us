import { getWheels } from "./database.js";

const wheels = getWheels()

//function that will build html string displaying a dropdown menu with all color choices
export const WheelChoice = () => {
    let html = `<h2>Wheels</h2>`
    html += `<select id="wheels">`
    html += `<option value="0">Select a technology package</option>`
    //start html for dropdown

    const listWheels = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheels}</option>` //build the html for the drop-down box
    })

    html += listWheels.join("")
    html += "</select>" //closing tag

    return html

}