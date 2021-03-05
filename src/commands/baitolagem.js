module.exports = {
  name: "baitolagem",
  description: "Mede o seu nivel de viadagem",
  execute(msg) {
    const length = Math.floor(Math.random() * 100);
    msg.reply(`Ess Home é ${length}% baitola gld, haHahaHa`);
  },
};
