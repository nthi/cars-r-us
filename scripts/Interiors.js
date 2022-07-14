import { getInteriors } from "./database.js";

const interiors = getInteriors()

//function that will build html string displaying a dropdown menu with all color choices
export const InteriorChoice = () => {
    let html = "<select id="interiorFabric">"
    //start html for dropdown

    const listInteriors = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.interior}</option>` //build the html for the drop-down box
    })

    html += listInteriors.join("")
    html += "</select>" //closing tag

    return html

}