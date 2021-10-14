
const form = document.querySelector("#form-todo");
const input = document.querySelector(".input");
const edit = document.querySelector(".edit");
const trash = document.querySelector(".trash");
const ul = document.querySelector(".todo-list");



form.addEventListener("submit", function(e) {
    // create element list todo
    const paragraph = document.createElement("li");

    //create element todo
    const text = document.createElement("input");
    text.type = "text";
    text.classList.add("todo");
    text.value = input.value;
    
    // create element edit
    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = '<i class="lar la-edit"></i>';

    //create element delete
    const trash = document.createElement("button");
    trash.classList.add("trash");    
    trash.innerHTML = '<i class="las la-trash"></i>';
   

    // check user input value for input todo
    if(input.value === ""){
        alert("please enter your content");
    }
    else{
        ul.appendChild(paragraph);
    }

    // create wrap todolist
    paragraph.appendChild(text);
    paragraph.appendChild(edit);
    paragraph.appendChild(trash);

 
    // listen click delete todo
    trash.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    })


    // listen click edit todo
    text.disabled = "disabled";
    edit.addEventListener('click', function() {
        text.disabled = !text.disabled;
        text.classList.add("style");
        text.classList.remove("hidestyle");
    })

    text.addEventListener("blur", function() {
        text.classList.add("hidestyle");
        text.disabled = !text.disabled;
    })

    // listen click line-through todo
    paragraph.addEventListener("click", function(e) {
            if(text.disabled){
                e.target.classList.toggle("line-through");
            }
    })
 
    // reset value
    input.value = "";

    // prevent submit
    e.preventDefault();

})





input.addEventListener("keyup", function(e) {
    const userEnterValue = input.value
})