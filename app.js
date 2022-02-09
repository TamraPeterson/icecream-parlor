const vessels = [{
  name: 'Waffle Cone', image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', price: 1.55, id: 1,
}, { name: 'Cake Cone', image: 'https://images.unsplash.com/photo-1597041505347-26a27f87b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80', price: 1.15, id: 2 }, { name: 'Cup', image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 1.15, id: 3 }]

const toppings = [{ name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1, id: 4 }, { name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2, id: 5 }]

const flavors = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1, id: 6 }, { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1, id: 7 }, { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2, id: 8 }]

let cart = []

let total = 0

// function drawVessels() {
//   let template = ''
//   for (let i = 0; i < vessels.length; i++) {
//     const item = vessels[i];
//     template += `
//   <div class="menu-item col-6 col-sm-3 selectable" onclick="addToCart('${item.name}')">
//               <img class="item-img img-fluid rounded-top"
//                 src="${item.image}"
//                 alt="waffle-cone">
//               <div class="d-flex justify-content-between bg-white text-primary p-3 rounded-bottom ">
//                 <h5>${item.name}</h5>
//                 <p>${item.price}</p>
//               </div>
//             </div>
//   `
//   }
//   document.getElementById('vessels').innerHTML = template
// }
// function drawFlavors() {
//   let template = ''
//   for (let i = 0; i < flavors.length; i++) {
//     const item = flavors[i];
//     template += `
//   <div class="menu-item col-6 col-sm-3 selectable" onclick="addToCart(${item.name})">
//               <img class="item-img img-fluid rounded-top"
//                 src="${item.image}"
//                 alt="waffle-cone">
//               <div class="d-flex justify-content-between bg-white text-primary p-3 rounded-bottom ">
//                 <h5>${item.name}</h5>
//                 <p>${item.price}</p>
//               </div>
//             </div>
//   `
//   }
//   document.getElementById('flavors').innerHTML = template
// }
// function drawToppings() {
//   let template = ''
//   for (let i = 0; i < toppings.length; i++) {
//     const item = toppings[i];
//     template += `
//   <div class="menu-item col-6 col-sm-3 selectable" onclick="addToCart(${item.name})">
//               <img class="item-img img-fluid rounded-top"
//                 src="${item.image}"
//                 alt="waffle-cone">
//               <div class="d-flex justify-content-between bg-white text-primary p-3 rounded-bottom ">
//                 <h5>${item.name}</h5>
//                 <p>${item.price}</p>
//               </div>
//             </div>
//   `
//   }
//   document.getElementById('toppings').innerHTML = template
// }

function draw(arr, id) {
  let template = ''
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    template += `
  <div class="menu-item col-6 col-sm-3 selectable" onclick="addToCart('${item.id}')">
              <img class="item-img img-fluid rounded-top"
                src="${item.image}"
                alt="waffle-cone">
              <div class="d-flex justify-content-between bg-white text-primary p-3 rounded-bottom ">
                <h5>${item.name}</h5>
                <p>${item.price}</p>
              </div>
            </div>
  `
  }
  document.getElementById(id).innerHTML = template
}

function drawCart() {
  let startTotal = 0
  let template = ''
  cart.forEach(item => {
    startTotal += item.price
    template += `
    <div class="col-12 d-flex">
    </div>
  </div>
  <div>
    <h5>1 ${item.name}</h5>
    <p>$${item.price}</p>
  </div>
    `
  })
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerText = total
}

function addToCart(productId) {
  console.log("it works")
  console.log(productId)
  let allItems = [...vessels, ...toppings, ...flavors]
  let chosenItem = allItems.find(item => item.id == productId)
  console.log(chosenItem)
  cart.push(chosenItem)
  console.log(cart)
  total += chosenItem.price
  drawCart()
}

// drawVessels()
// drawFlavors()
// drawToppings()
draw(toppings, 'toppings')
draw(flavors, 'flavors')

draw(vessels, 'vessels')
drawCart()