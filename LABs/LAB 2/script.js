function applyChanges() {
    changeUserName();
    changeMessage();
    changeBackgroundColor();
}

function changeUserName() {
    let nameInput = document.getElementById("userName").value;
    let textGreeting = document.getElementById("greeting").innerHTML;
    let replaceUser = textGreeting.replace("User", nameInput);
    if (textGreeting.includes("User")) { // replaces the word "User" with user input
        document.getElementById("greeting").innerHTML = replaceUser;
    }
    else { // allows User to change name multiple times
        let newGreeting = textGreeting.replace(replaceUser, nameInput);
        document.getElementById("greeting").innerHTML = "Hello " + newGreeting + "!";
    }
}

function changeMessage() {
    let messageInput = document.getElementById("message").value;
    let newMessage = document.getElementById("paraMessage");
    newMessage.textContent = messageInput;
}


function changeBackgroundColor() {
    let selectedColor = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = selectedColor;
}

function addToDo() {
    let toDoInputItem = document.getElementById("toDoInput").value;
    let toDoList = document.getElementById("toDoList")
    let listItem = document.createElement("li");
    listItem.textContent = toDoInputItem;
    toDoList.appendChild(listItem);
}