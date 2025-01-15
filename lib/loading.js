export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "ᴡᴀᴛꜱᴏɴ-ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "ᴡᴀᴛꜱᴏɴ-ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "ᴡᴀᴛꜱᴏɴ-ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "ᴡᴀᴛꜱᴏɴ-ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "ᴡᴀᴛꜱᴏɴ-ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "ᴡᴀᴛꜱᴏɴ ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
