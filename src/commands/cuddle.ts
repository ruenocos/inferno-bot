import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class cuddle implements IBotCommand {

    private readonly _command = "cuddle"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571512236326256652/tenor_1.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571512238536523776/tenor_3.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571512239127920650/tenor.gif`,`https://cdn.discordapp.com/attachments/567113403353530369/571512393667051523/tenor_2.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571512561598726157/tenor_4.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571512571392294923/tenor_5.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571512573984505867/tenor_6.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} and ${user} are cuddling,how sweet <3`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}