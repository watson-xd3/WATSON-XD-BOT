let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Goodbye im going with my owner, ! 👋😃', m.chat,fkontak) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler
