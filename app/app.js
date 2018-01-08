let game = document.getElementsByClassName("game");
let selected = document.getElementById("selected");
let collection = [];

function random() {
    let list = document.getElementById("games-collection");
    console.log(list.children, list.childNodes);

    list.childNodes.forEach(node => {
        console.log(node);
        if (node.className.includes("random")) {
            node.classList.remove("random");
        }
    });

    const l = collection.length;
    let li = document.getElementById(
        collection[Math.ceil(Math.random() * l) - 1]
    );

    li.className += " random";
}

function remove(e) {
    const name = e.path[1].id;
    const imgs = document.getElementsByClassName("game");
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].name === name) {
            imgs[i].style.opacity = 0.6;
        }
    }
    collection.splice(collection.indexOf(e.path[1].id), 1);
    e.path[1].remove();
}

function updateCollection() {
    var ul = document.createElement("UL"); // Create a <ul> node
    ul.className = "list-group";
    ul.id = "games-collection";

    selected.innerHTML = "";

    collection.forEach(el => {
        var textnode = document.createTextNode(el); // Create a text node
        var span = document.createElement("span"); // Create a text node
        span.appendChild(document.createTextNode("X"));
        span.style.float = "right";
        span.className = "remove";
        span.addEventListener("click", e => remove(e));
        var li = document.createElement("LI"); // Create a <li> node
        li.className = "list-group-item";
        li.id = el;
        li.appendChild(textnode); // Append the text to <li>
        li.appendChild(span);
        ul.appendChild(li); // Append <li> to the <ul>
    });

    selected.appendChild(ul); // Append <li> to <ul> with id="myList"
}

function newGame() {
    const input = document.getElementById("new-game").value;
    if (!input || collection.includes(input)) return;

    collection.push(input);
    updateCollection();
}

function add(game) {
    console.log(game);
    if (!collection.includes(game.name)) {
        collection.push(game.name);
        game.style.opacity = 1;
    } else {
        collection.splice(collection.indexOf(game.name), 1);
        game.style.opacity = 0.6;
    }

    updateCollection();
}

for (let i = 0; i < game.length; i++) {
    game[i].addEventListener("click", e => add(game[i]));
}