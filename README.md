# PiXerChatBot

This is a responsive chatbot <b>"PiXerChatBot"</b> using HTML, CSS, and JavaScript, integrated with the Gemini API for AI-driven responses. Users can interact with the chatbot by typing messages. The chatbot processes these messages using JavaScript and sends them to the Gemini API. The AI-generated response is then displayed dynamically on the chat interface. The chatbot is designed to deliver seamless, real-time interaction across various devices, ensuring accessibility and a smooth user experience.

<h4>The live preview is here. Go and check out---</h4>
<a href="https://my-personal-pixerchatbot.netlify.app/">https://my-personal-pixerchatbot.netlify.app/</a>

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

<h3><u>Frontend Technologies:</u></h3>
<h4>HTML:</h4> Used to structure the chatbot interface.
<h4>CSS:</h4> Applied for responsive design, ensuring the chatbot adapts well to different screen sizes and devices.
<h4>JavaScript:</h4> Handles the interactive elements, message sending/receiving, and dynamic updates within the chat interface.
</br>
<h3><u>Gemini API Integration:</u></h3>
The Gemini API key is used to power the AI capabilities of the chatbot, allowing it to process user inputs and deliver intelligent, context-aware responses in real time.
</br>
<h3><u>Responsive Design:</u></h3>
The chatbot is fully responsive, meaning it can scale and adjust its layout seamlessly to work on mobile, tablet, and desktop platforms without losing functionality or ease of use.

## Features

- Responsive design
- Pop up toggle
- Live previews
- Real-time AI responses
- User-friendly experience
- Cross platform 

## Preview image

![Screenshot 2024-09-11 002518](https://github.com/user-attachments/assets/748f2f53-4b2b-4f0a-883a-62c5b06a02a5)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |
