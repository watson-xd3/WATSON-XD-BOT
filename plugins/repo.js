const {
    cmd,
    commands
} = require('../command')

cmd({
        pattern: "repo",
        desc: "repo the bot",
        category: "main",
        react: "📡",
        filename: __filename
    },

    async (conn, mek, m, {
        from,
        quoted,
        body,
        isCmd,
        command,
        args,
        q,
        isGroup,
        sender,
        senderNumber,
        botNumber2,
        botNumber,
        pushname,
        isMe,
        isOwner,
        groupMetadata,
        groupName,
        participants,
        groupAdmins,
        isBotAdmins,
        isAdmins,
        reply
    }) => {
        try {

            let dec = `*Watson-Xd-Bot Repastitory Information*

*| ɴᴀᴍᴇ*: ᴡᴀᴛꜱᴏɴ-xᴅ-ʙᴏᴛ
*| ᴏᴡɴᴇʀ*: ᴡᴀᴛꜱᴏɴ ꜰᴏᴜʀᴘᴇɴᴄᴇ 
*| ɴᴜᴍʙᴇʀ*: 263789622747
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦ https://github.com/watson-xd3/WATSON-XD-BOT.git

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://youtube.com/@watson-official-b8u

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴀᴛꜱᴏɴ ꜰᴏᴜʀᴘᴇɴᴄᴇ
`
            await conn.sendMessage(from, {
                image: {
                    url: `https://i.imgur.com/QxeVvOc.jpeg`
                },
                caption: dec
            }, {
                quoted: mek
            });

        } catch (e) {
            console.log(e)
            reply(`${e}`)
        }
    })