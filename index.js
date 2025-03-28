import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
console.log(propertyForSaleArr)

function getPropertyHtml(properties) {
    
    if (properties === 0){
        return `<p>There are no properties listed here</p>`
    } else {

        const houseListing = properties.map(function(property){
            const totalSize = property.roomsM2.reduce(function(total, currentValue = 0){
                return total + currentValue
            })

            return `  <section class="card">
                    <img src="/images/${property.image}">
                    <div class="card-right">
                        <h2>${property.propertyLocation}</h2>
                        <h3>${property.priceGBP} GBP</h3>
                        <p>${property.comment}</p>
                        <h3>${totalSize} m&sup2;</h3>
                    </div>
                </section>   `
        } ,0).join(' ')

        return houseListing
    }
    }
    
    document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)