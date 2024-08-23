console.log("new web");


const iceCream = [
    { name: 'Chocolate Ice Cream', price: 4.00, quantity: 0, type: 'scoop' },
    { name: 'Vanilla', price: 3.00, quantity: 0, type: 'scoop' },
    { name: 'Strawberry', price: 4.00, quantity: 0, type: 'scoop' },
    { name: 'Sprinkles', price: 2.00, quantity: 0, type: 'topping' },
    { name: 'Chocolate', price: 3.00, quantity: 0, type: 'vessels' },
    { name: 'Gummy Worms', price: 2.00, quantity: 0, type: 'topping' },
    { name: 'Waffle Cone', price: 3.00, quantity: 0, type: 'vessels' },
    { name: 'Chocolate Cream', price: 3.00, quantity: 0, type: 'topping' },
    { name: 'Waffle Bowl', price: 4.00, quantity: 0, type: 'vessels' }
]

// function orderVanilla() {
//     console.log('ordering vanilla')
//     let vanilla = iceCream[0]
//     vanilla.quantity += 1
//     displayItem()
// }

let total = 0

function orderItem(itemName) {

    console.log('ordering', itemName);
    let itemOrder = null

    for (let i = 0; i < iceCream.length; i++) {
        let item = iceCream[i]
        if (item.name == itemName) {
            console.log('nice', item);
            itemOrder = item
        }
    }

    itemOrder.quantity += 1
    displayItem()
}

function totalOrder() {
    let total = 0
    for (let i = 0; i < iceCream.length; i++) {
        let item = iceCream[i]
        total += item.price * item.quantity
    }

    console.log('visa', total)

    return total
}

let displayContent = ''

function displayItem() {
    let displayElm = document.getElementById('cart')

    let displayContent = ''

    for (let i = 0; i < iceCream.length; i++) {
        console.log(i, iceCream.length[i]);
        let item = iceCream[i]
        console.log(`${item.name} \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  ${item.quantity}  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  $${item.price * item.quantity}`);

        if (item.quantity > 0) {
            displayContent += `<p>  ${item.name}
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${item.quantity} 
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  $${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }

    console.log(displayContent);
    displayElm.innerHTML = displayContent

    let customerTotal = totalOrder()
    console.log('pay', customerTotal);
    let totalElm = document.getElementById('total pay')
    totalElm.innerText = customerTotal.toFixed(2)
}

function payBtn() {
    displayItem()
    let clearPayBtn = ''
    console.log(clearPayBtn)
}









