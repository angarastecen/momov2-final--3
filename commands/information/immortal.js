const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'immortal-rules',
    aliases: ['king'],
    description: 'about',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setAuthor(message.author.tag)
                .setTitle("About Owner")
                .addField("**DEVELOPERs**", ` 
                <@810818118322225152>`)
                .addField(`Immortal Rules DC`)
                .setImage("https://share.creavite.co/ZoiaTVpQ9NmKPt2j.gif")
                .addField(" <a:arrow:908667370338385970> **Contact** ", `[Click here to Contact Immortal](http://immortal.is-best.net)`)
              .addField(" <a:arrow:908667370338385970> **SUPPORT  SERVER**", `[Click here to join support server](https://dsc.gg/coders-cafe)`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}