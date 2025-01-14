import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['', 'watsonfourpence', true], 
  ['263789622747', 'WATSON-XD', true], 
  ['', 'WATSON-XD', true],
  ['263781330745', 'WATSON-XD', true] ]

 //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['263', '263781330745', '263789622747','263789622747'] 
global.prems = ['263781330745','263789622747','']
global.allowed = ['263781330745', '263781330745','263781330745']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '✨️ 𝐖𝐀𝐓𝐒𝐎𝐍-𝐗𝐃-𝐁𝐎𝐓 ✨️'
global.premium = 'true'
global.packname = 'WATSON-XD' 
global.author = '263789622747' 
global.menuvid = 'https://i.imgur.com/TIi1gmb.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B\n' 
global.dygp='▢✓ Follow My channel\nhttps://chat.whatsapp.com/EvasRhIcb9L5TtKcjlFoQo\n'
global.fgsc = 'https://github.com/watson-xd3/WATSON-XD-BOT' 
global.fgyt = 'https://chat.whatsapp.com/EvasRhIcb9L5TtKcjlFoQo'
global.fgpyp = 'https://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B'
global.fglog = 'watson.jpg' 
global.thumb = fs.readFileSync('./watson.jpg')


global.wait = '*✨️ _•⊹𝑾𝑨𝑻𝑺𝑶𝑵-𝐼𝑆-𝐿𝑂𝐴𝐷𝐼𝑁𝐺٭⊹•..._*\n*▰▰▰▱▱▱▱▱✨️*'
global.rwait = '🔜'
global.dmoji = '⚡'
global.done = '☑️'
global.error = '❎' 
global.xmoji = '⤵️' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
