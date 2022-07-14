import { getWheels } from "./database.js";

const wheels = getWheels()

//function that will build html string displaying a dropdown menu with all color choices
export const WheelChoice = () => {
    let html = "<select id="wheels">"
    //start html for dropdown

    const listWheels = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheels}</option>` //build the html for the drop-down box
    })

    html += listColors.join("")
    html += "</select>" //closing tag

    return html

}