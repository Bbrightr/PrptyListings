import placeholderPropertyObj from './properties/placeholderPropertyObj.js'
import propertyForSaleArr from './properties/propertyForSaleArr.js'

// console.log(propertyForSaleArr)
// console.log(placeholderPropertyObj)


function getPropertyHtml(properties = [placeholderPropertyObj]) {
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
    }).join(' ')
    
    }
    
    document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)