const ytdl = require("ytdl-core");
const { grafith } = require("../resources/urls.json");

module.exports = {
  name: "grafitao",
  description: "Toca uma musica aleatoria de graffith",
  async execute(msg, args) {
    const { voice } = msg.member;

    if (!voice.channelID) {
      msg.reply("Aí Gld , Ess Hom Tem Q Tá  Num Voice Tlgd N??? '-'");
      return;
    }
    const song = Math.floor(Math.random() * grafith.length);

    try {
      const connection = await voice.channel.join();

      const dispatcher = connection.play(ytdl(grafith[song]));

      dispatcher.on("finish", () => voice.channel.leave());
    } catch (e) {
      msg.reply("Ei gld, morgou morgou?");
    }
  },
};
