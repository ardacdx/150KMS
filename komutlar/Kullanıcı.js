const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedkullanıcı = new Discord.MessageEmbed()
    .setAuthor(` | Kullanıcı`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1052282677597831250/1055913909862797392/standard_26.gif"
    )
    .setDescription(
      `🔅  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rozetler__`,
      `🔎\`${prefix}rozetler\` Discord Bot Discord Aldıgınız Rozetleri Komutla Görürsün.`,
      true
    )
    .addField(
      `__Profil__`,
      `🔎 \`${prefix}profil\` Discord Bot Size Özel Profil Ayarlar.`,
      true
    )
    .addField(
      `__Avatarım__`,
      `🔎 \`${prefix}avatar\` Discord Bot Sizin Avatarınızı Yansıtır.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `🔎 \`${prefix}botbilgi\` Discord Botumuzun İstatistiklerini Bakarsınız.`,
      true
    )
    .addField(
      `__Rol Bilgi__`,
      `🔎 \`${prefix}rolbilgi\` Etiketlediginiz Bir Rolü Bot Bilgilerini Gösterir.`,
      true
    )
    .addField(
      `__Yetkilerim__`,
      `🔎 \`${prefix}yetkilerim\` Discord Bot Size Yetkilerinizi Gösterir.`,
      true
    )
  .addField(
      `__Bilgilendirme__`,
      `✂️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ✂️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ✂️ \`${prefix}iletişim\` | QualitySel İletişim Bilgileri.`
    );
  return message.channel.send(embedkullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "kullanıcı Menüsü",
  usage: "kullanıcı"
};
