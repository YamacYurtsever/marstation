var orders = {};
var orderNames = {};
var priceTotal = 0;

function addOrder(div) {
	let name = div.querySelector(".name").innerText;
	let nameReformed = name.replace(/ /g, "").toLowerCase();
	orderNames[nameReformed] = name;
	let price = parseInt(div.querySelector("span").innerText);
	priceTotal += price;
	if (nameReformed in orders) orders[nameReformed] += 1;
	else orders[nameReformed] = 1;
	displayOrders();
}

function displayOrders() {
	//Clean Order
	let order = document.querySelector("#order");
	order.innerHTML = "";

	//Add Order Title
	let ordersTitle = document.createElement("p");
	ordersTitle.textContent = "Orders: ";
	order.appendChild(ordersTitle);

	//List Each Order
	for (let meal in orders) {
		let newMeal = document.createElement("p");
		newMeal.textContent = `${orders[meal]}x ${orderNames[meal]}`;
		order.appendChild(newMeal);
	}

	//Show Price
	let linebreak = document.createElement("br");
	order.appendChild(linebreak);
	let price = document.createElement("p");
	price.textContent = "Total Price: " + priceTotal + "$";
	order.appendChild(price);
}

function placeOrder() {
	if (Object.keys(orders).length == 0) {
		alert("You haven't added any orders yet!");
	} else {
		alert("Your order has been placed!");
		for (let key in orders) {
			delete orders[key];
			delete orderNames[key];
		}
	}

	let order = document.querySelector("#order");
	order.innerHTML = "";

	priceTotal = 0;
}
