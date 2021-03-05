const path = require("path");

module.exports = {
  name: "risadinha",
  description: "Toca uma risadinha massa",
  async execute(msg, args) {
    const { voice } = msg.member;

    if (!voice.channelID) {
      msg.reply("Aí Gld , Ess Hom Tem Q Tá  Num Voice Tlgd N??? '-'");
      return;
    }

    try {
      const connection = await voice.channel.join();

      const dispatcher = connection.play(
        path.join(__dirname, "../resources/risadinha.mp3")
      );

      dispatcher.on("finish", () => voice.channel.leave());
    } catch (e) {
      msg.reply("Ei gld, morgou morgou");
    }
  },
};
