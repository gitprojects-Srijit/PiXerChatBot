const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".toggler");
const chatbotClose = document.querySelector(".close-Btn");
const initialHeight = chatInput.scrollHeight;
let userMassage;

const createChatLi = (message, classname) => {
    //Create a chat element name "li" with passed message and classname
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", classname);
    let content = classname === "outgoing" ? `<p></p>` : `<span class="material"><img src="robot.svg" width="26px" height="32px"></span><p></p>`;
    chatLi.innerHTML = content;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChat) => {
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCNHIfeHTLQihfDSGqlSvGUwbqLi_5TsZY";
    const msgElement = incomingChat.querySelector("p");

    const requestOptions = {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{ "parts": [{ "text": userMassage }] }]
        })
    }

    // send post api to fetch
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data);
        msgElement.textContent = data.candidates[0].content.parts[0].text;
    }).catch((error) => {
        msgElement.classList.add("error");
        msgElement.textContent = "Opps! Something went wrong. Please write proper message to understand....";
    }).finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));
}

const sendChat = () => {
    //trime text from textarea box and display it
    userMassage = chatInput.value.trim();
    console.log(userMassage);
    if (!userMassage) return;
    chatInput.value = "";
    chatInput.style.height = `${initialHeight}px`;

    //Append user message to the chatbox
    chatBox.appendChild(createChatLi(userMassage, "outgoing"));
    chatBox.scrollTo(0, chatBox.scrollHeight);

    setTimeout(() => {
        const incomingChat = createChatLi("........", "incoming");
        chatBox.appendChild(incomingChat);
        chatBox.scrollTo(0, chatBox.scrollHeight);
        generateResponse(incomingChat);
    }, 600);
}

chatInput.addEventListener("input", () => {
    //adjust height for input textarea based on the content
    chatInput.style.height = `${initialHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    //press enter key for sending the message without clicking send icon
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        sendChat();
    }
});

sendBtn.addEventListener("click", sendChat);
chatbotClose.addEventListener("click", () => document.body.classList.remove("show-bot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-bot"));
