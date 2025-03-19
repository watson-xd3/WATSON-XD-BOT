let handler = async (m, { conn, text }) => {
   if (!text) throw `Enter Text for the New Bot Bio`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, 'Watson Successfully Changed Bot Bio', m)
} catch {
       throw 'Oh theres an error bro!...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler
