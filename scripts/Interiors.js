import { getInteriors, setInterior } from "./database.js";

//event listener
//this event listener hears the tech choice and sets the tech value in the orderBuilder
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

const interiors = getInteriors()
//generate <select> element with child <option> as html rep of each object. I'm using .map, but we could use for/of loop or one string
//add event listener that reacts to the customer choosing an option
//when option is chosen, use window.alert to display message that says which option was chosen
//function that will build html string displaying a dropdown menu with all color choices
export const InteriorChoice = () => {
    let html = `<h2>Interior</h2>`
    
    html += `<select id="fabric">`
    html += `<option value="0">Select interior style</option>`
    //start html for dropdown

    const listInteriors = interiors.map( (interior) => {
        return `<option name="interior" value="${interior.id}">${interior.interior}</option>` //build the html for the drop-down box
    })

    html += listInteriors.join("")
    html += "</select>" //closing tag

    return html

}
