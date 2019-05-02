import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class sol implements IBotCommand {

    private readonly _command = "sol"

    help(): string {
        return "Dummy Thicc";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
            .setColor('#3b3c7a')
            .setTitle('My boy dummy thicc 👌😩')
            .setImage('https://cdn.discordapp.com/attachments/567771088529129483/571068597858730004/Snapchat-1662571429.jpg')
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}