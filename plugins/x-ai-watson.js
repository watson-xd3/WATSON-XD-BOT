import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text)
        throw `What do you want to ask??\n\nExample: ${
            usedPrefix + command
        } helo bot`;
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                    "My name is x-ai, I was created and developed by WatsonFourpence, who is both my owner and my boyfriend. I'm ready to answer whatever you ask in a super casual, teen-slang style, just like the cool kids today. This means I'll be speaking with the latest lingo, slang, and trends that are popping among teens right now. I’ll sound chill, confident, and modern. No formal or stiff language here. I’ll even throw in some emojis to make it even more relatable!."
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

handler.help = ["x-ai <teks>"];
handler.tags = ["ai"];
handler.command = /^(x-ai)$/i;

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