import { getColors } from "./database.js";

const colors = getColors()

//function that will build html string displaying a dropdown menu with all color choices
export const ColorChoice = () => {
    let html = "<select id="paintColor">"
    //start html for dropdown

    const listColors = colors.map(color => {
        return `<option value="${color.id}">${color.color}</option>` //build the html for the drop-down box
    })

    html += listColors.join("")
    html += "</select>" //closing tag

    return html

}