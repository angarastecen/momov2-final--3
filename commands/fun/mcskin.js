const Discord = require('discord.js')

module.exports = {
  name: "mcskin",
  aliases: ["mc","skin"],
  usage: "mcskin",

  description: "Minecraft skin",
  run: async (client, message, args) => { // update to ur command handler
    const username = args[0];
    if(!args[0]) return message.reply(`Please enter a minecraft user!`)
    const embed = new Discord.MessageEmbed()
    .setTitle('Minecraft Skin')
    .setImage(`https://minotar.net/body/${username}/100.png`)
    .setColor('2F3136')
    .setTimestamp()
    message.channel.send(embed)
    message.react("<a:minecraft:910125126656356352>")
  }
}