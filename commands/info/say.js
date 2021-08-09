module.exports = {
  name: "say",
  aliases : ['speak'],
  description: "Make Galaxy Tools say something!",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : exports.execute = async(client, message, args) => {
        message.channel.send(`${args.join(" ")}`)
    }
}