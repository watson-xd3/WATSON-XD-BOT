const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "🫵",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*🤖 Watson-Xd-Bot Support Channels🤖*

*Youtube Channel Link:* https://www.youtube.com/@watson-official-b8u

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VawJnZ2Id7nFdp0NEE2u

*©𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐖𝐀𝐓𝐒𝐎𝐍 𝐗𝐃*`

return await conn.sendMessage(from,{image: {url:`https://i.imgur.com/QxeVvOc.jpeg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
