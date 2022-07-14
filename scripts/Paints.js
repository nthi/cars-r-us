import { getColors, setColor } from "./database.js";

//event listener
//this event listener hears the tech choice and sets the tech value in the orderBuilder
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setColor(parseInt(event.target.value))
        }
    }
)

const colors = getColors()
//generate <select> element with child <option> as html rep of each object. I'm using .map, but we could use for/of loop or one string
//add event listener that reacts to the customer choosing an option
//when option is chosen, use window.alert to display message that says which option was chosen
//function that will build html string displaying a dropdown menu with all color choices
export const ColorChoice = () => {
    let html = `<h2>Paints</h2>`
    //start html for dropdown
    html += `<select id="paintColor">`
    html += `<option value="0">Select a color</option>`

    const listColors = colors.map( (color) => {
        return `<option name="paint" value="${color.id}">${color.color}</option>` //build the html for the drop-down box
    })

    html += listColors.join("")
    html += `</select>` //closing tag

    return html

}

