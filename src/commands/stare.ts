import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class stare implements IBotCommand {

    private readonly _command = "stare"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571516965529714708/tenor_1.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516966053871617/tenor_2.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571517012191215616/tenor_4.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571517008148168734/tenor_3.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571517014083108874/tenor_5.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571517018067697675/tenor.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} is staring at ${user} blankly...`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}