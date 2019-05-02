import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class highfive implements IBotCommand {

    private readonly _command = "highfive"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571509578898866216/tenor_6.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509579507171339/tenor_7.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509576290140170/tenor_4.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571509577804152842/tenor_5.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} just highfived ${user}!`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}