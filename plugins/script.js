const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *WATSON FOURPENCE*

> *WATSON-XD-BOT MD REPO:*
*|* *https://github.com/watson-xd3/WATSON-XD-BOT*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363391539600226@newsletter',
      newsletterName: "Watson-Xd-Bot",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'Watson-Xd-Bot',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/watson-xd3/WATSON-XD-BOT" ,
thumbnailUrl: "https://i.imgur.com/QxeVvOc.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
