// Module for Home tab
export function populateHome(){
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';

    let h1 = document.createElement("h1");
    h1.className = "homeHeader";
    h1.textContent = "Apek Mee Tarik";
    contentDiv.appendChild(h1);

    let p = document.createElement("p");
    p.className = "homeDescription";
    p.textContent = "Mee Tarik is a very delicious delicacy of the Chinese. Come and try";
    contentDiv.appendChild(p);
}

