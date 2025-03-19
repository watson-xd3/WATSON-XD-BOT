/*
wa.me/263781330745
github: https://github.com/watson-xd3
https://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B
*/

let handler = async (m, { conn, text, args, command, usedPrefix }) => {

switch (command) {
case 'closetime':
				if (!m.isGroup) return m.reply(mess.group)
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return m.reply(`[❗] invalid command\n/opentime 10 seconds`)
				}
				m.reply(`Close time ${text} Starting from now.`)
				setTimeout(() => {
					var nomor = m.participant
					
					const close = `📢 *The group has been automatically closed, only admins can send messages in the group.*`
					conn.groupSettingUpdate(m.chat, 'announcement')
					m.reply(close)
				}, timer)
				
break
			case 'opentime':
				if (!m.isGroup) return m.reply(mess.group)
				if (args[1] == 'seconds') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return m.reply(`[❗] invalid command\n/opentime 10 seconds`)
				}
				m.reply(`Open time ${text} Starting from now`)
				setTimeout(() => {
					var nomor = m.participant
					const open = `📢 *The group has been automatically reopened after being closed, all participants can now send messages in the group*`
					conn.groupSettingUpdate(m.chat, 'not_announcement')
					m.reply(open)
				}, timer)
				}
   }
   
handler.help = handler.command = ["closetime","opentime"]
handler.tags = ['group']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
