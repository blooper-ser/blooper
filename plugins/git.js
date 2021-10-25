const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/y02NWZt.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Bemin Ser*
*Creator number : wa.me/919744267478?text=Hi%20Blooper%20Ser.%20*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/blooper-ser/blooper*
*Audio commads :   https://github.com/blooper-ser/blooper/tree/master/uploads*
*Sticker commads : https://github.com/blooper-ser/blooper/tree/master/stickers*
`}) 

}));
