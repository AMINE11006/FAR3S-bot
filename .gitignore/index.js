const Discord = require("discord.js");
const config = require("./storage/config.json");
const client = new Discord.Client();


client.login(config.token);

client.on('ready', () => {
    console.log('Démarrage');
    client.user.setActivity('emmerder Le Fares original');
  });

client.on("message", message =>{
    if (!message.guild) return
    
    if(message.content === "Merci"){
        message.channel.send("de rien " + message.author.username)
        console.log(message.content + " par " + message.author.username)
    }    
    if(message.content === "merci"){
        message.channel.send("De rien " + message.author.username)
        console.log(message.content + " par " + message.author.username)
    }
    if(message.content === "Riadh"){
        message.channel.send("Bon chien " + message.author.username)
        console.log(message.content + " par " + message.author.username)
    }
});

client.on("message", message =>{
    if (!message.guild) return
    if (message.content === config.prefix +"rules") {
        message.delete();
    const rules = new Discord.MessageEmbed()
        .setColor("#F30707")
        .setAuthor("Game Group", "https://cdn.discordapp.com/icons/572859980571738122/c0ee014acadad9bfe41853ae78cfe9c8.png?size=256")
        .setTitle("Rules:")
        .addFields(
            { name: '1.', value: 'Ne pas spam sur le serveur', inline: false },
            { name: '2.', value: "Pas de pub en prv ou en public (il faut demander aux admins)", inline: false },
            { name: '3.', value: 'Respecter les membres du serveur et les personnes à role élever', inline: false },
            { name: '4.', value: 'être une personne de parole', inline: false },
            { name: '5.', value: "Ne pas écrire d'insulte dans les salons", inline: false },
		    { name: '6.', value: "Respecter les règles", inline: false },
        )
        .setTimestamp()
        .setFooter("tout irrespect des règles sera muni d'un avertissement puis d'un ban")
    message.author.send(rules)
    console.log("la fonction rules marche à merveille")
    }
});

client.on("guildMemberAdd", member =>{
    const hello =  new Discord.MessageEmbed()
        .setColor("#1BFE07")
        .setAuthor("Game Group", "https://cdn.discordapp.com/icons/572859980571738122/c0ee014acadad9bfe41853ae78cfe9c8.png?size=256")
        .setDescription(`Salut ${member.user.username} veille bien à lire le règlement`)
    const rules = new Discord.MessageEmbed()
        .setColor("#F30707")
        .setAuthor("Game Group", "https://cdn.discordapp.com/icons/572859980571738122/c0ee014acadad9bfe41853ae78cfe9c8.png?size=256")
        .setTitle("Rules:")
        .addFields(
            { name: '1.', value: 'Ne pas spam sur le serveur', inline: false },
            { name: '2.', value: "Pas de pub en prv ou en public (il faut demander aux admins)", inline: false },
            { name: '3.', value: 'Respecter les membres du serveur et les personnes à role élever', inline: false },
            { name: '4.', value: 'être une personne de parole', inline: false },
            { name: '5.', value: "Ne pas écrire d'insulte dans les salons", inline: false },
		    { name: '6.', value: "Respecter les règles", inline: false },
        )
        .setTimestamp()
        .setFooter("tout irrespect des règles sera muni d'un avertissement puis d'un ban")
    member.send(hello)
    member.send(rules)
    console.log(`message de bienvenue envoyé à ${member.user.username}`)
});

client.on("message", message => {
    if (message.content.startsWith("Zebi") || message.content.startsWith("3asba") || message.content.startsWith("Naïek")) {
        message.delete();
        message.author.send("Avertissement attention !!!")
        message.channel.send("@FAR3S"+ " " + message.author.username +" a eu un avertissement.")
    }
    if (message.content.startsWith("zebi") || message.content.startsWith("ta7an") || message.content.startsWith("naïek") || message.content.startsWith("Ta7an")) {
        message.delete();
        message.author.send("Avertissement attention !!!")
        message.channel.send("@FAR3S"+ " " + message.author.username +" a eu un avertissement.")
    }
    if (message.content.startsWith("Bara naïek") || message.content.startsWith("bara naïek") || message.content.startsWith("Zbi") || message.content.startsWith("zbi")) {
        message.delete();
        message.author.send("Avertissement attention !!!")
        message.channel.send("@FAR3S"+ " " + message.author.username +" a eu un avertissement.")
    }
    if (message.content.startsWith("Zok omek") || message.content.startsWith("zok omek") || message.content.startsWith("Pute") || message.content.startsWith("pute")) {
        message.delete();
        message.author.send("Avertissement attention !!!")
        message.channel.send("@FAR3S"+ " " + message.author.username +" a eu un avertissement.")
    }
    if (message.content.startsWith("Fils de pute") || message.content.startsWith("fils de pute") || message.content.startsWith("Fdp") || message.content.startsWith("fdp")) {
        message.delete();
        message.author.send("Avertissement attention !!!")
        message.channel.send("@FAR3S"+ " " + message.author.username +" a eu un avertissement.")
    }
});

    



