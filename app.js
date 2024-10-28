let form = document.querySelector("#form");
let mainInp = document.querySelector("#mainInp");
let genBtn = document.querySelector("#genBtn");
let ul = document.querySelector("#myUl");
    

    //  Main function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mainInp.value;
  ul.innerHTML += `  <li id="" class="myLi">
  <input onclick="todoCheak(event)" type="checkbox" name="" >
<input disabled  value="${mainInp.value}" type="text" name="" id="">
 <button onclick="deltodo(event)" id="delBtn">Delet</button>
 <button onclick="edtodo(event)" id="edBtn">Edit</button>
  <button onclick="updateTodo(event)" id="edBtn">Update</button>
 </li>

`;

  mainInp.value = "";
});
    // Delet Data
function deltodo(event) {
  // console.log(event.target.parentNode.remove());
  event.target.parentNode.remove();
}


// Edit Data
function edtodo(event) {
  
  event.target.parentNode.children[1].removeAttribute("disabled");
  event.target.parentNode.children[1].focus();
}
     //  updateTodo data
function updateTodo(event) {

  event.target.parentNode.children[1].setAttribute("disabled", "");
}


          // cheak
function todoCheak(event) {
    event.target.parentNode.children[0].checked == true
      ? (event.target.parentNode.children[1].style.textDecoration =
          "line-through")
      : (event.target.parentNode.children[1].style.textDecoration = "none"),
      event.target.parentNode.children[0].checked == true
      ? (event.target.parentNode.children[1].style.color = "red"
          )
      : (event.target.parentNode.children[1].style.color = "gray")
 
}
