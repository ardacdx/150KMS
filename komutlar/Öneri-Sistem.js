const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(` | Öneri Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1052282677597831250/1055913909862797392/standard_26.gif"
    )
    .setDescription(
      `Ⓜ️ Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__ÖneriLog Ayarla__**`,
      `🔸 \`${prefix}önerilog ayarla\` \n Discord Sunucuza Öneri Log Kanal Ayarlarsınız.`,
      true
    )
    .addField(
      `**__ÖneriLog Sıfırla__**`,
      `🔸 \`${prefix}önerilog sıfırla\` \n Discord Sunucuza Öneri Log Kanalı Sıfırlarsınız.`,
      true
    )
    .addField(
      `**__Öneri Yap__**`,
      `🔸 \`${prefix}öneri-yap\` \n Discord Sunucuza Ayarladınız Öneri Loga Mesaj Atar.`,
      true
    )
    .addField(
      `**__Shadow Sunucuya Özel Öneri__**`,
      `<a:green:822530401301954632> \`${prefix}öneri\` \n Discord Sunucumuza Bota Veya MCSunucumuza Öneri Yapabilirsiniz..`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `⚜️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚜️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ⚜️ \`${prefix}iletişim\` | QualitySel İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "öneri-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
