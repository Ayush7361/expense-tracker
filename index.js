const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const totalText = document.getElementById("total");

let total = 0;

document.getElementById("add").onclick = function () {

    if (desc.value === "" || amount.value === "") return;

    const value = Number(amount.value);
    total += value;

    totalText.textContent = total;

    // create list item
    const li = document.createElement("li");
    li.textContent = `${desc.value} — ₹${value}`;

    // delete button
    const del = document.createElement("button");
    del.textContent = "X";

    del.onclick = function () {
        total -= value;
        totalText.textContent = total;
        li.remove();
    };

    li.appendChild(del);
    list.appendChild(li);

    desc.value = "";
    amount.value = "";
};