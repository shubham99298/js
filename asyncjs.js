
setInterval( function() {    
    // document.write('hello')
}, 1000);

//print hello in 1s

// setTimeout (()=>{
//     console.log('hello');
// },3000)

//print hello once  after 3 secs   (No repitition)

let a=10;
let b=20;

console.log(a+b);

setTimeout(() => {
    console.log(a-b)
}, 3000);

console.log(a*b);

// let condition=false;
// let promise= new Promise((resolve,reject)=>{
         
//     if(condition){
//         resolve("successfully")
//     }
//     else{
//         reject("not successfully")
//     }
// })
// console.log(promise)

// promise.then((item)=>{
//     console.log(item)
// } )
// .catch((error)=>{
//     console.log(error)
// })

 
fetch('student_data.json').then((item)=>{
          return item.json();
}).then((data)=>{
    // document.write(data.products);

    for(let i of data.products){
        console.log(i.images);

        let a=document.createElement('div');
        a.setAttribute('class', 'div');
        let im=document.createElement('img');
        im.src=i.images;
        a.append(im);
        let desc=document.createElement('h5');
        data.innerHTML=i.title;
        a.append(desc);
        document.body.appendChild(a);
        console.log(a)

    }
})