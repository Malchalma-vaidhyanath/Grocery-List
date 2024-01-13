let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

let groceryItems = ["Milk", "Chocolate", "vegetables", "peanut Butter"];
for (let groceryItem of groceryItems) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listContainerEl.appendChild(listItemEl);
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "myCheckbox";
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "myCheckbox");
labelEl.textContent = "Need Home Delivery";
labelEl.classList.add("delivery-text");
bgContainerEl.appendChild(labelEl);

let brEl = document.createElement("br");
bgContainerEl.appendChild(brEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed to pay";
bgContainerEl.appendChild(buttonEl);