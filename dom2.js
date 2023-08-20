// console.log(document.body.firstChild)

// console.log(document.body.firstElementChild);
// const arr=document.body.children;

// const newArr= Array.from(arr);
// console.log(arr)
// console.log(newArr)

// for(let i=0; i<newArr.length; i++){
//     console.log(newArr[i])
// }

const mydiv2=document.getElementById("div2");
console.log(mydiv2)

const mydiv3=document.getElementsByClassName("div3");
console.log(mydiv3[0])

const n1=document.getElementsByName("mail");
console.log(n1)

const span =document.getElementsByTagName("span")
// span[0].textContent="new one"

// span[0].innerHTML=`<span class="myclass ">nice</span>`;

span[0].style.backgroundColor="red";
span[0].style.color="yellow"

console.log(span[0])

const mybtn=document.getElementById("btn");
mybtn.style.backgroundColor="black";
mybtn.style.color="white";

// const btn=document.querySelector("#btn");
// btn.innerHTML="none"
// console.log(btn)

console.log(mybtn.getAttribute("id"));
mybtn.setAttribute("class", "jsjs")
console.log(mybtn);




function hello(){
 const h2=document.createElement("h2");
h2.innerText="Hi"
document.body.append(h2)

const mytext=document.createTextNode("sample text");
h2.append(mytext);
console.log(h2)

}




