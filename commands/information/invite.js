const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: '',
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
             
                .setTitle("Invite & Support Link!")
                .setDescription( ` <@${message.author.id}> Support me by inviting me.It means a lot to the developers and us `)
                .addField("**Invite Link**[admin]", `[Click here to invite me](https://dsc.gg/momoyao)`)
                .addField("**Invite Link**[not admin]", `[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=909739821491183626&permissions=527821910&scope=bot)`)
                .addField("**DEVELOPER**", ` <@810818118322225152>,<@841901577811001367> `)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}
// let me fix it
//set author
//Support me by inviting me.It means a lot to the developers and us
