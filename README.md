# PiXerChatBot

This is a responsive chatbot <b>"PiXerChatBot"</b> using HTML, CSS, and JavaScript, integrated with the Gemini API for AI-driven responses. Users can interact with the chatbot by typing messages. The chatbot processes these messages using JavaScript and sends them to the Gemini API. The AI-generated response is then displayed dynamically on the chat interface. The chatbot is designed to deliver seamless, real-time interaction across various devices, ensuring accessibility and a smooth user experience.

<h3>The live preview is here. Go and check out---</h3>
<a href="https://my-personal-pixerbot.netlify.app/">https://my-personal-pixerbot.netlify.app/</a>

## API Reference

#### Get all items

```http
  https://ai.google.dev/gemini-api/docs/api-key
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id (API_KEY) of item to fetch |
 

## Appendix

<h2><u>Frontend Technologies:</u></h2>
</br>
<h3>HTML:</h3> Used to structure the chatbot interface.
</br>
<h3>CSS:</h3> Applied for responsive design, ensuring the chatbot adapts well to different screen sizes and devices.
</br>
<h3>JavaScript:</h3> Handles the interactive elements, message sending/receiving, and dynamic updates within the chat interface.
</br>
<h2><u>Gemini API Integration:</u></h2>
</br>
The Gemini API key is used to power the AI capabilities of the chatbot, allowing it to process user inputs and deliver intelligent, context-aware responses in real time.
</br>
<h3><u>Responsive Design:</u></h3>
</br>
The chatbot is fully responsive, meaning it can scale and adjust its layout seamlessly to work on mobile, tablet, and desktop platforms without losing functionality or ease of use.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |
