// function to change message on button click Yes
function messageIfYes() {
    let messageBox = document.querySelector('.container');
    messageBox.innerHTML =
        `<div class="messages">
            <p>Brilliant! what should I call You?</p>
        </div>
        <div class="form-container">
            <form id="login-form" method="POST" action="login/">
                <input id="username" type="text" name="username" placeholder="Username..." required><br>
                <div class="button-container">
                    <button onclick="checkUserName(event)" id="play-yes" type="submit">Play Game</button>
                </div>
            </form>
        </div>`;
}

// function to change message on button click No
function messageIfNo() {
    let messageBox = document.querySelector('.container');
    messageBox.innerHTML =
        `<div class="messages">
            <p>If you still want to play click on the button below to play </p>
        </div>
        <div class="button-container">
            <button onclick="messageIfYes();" id="play-yes">Play Game</button>
        </div>`;
}
// function for game selcetion messages and buttons
function gameSelect() {
    let username = document.getElementById('username').value;
    let secondMessageBox = document.querySelector('.container');
    secondMessageBox.innerHTML =
        `<div class="messages">
            <p>Welcome <span id="username-text">${username} </span> Select any of the buttons below to set difficulty level</p>
        </div>
        <div class="button-container">
            <a href="../sixteen.html"><button>16 Cards</button></a>
            <a href="thirtysix.html"> <button>36 Cards</button></a>
        </div>`;
}
// user ID check duplicate function
function checkUserName(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    console.log(username);
    if (usernameBase.includes(`${username}`)) {
        alert(`This Username ${username} has been taken`);
    } else {
        usernameBase.push(`${username}`);
        gameSelect()
    }
    return username.value
}
let usernameBase = ['Harry'];

let choiceYes = document.getElementById('play-yes');
choiceYes.addEventListener('click', messageIfYes);
let choiceNo = document.getElementById('play-no')
choiceNo.addEventListener('click', messageIfNo);