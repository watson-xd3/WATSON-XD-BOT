import fetch from 'node-fetch'

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text
  }

  try {
    m.react(rwait)
    
    conn.sendPresenceUpdate('composing', m.chat)
    const prompt = encodeURIComponent(text)

    const guru1 = `https://api.gurusensei.workers.dev/llama?prompt=${prompt}`

    try {
      let response = await fetch(guru1)
      let data = await response.json()
      let result = data.response.response

      if (!result) {
        throw new Error('No valid JSON response from the first API')
      }

      await conn.sendButton(m.chat,result, author, 'https://telegra.ph/file/35086802022652ed9a897.jpg', [['Script', `${usedPrefix}script`]], null, [['Fork Repo', `https://github.com/watson-xd3/WATSON-XD-BOT`]], m)
      m.react(done)
    } catch (error) {
      console.error('Error from the first API:', error)

      //const model = 'llama'
     // const senderNumber = m.sender.replace(/[^0-9]/g, '')
      //const session = `xlicon_bot_${senderNumber}`
      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`

      let response = await fetch(guru2)
      let data = await response.json()
      let result = data.completion

     await conn.sendButton(m.chat,result, author, 'https://telegra.ph/file/35086802022652ed9a897.jpg', [['Script', `.sc`]], null, [['Fork Repo', `https://github.com/watson-xd3/WATSON-XD-BOT`]], m)
      m.react(done)
    }
  } catch (error) {
    console.error('Error:', error)
    throw `*ERROR*`
  }
}
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['bro', 'chatgpt', 'ai', 'gpt']

export default handler
