/*
𝙆𝙮𝙯𝙍𝙮𝙯𝙯 𝙓𝘿
𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
𝘸𝘢: wa.me/6287815560235
𝘵𝘦𝘭𝘦: t.me/kyzoffc
𝘸𝘦𝘣: s.id/kyzzxd
🚨Di Larang Menghapus Wm Ini🚨
*/

//import { bold } from "chalk"
let handler = async (m, { conn, text }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
       } catch (e) {
    m.reply(`Error`)
  }
}
handler.help = ['creategroup']
handler.tags = ['owner']
handler.command = /^((create|buat)(gc|grup|group))$/

handler.premium = true
export default handler