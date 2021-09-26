const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "http://imgur.com/a/iXEtXpC.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Bemin*
*owner number wa.me/919744267478*

*My Channel : https://www.youtube.com/channel/UC56baqlzh4BQET7S1jASiFA*

*github link : https://github.com/blooper-ser/blooper*

*audio commads : https://github.com/blooper-ser/blooper/tree/master/uploads*
`}) 

}));
