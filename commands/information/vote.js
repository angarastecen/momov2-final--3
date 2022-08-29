const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'vote',
    aliases: ['matdan'],
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
             
                .setTitle("vote me!")
                .setDescription( ` <@${message.author.id}> Support me by voting for me.It means a lot to the developers and us `)
                .addField("**TOP.GG**", `[vote for me](https://top.gg/bot/909739821491183626/vote)`)
                .addField("**DISCORDBOTLIST.COM**", `[vote me](https://discordbotlist.com/bots/momo-yaoyorozu)`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}