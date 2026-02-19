let a = 800;
let parent = document.querySelector(".container");

const dFrag = document.createDocumentFragment();

for (let i = 0; i < a; i++) {
    let d = document.createElement("div");
    d.className = "square";
    dFrag.appendChild(d);
}

parent.appendChild(dFrag);

