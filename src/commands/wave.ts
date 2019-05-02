import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class wave implements IBotCommand {

    private readonly _command = "wave"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571516669038690304/tenor_1.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516669978214420/tenor_2.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516674310668298/tenor_5.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516672410648577/tenor_4.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516671685165078/tenor_3.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516675447324728/tenor_6.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} waved to ${user}! Wave back!!!`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}