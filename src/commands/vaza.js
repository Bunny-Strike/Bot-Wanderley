module.exports = {
  name: "vaza",
  description: "Wanderley vai chegar...",
  execute(msg) {
    const userVoice = msg.member.voice;

    if (!userVoice.channelID) {
      msg.reply("Deixe de aloprar, seu fresco...");
      return;
    }

    userVoice.channel.leave();
  },
};
