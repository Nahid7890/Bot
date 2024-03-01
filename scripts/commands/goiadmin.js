module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100075105758340") {
    var aid = ["100075105758340"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["- নাহিদের সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔","চুমু খাওয়ার বয়স টা নাহিদ চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
