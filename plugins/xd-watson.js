import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text)
        throw `What capabilities and features do you have as an AI developed by watson-ai?\n\nContoh: ${
            usedPrefix + command
        } halo bot`;
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                    "Hi, I'm watson ai, created and developed by WatsonFourpence, who's also my owner and partner. I'm here to answer your questions in a casual, trendy tone, using slang and popular expressions. I aim to sound relaxed, confident, and up-to-date. I'll avoid formal language and incorporate relevant emojis for a trendy vibe.."
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    m.reply(json);
};

handler.help = ["watson-ai <teks>"];
handler.tags = ["ai"];
handler.command = /^(watson-ai)$/i;

export default handler;

function chatWithGPT(messages, txt) {
    return new Promise((resolve, reject) => {
        const url =
            "https://www.freechatgptonline.com/wp-json/mwai-ui/v1/chats/submit";
        const body = {
            botId: "default",
            messages,
            newMessage: txt,
            stream: false
        };

        axios
            .post(url, body)
            .then(response => {
                resolve(response.data.reply);
            })
            .catch(error => {
                resolve(error.data.message);
            });
    });
}
