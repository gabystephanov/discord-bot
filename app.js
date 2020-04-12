const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let quote = "No quote found :("
    if (msg.content === 'quote') {
        axios.get('http://www.insightoftheday.com/').then(response => {
            const pattern = '(?<=motivational quote: )[0-9a-zA-Z \,]+[.]*'
            if (response.data) {
                quote = response.data.match(pattern)[0];
            }
            msg.reply(quote);
        })
    }
});

client.login("SECRET_TOKEN");