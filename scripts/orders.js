import { getColors, getInteriors, getTechPack, getWheels, getOrders} from "./database.js";

const buildOrderListItem = (order) => {
    const colorList = getColors()
    const interiorList = getInteriors()
    const techList = getTechPack()
    const wheelList = getWheels()

    const foundColor = colorList.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInterior = interiorList.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTech = techList.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const foundWheels = wheelList.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        }
    )
    return `<li>${order.colorId} car with ${order.wheelId} wheels, ${order.interiorId} interior, and the ${order.techId} cost ${costString} and was placed on ${order.timeStamp}</li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"
    return html
}