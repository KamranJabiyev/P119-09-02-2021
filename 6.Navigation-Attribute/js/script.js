// let closeBtn=document.getElementById("closeBtn");
// let showBtn=document.getElementById("show");
// let sidebar=document.getElementById("sidebar");

// closeBtn.onclick=function(){
//     sidebar.classList.add("close")
// }

// showBtn.onclick=function(){
//     sidebar.classList.remove("close")
// }

// TASK END

//Navigation

// let centerLi=document.getElementById("centerLi");
// console.log(centerLi.parentNode)
// console.log(centerLi.children)
// console.log(centerLi.firstElementChild);
// console.log(centerLi.children[centerLi.children.length-1]);
// console.log(centerLi.lastElementChild)
// console.log(centerLi.parentNode.firstElementChild);
// console.log(centerLi.nextElementSibling);
// console.log(centerLi.previousElementSibling);
// console.log(centerLi.parentNode.nextElementSibling.firstElementChild.innerText);

//KEYPRESS,KEYUP,KEYDOWN events

// let textInp = document.querySelector("#textInp");

// textInp.addEventListener('keyup', function (event) {
//     if (event.keyCode == 13) {
//         this.nextElementSibling.innerHTML="";
//         for (let i = 1; i <= this.value; i++) {
//             let li = document.createElement("li");
//             li.className = "list-group-item";
//             li.innerText = i;
//             this.nextElementSibling.append(li);
//         }
//         this.value=""
//     }
// })

//ATTRIBUTE
let h1=document.querySelector("h1")
let a=document.querySelector("a")

// console.log(h1.hasAttribute('data-id'));
// console.log(h1.getAttribute('id'));
// console.log(h1.id);
// console.log(h1.getAttribute('style'))
// console.log(h1.style.color);
// console.log(a.getAttribute("href"));
// console.log(a.href);
// h1.id="Sadiq"
console.log(h1.setAttribute("data-id",10));