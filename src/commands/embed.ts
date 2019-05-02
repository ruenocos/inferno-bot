import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class embed implements IBotCommand {

    private readonly _command = "embed"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let msg = msgObject.content.split(' ').slice(1).join(' ')
        let embed = new Discord.RichEmbed()
        .setColor('#3b3c7a')
        .setDescription(msg)
        msgObject.channel.send(embed)
        msgObject.delete(0);

    }

}