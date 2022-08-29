const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'partner',
    aliases: ['family'],
    description: 'my partners',
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
             
                .setTitle("My Partners")
                .setDescription( ` <@${message.author.id}> My current partner is <@905382190085459988>  `)
                .addField("**Invite Link**", `[Click here to invite gravel music](https://discord.com/api/oauth2/authorize?client_id=905382190085459988&permissions=36990048&scope=bot)`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}