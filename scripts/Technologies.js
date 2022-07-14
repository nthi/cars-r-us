import { getTechPack, setTech } from "./database.js";

//event listener
//this event listener hears the tech choice and sets the tech value in the orderBuilder
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

const techs = getTechPack()
//generate <select> element with child <option> as html rep of each object. I'm using .map, but we could use for/of loop or one string
//add event listener that reacts to the customer choosing an option
//when option is chosen, use window.alert to display message that says which option was chosen
//function that will build html string displaying a dropdown menu with all color choices
export const TechChoice = () => {
    let html = `<h2>Technologies</h2>`

    //start html for dropdown
    html += `<select id="tech">`
    html +=`<option value ="0">Select a technology package</option>`

    const listTechPacks = techs.map( (tech) => {
        return `<option name="tech" value="${tech.id}">${tech.tech}</option>` //build the html for the drop-down box
        }
    )

    html += listTechPacks.join("")
    html += "</select>" //closing tag

    return html

}

