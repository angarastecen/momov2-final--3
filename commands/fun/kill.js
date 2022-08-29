//https://cdn.myanimelist.net/s/common/uploaded_files/1459480838-8ea8a9d1f61eda18186bbf659f8e4162.gif
const discord = require("discord.js");
const random = require("easyfunjs").Img

module.exports = {
     name: "kill",
        aliases: [""],
        description: "kill someone",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    


    if(!target){
      return message.reply("Who Will U kill")
    }
    
    let embed = new discord.MessageEmbed()
    .setImage('https://cdn.myanimelist.net/s/common/uploaded_files/1459480838-8ea8a9d1f61eda18186bbf659f8e4162.gif')
    .setColor("RANDOM")
    .setFooter(`${message.author.username} kills ${target.user.username} with a gun BANG!`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};