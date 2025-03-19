import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS || "263789622747;WATSON-XD;263781330745;OWNER1"


const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//global.pairingNumber = "" //put your bot number here

global.mods = ['263789622747', '32460248586']
global.prems = ['263789622747', '32460248586', '263781330745']
global.allowed = ['263789622747', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
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
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = 'WATSON-XD-BOT'
global.premium = 'true'
global.packname = 'WATSON-XD-BOT'
global.author = 'ᴡᴀᴛꜱᴏɴ-x-ʙᴏᴛ'
global.menuvid = 'https://i.imgur.com/TIJROx9.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.\n'
global.dygp = 'https://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B'
global.fgsc = 'https://github.com/watson-xd3/WATSON-XD-BOT'
global.fgyt = 'https://youtube.com/@'
global.fgpyp = 'https://youtube.com/@WATSON_TECH'
global.fglog = 'https://i.imgur.com/myXRKWl.jpeg'
global.thumb = fs.readFileSync('./Assets/Watsonlogo.jpg')

global.wait = '*✨️ _•⊹𝑾𝑨𝑻𝑺𝑶𝑵-𝐼𝑆-𝐿𝑂𝐴𝐷𝐼𝑁𝐺٭⊹•..._*\n*▰▰▰▱▱▱▱▱✨️*'
global.rwait = '🔜'
global.dmoji = '⚡'
global.done = '☑️'
global.error = '❎' 
global.xmoji = '⤵️' 

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
