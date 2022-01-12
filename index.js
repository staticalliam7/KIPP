const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

//dank memes and stuff
var dankMemes = ['https://www.cccneb.edu/programs/cccmart/gallery/graphic_arts/web/2003tyler/Pr1/images/spritecranberry.jpg', 'https://i.redd.it/t5ui5gu1ein21.jpg', 'https://i.redd.it/pyjvagpbvg981.jpg', 'https://i.redd.it/052r110cdg981.jpg', 'https://i.redd.it/swt9xedu8h981.jpg', 'https://external-preview.redd.it/pLQlo5tmg0E9_Rt3c0bS0hmbNjXpPxcPvAv1zKFTG2w.jpg?auto=webp&s=85a0181f31d4fcb1791636d683f9a8728999700f', 'https://i.redd.it/tg1clketti981.jpg', 'https://i.redd.it/wok699zyjh981.png', 'You are unworthy to receive a dank meme, try again later.']

//8 ball stuff
var magic8Ball = ['It is Certain','It is decidedly so','Without a doubt','Yes, Definitly','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy, try again','Ask again later, go touch some grass','Better not tell you *now*','Cannot predict now','Touch some grass and try again','Do not count on it.','My reply is N. O.','My sources say no','Outlook, not so good...','Very doubtful','You really like this command don\'t you?','F*** off and touch some grass.' ]
// ^ escape character btw 
//yeah


let bot = new Client({
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();
  
  if (message.content.startsWith('creeper','Creeper')) {

      message.channel.send('Awwww Man')


  

  }


    switch (command) {

     
      //magic 8 ball much pongers
    //stolen code?/1/1///?!??!?!?! IMPOSSIBLE CHALLENGE!~!?/@?!@?4!?35$!?@$2!Q
      case 'magic8':
       var random = Math.floor(Math.random() * magic8Ball.length)
  
       //stop
        let magic8 = new MessageEmbed()
          .setTitle('MAGIC 8 BALL')
          .setColor('PURPLE')
          .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
          .setDescription((magic8Ball[random]))
          .setThumbnail('https://i5.walmartimages.com/asr/c3698a59-0624-4f8d-9e27-258139feb08c_1.9a6988dd9ed990c81dcab7afc9a37834.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF')
            //get PEPSI MANNNNNED
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`,message.author.displayAvatarURL())
          ;
        message.channel.send(magic8);
            
        break;
       
       
       message.channel.send(magic8Ball[random])
       break;
     
      //default command explaining what the bot does.
      case 'kipp':
        let kipp = new MessageEmbed()
          .setTitle('KIPP')
          .setColor('BLUE')
          .setDescription('KIPP is a bot that is a part of the "Intersetellar trio". Each bot has their own uniqe features, just like KIPP. If you want more information, ping the bot devs.')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
        message.channel.send(kipp);
        break;


      //moderating command that clears specified value. works with numbers, and everything :trollface:
      case 'clear':
        if (!args[0]) return message.reply('Error. Please define how many messages you wanna delete, ***Ex: t!clear 10*** ')
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You can't use this command.`);
        if (message.channel.type === 'text')

          var clearEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle('Deleted Messages')
            .setDescription('Someone used t!clear')
            .setThumbnail('https://onlinehelpguide.com/wp-content/uploads/2020/10/How-To-Delete-All-Messages-On-Discord.jpg')
            .addField(message.author.username + ' deleted ' + args[0] + ' Messages')
            .setTimestamp()
            .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())

        message.channel.send(clearEmbed);
        var deleteThisMany = ++args[0] + 1;
        message.channel.bulkDelete(deleteThisMany);
        break;

      



      //NULL
      case 'say':
      case 'repeat':
        if (args.length > 0)
          message.channel.send(args.join(' '));
        else
          message.reply('You did not send a message to repeat, cancelling command.')
        break

      //checks server connectivity
      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG. Successful. Round trip was ${Date.now() - msg.createdTimestamp}ms.`)
        break;



      //stupid & worthless command
      case 'meme':
        var random = Math.floor(Math.random() * dankMemes.length);
        message.channel.send(dankMemes[random])
        break;


      

      //SR2 dv map for space nerds
      case 'dvmap':
        let dvmap = new MessageEmbed()
          .setTitle('Delta-V map for Simplerockets 2')
          .setColor('BLUE')
          .setImage('https://i.imgur.com/PV2YsUM.png')
          .setFooter(`Requested by: ${message.member ?
            message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          ;

        message.channel.send(dvmap);
        break;



      case 'dvmapksp':
        let dvmapksp = new MessageEmbed()
          .setTitle('Delta-V map for Kerbal Space Program')
          .setColor('B4DA55')
          .setImage('https://external-preview.redd.it/PKWDXnpgb1zwTapSpGbGG2ONlFGdYG1X4bz7l1CT2n4.png?auto=webp&s=937180a03b8f976739f57a985367338fbf11b437')
          .setFooter(`Requested by: ${message.member ?
            message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          ;

        message.channel.send(dvmapksp);
        break;




      //help command (probably should update this soon)
      case 'help':
        let embed = new MessageEmbed()
          .setTitle('HELP MENU')
          .setColor('BLUE')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase()) ? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
            embed
              .setTitle(`COMMAND - ${command}`)

            if (commands[command].aliases)
              embed.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
            embed
              .addField('DESCRIPTION', commands[command].description)
              .addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
          } else {
            embed
              .setColor('RED')
              .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');



          }

        }
        message.channel.send(embed);
        break;
    }
  }
});

require('./server')();
bot.login(config.token);