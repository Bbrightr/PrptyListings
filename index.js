import placeholderPropertyObj from "properties/propertyForSaleArr"
// import propertyForSaleArr from "properties/placeholderPropertyObj"

console.log(propertyForSaleArr)
// console.log(placeholderPropertyObj)

function getPropertyHtml(properties) {
    return properties.map(property => {
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image,
        } = property

        const totalRoom = roomsM2.reduce((total, currentElement)=> total + currentElement)

        return `<section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalRoom} m&sup2;</h3>
                </div>
            </section> `
    })
    
    }
    
    document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)