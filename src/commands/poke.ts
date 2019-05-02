import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class poke implements IBotCommand {

    private readonly _command = "poke"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571514261512388619/tenor_1.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571514262393061377/tenor_3.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571514264758779905/tenor_5.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571514261843476480/tenor_2.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571514266600079361/tenor_6.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571514265706561558/tenor_4.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} 𝔧𝔲𝔰𝔱 𝔭𝔬𝔨𝔢𝔡 ${user}.`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}