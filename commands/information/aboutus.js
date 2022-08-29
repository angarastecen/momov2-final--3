const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dev',
    aliases: ['bhagwan'],
    description: 'about my owners',
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
                .setTitle("About us!")
                .addField("**DEVELOPERs**", ` 
                <@810818118322225152>,<@841901577811001367> `)
                .addField(" <:dot_877959363388641300:908686311060307968> Hashirama Senjuᴰᴱⱽ#4222" ,`Knows html, js, python (lil bit), mongodb`)
                .addField(" <:dot_877959363388641300:908686311060307968> ×͜× IMMORTAL#8612 " , `Knows html, css, js`)
                .addField(" <a:arrow:908667370338385970> **Partners** <:discord_verified:908670791015624704> ", `[Click here to invite gravel music](https://discord.com/api/oauth2/authorize?client_id=905382190085459988&permissions=36990048&scope=bot)`)
              .addField(" <a:arrow:908667370338385970> **SUPPORT  SERVER**", `[Click here to join support server](https://dsc.gg/coders-cafe)`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}