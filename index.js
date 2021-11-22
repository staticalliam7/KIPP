const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
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

    switch (command) {
      
      
      case 'kipp':
       let kipp = new MessageEmbed()
          .setTitle('KIPP')
          .setColor('BLUE')
          .setDescription('KIPP is a bot that is a part of the "Intersetellar trio". Each bot has their own uniqe features, just like KIPP. If you want more information, ping the bot devs.')
          .setThumbnail('https://cdn.discordapp.com/attachments/570415505328832522/912451297637187614/IMG_D004FBF675BF-1.jpeg')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`,message.author.displayAvatarURL())
          ;
        message.channel.send(kipp);
        break;
    case 'clear':
     if(!args[0]) return message.reply('Error. Please define how many messages you wanna delete, ***Ex: t!clear 10*** ')
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You can't use this command.`);
              if (message.channel.type === 'text') 
      
    var clearEmbed = new MessageEmbed()
	.setColor('RED')
	.setTitle('Deleted Messages')
	.setDescription('Someone used t!clear')
	.setThumbnail('https://i.imgur.com/gcElJpw.png')
	.addField(message.author.username + ' deleted ' + args[0] + ' Messages')
	.setTimestamp()
	.setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())

    message.channel.send(clearEmbed);
    var deleteThisMany = ++args[0];
    message.channel.bulkDelete(deleteThisMany);
    break;

    
       
      
      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG. Successful. Round trip was ${Date.now() - msg.createdTimestamp}ms.`)
        break;
      
      case 'creeper':
        message.channel.send('Awwww Man.')
        break;  

      
       
        

      case 'help':
        let embed = new MessageEmbed()
          .setTitle('HELP MENU')
          .setColor('BLUE')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`,message.author.displayAvatarURL())
          .setThumbnail(bot.user.displayAvatarURL());
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase())? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
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