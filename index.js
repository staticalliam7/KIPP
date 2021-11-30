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
     if(!args[0]) return message.reply('Error. Please define how many messages you wanna delete, ***Ex: t!clear 10*** ')
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

    
       
      //checks server connectivity
      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG. Successful. Round trip was ${Date.now() - msg.createdTimestamp}ms.`)
        break;
      

      //creeper
      case 'creeper':
        message.channel.send('Awwww Man.')
        break;  

      //SR2 dv map
      case 'dvmap':
      if(args[0]="sr2")  {      
       let dvmap = new MessageEmbed()
         .setTitle('Delta-V map for Simplerockets 2')
         .setColor('BLUE')
         .setImage('https://i.imgur.com/PV2YsUM.png')
         .setFooter(`Requested by: ${message.member ? 
         message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
         ;
  
        message.channel.send(dvmap);
        break;
}

    else if(args[0]="ksp"){
       let dvmapksp = new MessageEmbed()
         .setTitle('Delta-V map for Kerbal Space Program')
         .setColor('LIME')
         .setImage('https://i.imgur.com/yO0bQax.png')
         .setFooter(`Requested by: ${message.member ? 
         message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
         ;

         message.channel.send(dvmapksp);
         break;
    }
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