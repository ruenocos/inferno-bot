import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class ship implements IBotCommand {

    private readonly _command = "ship"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {{
        {
            function makeid(length: number) {
                let result = '';
                let characters = '0123456789';
                let charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                    return result;
                }
                const num = parseInt(makeid(2));
                let id = args[0];
                let user = msgObject.mentions.users.first() || client.users.get(id);
                let embed = new Discord.RichEmbed()
                    .setColor('#3c3b7a')
                    .setTitle(`${num}%`)
                    .setDescription(`${msgObject.member.nickname}'s and ${user}'s love %!`)
                    .setImage(`${msgObject.author.avatarURL},${user.avatarURL}`)
                msgObject.channel.send(embed);
                msgObject.delete(0);
            }
        }
    }
}