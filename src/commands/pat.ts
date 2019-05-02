import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class pat implements IBotCommand {

    private readonly _command = "pat"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let id = args[0];
        let memoriam = msgObject.author.username || msgObject.member.nickname;
        let user = msgObject.mentions.users.first() || client.users.get(id);
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571509587681738762/tenor_12.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509586733957120/tenor_11.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509584565370896/tenor_10.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509581885472770/tenor_9.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509580891291669/tenor_8.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} just patted ${user}! uwu`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}