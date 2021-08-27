var sizePopup = false
var cartDropdown = false

var currentAtmosphereSizeID = '39573840330929'

var productData = {
    '40117871509681': [ // autanoma S ID
        0, // qty
        ".product.autanoma-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">AUTANOMA</span><!-- 
       --><span class="type cart-content">.shirt</span><span class="cart-size">.S</span>`,
	NaN, // qty limit	
    ],
    '40117871542449': [ // autanoma M ID
        0, // qty
        ".product.autanoma-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">AUTANOMA</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.M</span>`,
	NaN, // qty limit	
    ],
    '40117871476913': [ // autanoma L ID
        0, // qty
        ".product.autanoma-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">AUTANOMA</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.L</span>`,
	NaN, // qty limit	
    ],
    '40117871575217': [ // autanoma XL ID
        0, // qty
        ".product.autanoma-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">AUTANOMA</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.XL</span>`,
	NaN, // qty limit	
    ],
    '40117871607985': [ // autanoma 2XL ID
        0, // qty
        ".product.autanoma-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">AUTANOMA</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.2XL</span>`,
	NaN, // qty limit	
    ],
    '40117871640753': [ // autanoma 3XL ID
        0, // qty
        ".product.autanoma-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">AUTANOMA</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.3XL</span>`,
	NaN, // qty limit	
    ],
    '40117872001201': [ // absoluteprecursor S ID
        0, // qty
        ".product.absoluteprecursor-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">ABSOLUTEPRECURSOR</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.S</span>`,
	NaN, // qty limit	
    ],
    '40117872033969': [ // absoluteprecursor M ID
        0, // qty
        ".product.absoluteprecursor-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">ABSOLUTEPRECURSOR</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.M</span>`,
	NaN, // qty limit	
    ],
    '40117871968433': [ // absoluteprecursor L ID
        0, // qty
        ".product.absoluteprecursor-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">ABSOLUTEPRECURSOR</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.L</span>`,
	NaN, // qty limit	
    ],
    '40117872066737': [ // absoluteprecursor XL ID
        0, // qty
        ".product.absoluteprecursor-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">ABSOLUTEPRECURSOR</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.XL</span>`,
	NaN, // qty limit	
    ],
    '40117872099505': [ // absoluteprecursor 2XL ID
        0, // qty
        ".product.absoluteprecursor-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">ABSOLUTEPRECURSOR</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.2XL</span>`,
	NaN, // qty limit	
    ],
    '40117872132273': [ // absoluteprecursor 3XL ID
        0, // qty
        ".product.absoluteprecursor-shirt .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">ABSOLUTEPRECURSOR</span><!-- 
        --><span class="type cart-content">.shirt</span><span class="cart-size">.3XL</span>`,
	NaN, // qty limit	
    ],
    '40117871739057': [ // maculanovelty ID
        0, // qty
        ".product.maculanovelty-poster .product-quantity", // qty number query
        `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">MACULANOVELTY</span><!-- 
        --><span class="type cart-content">.poster</span>`,
	NaN, // qty limit	
    ],
    '40501050966193': [ // reseurgence ID
    0, // qty
    ".product.resurgence-magazine .product-quantity",
    `<span class="colon-colon cart-content">::</span><!-- 
        --><span class="name cart-content">RESURGENCE</span><!-- 
        --><span class="type cart-content">.magazine</span>`,
    1, // qty limit
    ],
}

function selectSize(event, sizeID) {
    var chosenSize = event.target.innerHTML
    document.querySelector(productData[sizeID][1].split(" ")[0] + " .size-current").innerHTML = chosenSize
    
    refreshButtons(sizeID)
}

function changeQty(productID, upOrDown) {
    switch (upOrDown) {
        case 'down':
            productData[productID][0]--
            break;
        case 'up':
            productData[productID][0]++
            break;
    }

    refreshButtons(productID)

    var qtySum = sumProductQty()
    document.querySelector(".cart-num").innerHTML = qtySum
    if (qtySum === 0) {
        document.querySelector("#checkout-button").classList.add("unavailable")
    } else {
        document.querySelector("#checkout-button").classList.remove("unavailable")
    }
    loadCart()
}

function sumProductQty() {
    var sum = 0
    Object.values(productData).forEach(element => {
        sum += element[0]
    });
    return sum
}

function checkout() {
    var url = "https://checkout.surrealutopia.com/cart/"
    Object.keys(productData).forEach(key => {
        if (productData[key][0] === 0) {
            return
        }
        url += key + ":" + productData[key][0] + ","
    })
    url += '?channel=buy_button'
    window.open(url)
}

function toggleSizePopup(event, productName) {
    if (!event.target.classList.contains("size-current") && !event.target.classList.contains("size-button") && !sizePopup) {
        return 0
    }
    if (sizePopup === false) {
        sizePopup = true
        document.querySelector(".product." + productName + " .size-selector").classList.add("open")
    } else {
        sizePopup = false
        document.querySelectorAll(".size-selector").forEach(i => {
            i.classList.remove("open")
        })
    }
}

function openQtyLimitPopup(productID) {
    let plusButton = document.querySelector(productData[productID][1]).nextElementSibling
    console.log("testing");
    if (!plusButton.classList.contains("open") && plusButton.classList.contains("unavailable")) {
        plusButton.classList.add("open")

        setTimeout(() => {
            plusButton.classList.remove("open");
        }, 3000);
    }
}

function toggleCartDropdown(event) {
    if (!event.target.classList.contains("cart-icon")
     && !event.target.classList.contains("fil0")
     && !event.target.classList.contains("cart-button")
     && !event.target.classList.contains("cart-button-inner")
     && !event.target.classList.contains("cart-num")
     && !cartDropdown) {
        return
    }
    if (event.target.classList.contains("cart-content")
    && cartDropdown) {
        return
    }
    if (cartDropdown === false) {
        cartDropdown = true
        document.querySelector(".cart-dropdown").classList.add("open")
    } else {
        cartDropdown = false
        document.querySelector(".cart-dropdown").classList.remove("open")
    }
    loadCart()
}

function clearCart() {
    Object.keys(productData).forEach(key => {
        productData[key][0] = 0
        refreshButtons(key)
    })

    var qtySum = sumProductQty()
    document.querySelector(".cart-num").innerHTML = qtySum
    if (qtySum === 0) {
        document.querySelector("#checkout-button").classList.add("unavailable")
    } else {
        document.querySelector("#checkout-button").classList.remove("unavailable")
    }

    document.querySelectorAll(".product-quantity").forEach(element => {
        element.innerHTML = 0
    })
    loadCart()
}

function loadCart() {
    document.querySelector('.cart-entries').innerHTML = ''

    var isEverythingZero = true

    document.querySelector('.cart-dropdown > div').innerHTML = /*html*/`
        <div class="cart-entries cart-content">
        </div>
        <div class="cart-clear cart-content" onclick="clearCart()">
            <div class="cart-clear-button cart-content">
                <div class="cart-content">
                    clear cart
                </div>
            </div>
        </div>
    `

    Object.keys(productData).forEach(key => {
        if (productData[key][0] === 0) {
            return
        } else {
            isEverythingZero = false
        }
        document.querySelector('.cart-entries').innerHTML += /*html*/`
            <div class="cart-dropdown-entry cart-content">
                <div class="entry-title cart-content">`
                +
                productData[key][2] // html for product title
                +
                /*html*/`</div>
                <div class="cart-dots cart-content">
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
                    . . . . . . . . . . . .
                </div>
                <div class="entry-quantity cart-content">`
                +
                productData[key][0]
                +
                /*html*/`</div>
            </div>
        `
    })
    if (isEverythingZero) {
        document.querySelector('.cart-dropdown > div').innerHTML = /*html*/`
            <div class="cart-entries cart-content">
            There are no items in your cart.
            </div>
            <div class="cart-clear cart-content" onclick="clearCart()">
                
            </div>
        `
    }
}

function refreshButtons(productID) {
    let minusButton = document.querySelector(productData[productID][1]).previousElementSibling;
    let plusButton = document.querySelector(productData[productID][1]).nextElementSibling;
    
    // if there are 0 items, disable minus button
    if (productData[productID][0] === 0) {
        minusButton.classList.add("unavailable")
        minusButton.setAttribute("onclick", "")
    } else {
        minusButton.classList.remove("unavailable")
        minusButton.setAttribute("onclick", "changeQty(" + productID + ", 'down')")
    }

    // if quantity limit is reached, disable plus button
    if (productData[productID][0] === productData[productID][3]) {
        plusButton.classList.add("unavailable")
        plusButton.setAttribute("onclick", "openQtyLimitPopup(" + productID + ")")
    } else {
        plusButton.classList.remove("unavailable")
        plusButton.setAttribute("onclick", "changeQty(" + productID + ", 'up')")
    }

    document.querySelector(productData[productID][1]).innerHTML = productData[productID][0]
}