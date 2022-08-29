const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setTitle("Help Menu")

    .setDescription(" Hi ,\n  Click the buttons below to click the help menu! ")
       .setImage("https://i.imgur.com/o2cpzVC.gif") 
    
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM");

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Moderation,Info,Giveaway')
        .addField("ㅤ⠀⠀⠀ \n<:hydroxmod:908668383464157185>**Moderation**",
          "`Kick` `Ban` `addrole` `anti-vc` `createchat` `createvc` `delchannel` `delrole` `delwarn` `dm` `lock` `mute` `purge` `unantivc` `unban` `unlock` `unmute` `warn` `warns`\n\n <a:info:908687982666608640> **Info**  \n `aboutus` `anime` `botinfo` `invite` `membercount` `partner` `pokedex` `report` `roleinfo` `roles` `serverinfo` `userinfo` `vote` `weather`\n\n<a:giveaway:908688273218625556> **Giveaway**\n `m!g-start` `m!g-end` `m!g-end`"
        )


      .setImage("https://i.imgur.com/o2cpzVC.gif") 
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
     .setTitle('Music,Musicfilter,utility')
      .addField("⠀⠀⠀ \n <a:music:908668497498869792> **Music**",
        "`play` `clearqueue` `loop` `nowplaying` `resume` `pause` `skip` `search`\n\n <a:musicop:908687658262331433> **MusicFilter** \n `bassboost` `clear` `echo` `heavybass` `purebass`  `bassboost`\n\n<:utility:915934937574682624> **Utility** \n   `afk` `ascii` `avatar`  `calculate` `enlarge` `hack` `rolememberinfo` `ship` `translate` `userroles` `yt-together` `zalgo` "
        )
        
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

    const embed3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Ticket,Fun,Games')
    
     
        .addField("⠀⠀⠀ \n   :ticket: **Ticket** ","`t-add` `t-close` `t-delete` `t-new` `t-open` `t-remove`\n\n <a:ADanceyDance:908686069464174593> **Fun** \n `cry` `hug` `joke` `kill` `kiss` `laugh` `mcskin` `meme` `pat` `punch` `say` `slap`\n\n<a:minecraft:910125126656356352> **Games**\n  `8ball` `aki` `pokemon` `snack`  "
        )
      
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.client.user.username, message.client.user.avatarURL())

      
    //`t-add` `t-close` `t-delete` `t-new` `t-open` `t-remove`       
   //`cry` `hug` `joke` `kill` `kiss` `laugh` `mcskin` `meme` `pat` `punch` `say` `slap`         
   //`8ball` `aki` `pokemon` `snack`  

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Moderation,Info,Giveaway`)
    .setID(`help1`)
    .setEmoji(`908668383464157185`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`Music,MusicFilter,Utility`)
    .setID(`help2`)
    .setEmoji(`908687658262331433`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Ticket,Fun,Games`)
    .setID(`help3`)
    .setEmoji(`908686069464174593`)
    .setStyle("green");

    
 let home = new MessageButton()
    .setLabel(`🏠`)
    .setID(`help5`)
  
    .setStyle("green");
 

    let row = new MessageActionRow()
    .addComponents(home,button1,button2,button3);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

     
        if(b.id == "help5") {
            
            MESSAGE.edit(embed, row);
            await b.reply.defer()

        }

    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

    }
  };