// Module for Menu tab
export function populateMenu(){
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';


    let menuHeader = document.createElement("h1");
    menuHeader.classList = "menuHeader";
    menuHeader.textContent = "Our Menu";
    contentDiv.appendChild(menuHeader);

    let menuDiv = document.createElement("div");
    menuDiv.classList = "menuDiv";
    contentDiv.appendChild(menuDiv);

    addMenu(menuDiv,"Braised Beef Ramen","15.00");
    addMenu(menuDiv,"Beef Ramen","12.00");
    addMenu(menuDiv,"Dry Mee Tarik","13.00");
    addMenu(menuDiv,"Chicken Dumpling","10.00");
}

function addMenu(addInto,food,price){
    let foodDiv = document.createElement("div");
    let foodSpan = document.createElement("span");
    let priceSpan = document.createElement("span");
    foodSpan.textContent = food;
    priceSpan.textContent = price;

    foodDiv.appendChild(foodSpan);
    foodDiv.appendChild(priceSpan);

    addInto.appendChild(foodDiv);
}
