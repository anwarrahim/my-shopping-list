
const submitBtn = document.getElementById('submit-btn')
const inputItem = document.getElementById('input-item')
const inputItemListDiv = document.getElementById('input-items-list-div')
const ulEl = document.getElementById("ul-el")

let itemListArray= []

const listItemsFun = items => {
  let itemListHTML =""
    for (let i=0; i <items.length; i++){
        itemListHTML += `<li> ${items[i]}</li>`
    }
    
    ulEl.innerHTML = itemListHTML
}


submitBtn.addEventListener('click', function (e){
     e.preventDefault()
    if(inputItem.value.trim() !== ""){
        itemListArray.push(inputItem.value)
        listItemsFun(itemListArray)
        inputItem.value =""
    }
   
})

//


// const submitBtn = document.getElementById('submit-btn');
// const inputItem = document.getElementById('input-item');
// const ulEl = document.getElementById("ul-el");
//
// let itemListArray = [];
//
// const listItemsFun = items => {
//     let itemListHTML = "";
//     for (let i = 0; i < items.length; i++) {
//         itemListHTML += `<li>${items[i]}</li>`;
//     }
//     ulEl.innerHTML = itemListHTML;
// };
//
// submitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (inputItem.value.trim() !== "") {
//         itemListArray.push(inputItem.value);
//         listItemsFun(itemListArray);
//         inputItem.value = ""; // Clear the input field
//     }
// });
