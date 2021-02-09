// let text=document.getElementById('text');
// let pTags=document.getElementsByTagName('p');
// text.innerText="<b>P119</b>";
// console.log(text.innerText);
// text.innerHTML="<b>P119</b>"
// console.log(text.innerHTML)
// console.log(document.getElementsByClassName('test')[1].innerHTML);

// let text=document.querySelector('#text')
// text.style.color='red';
// text.style.backgroundColor='yellow'
// let pTags=document.querySelectorAll('.test')
// console.log(pTags)

// function test(){
//     alert("Salam")
// }



// addBtn.onclick=function(){
//     alert("Test")
// }



// addBtn.addEventListener('click',function(){
//     alert("Salam")
// })

// addBtn.onclick=function(){
//     alert("Sagol")
// }

// addBtn.addEventListener('click',function(){
//     alert("Sagol")
// })

//TASK

// let addBtn=document.getElementById('addBtn')
// let inputText=document.querySelector('#inputText');
// let parentLi=document.getElementById("parentLi")

// addBtn.addEventListener('click',function(){
//     if(inputText.value==''){
//         alert("Bosh buraxmayin!!!");
//         return;
//     }
//     // console.log(inputText.value)
//     let li=document.createElement('li');
//     li.className="list-group-item cursor";
//     li.innerText=inputText.value;
//     li.onclick=function(){
//         // inputText.value=this.innerText
//         this.remove()
//     }
//     parentLi.append(li);
//     // parentLi.innerHTML+=`<li class="list-group-item">${inputText.value}</li>`
//     inputText.value='';
// })

// document.getElementById("removeAll").addEventListener('click',function(){
//     parentLi.innerHTML=""
// })

let h1=document.querySelector('h1');
// h1.className='test'
// h1.classList.add("test")
// h1.classList.remove('ttt')
console.log(h1.classList.contains('asfadf'))
