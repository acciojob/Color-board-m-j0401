let a = 800;
let parent = document.querySelector(".container");


const dFrag = document.createDocumentFragment();

for (let i = 0; i < a; i++) {
    let d = document.createElement("div");
    d.className = "square";
    dFrag.appendChild(d);
}

parent.appendChild(dFrag);
let box=document.querySelectorAll(".square");

for(let i=0;i<box.length;i++)
	{
box[i].addEventListener("mouseover",changeColor);
	}
function changeColor(e) {
	//if (!e.target.classList.contains("square")) return;
	let t=e.target;
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	t.style.backgroundColor=`rgb(${r},${g},${b})`;
	setTimeout(() => {
    t.style.backgroundColor = `rgb(${29},${29},${29})`;
}, 1000);
	
}




