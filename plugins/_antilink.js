const isLinkHttp = /chat.whatsapp.com|wa.me/i;
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;
    let chat = global.db.data.chats[m.chat];
    let name = conn.getName(m.sender);
    const isAntiLinkHttp = isLinkHttp.test(m.text);
    if (chat.antiLink && isAntiLinkHttp) {
    
m.reply(!isAdmin ? '*❗ kamu terdeteksi mengirim link grup lain*\n*maaf pesan kamu akan di hapus karena admin mengaktifkan mode anti link*' : '*📣 kamu admin, kamu berkuasa*')

        if (isBotAdmin && chat.antiLink&& !isAdmin) {        
          await conn.sendMessage(m.chat, { delete: m.key })
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Yahaha, Moga Harimu Suram!')      
        }
    }
    return !0;
}