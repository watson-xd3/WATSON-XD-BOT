import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    try {
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*Result:* ${text}
*Source:* Google
`,m)
} catch (e) {
  m.reply(`Cannot find what you're looking for`)
  }
}
handler.help = ['foto', 'gimage'].map((v) => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(gimage|image|googleimage|googleimg|gimg|foto)$/i;
handler.limit = true
export default handler
