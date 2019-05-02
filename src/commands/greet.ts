import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class greet implements IBotCommand {

    private readonly _command = "greet"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571516189826613249/tenor_2.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516189021437981/tenor_1.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571516190481055760/tenor.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} said hi to ${user}! Say hi back!`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}