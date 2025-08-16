/*
Base Script Bot Whatsapp By DapszzOfficial
Support Pairing Code
Script No Enc
Youtube: DapszzSamp
*/
require('./config');
const fs = require('fs');
const util = require('util')
const { exec } = require("child_process")
const axios = require("axios");


function normalizeRecipient(input) {
  if (!input) return m.reply("Recipient kosong");
  const s = String(input).trim();
  if (s.includes("@")) return s;
  if (s.startsWith("lid:")) {
    const lid = s.replace(/^lid:/, "");
    return /@/.test(lid) ? lid : `${lid}@lid`;
  }
  return `${s}@s.whatsapp.net`;
}
module.exports = async (Dapszz, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const from = m.key.remoteJid;
  const isGroup = from.endsWith("@g.us");
  const sender = m.key.fromMe ? Dapszz.user?.id : (isGroup ? m.key.participant : from);
const botNumber = await Dapszz.decodeJid(Dapszz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)

//~~~~~Fitur Case~~~~~//
switch(command) {
case "jid": {
        const info = `*Chat JID:* ${from}\n*Pengirim:* ${sender}`;
        await Dapszz.sendMessage(from, { text: info }, { quoted: m });
        break;
      }
case "ping": {
        const before = Date.now();
        await Dapszz.sendPresenceUpdate("composing", from);
        const after = Date.now();
        await Dapszz.sendMessage(from, { text: `pong! ${after - before}ms` }, { quoted: m });
        break;
      }

    
       
default:
}
} catch (err) {
console.log(util.format(err))
}
}

//~~~~~Status Diperbarui~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
