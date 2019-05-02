import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class insult implements IBotCommand {

    private readonly _command = "insult"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let id = args[0]
        let memoriam = msgObject.author.username || msgObject.member.nickname;
        let user = msgObject.mentions.users.first() || client.users.get(id);
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571515132476391424/tenor_7.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571515413834366976/tenor_8.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let facts2 = [`${user} is an idiot!`,`${user} is a fucking scumbag!`,`${user} is a goddamn shithead!`];
        let fact2 = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(facts2[fact2])
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}