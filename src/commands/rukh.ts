import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class rukh implements IBotCommand {

    private readonly _command = "rukh"

    help(): string {
        return "Yeehaw";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
            .setColor('#3b3c7a')
            .setTitle('IRAQ YEEHAW')
            .setDescription('🤠')
            .setImage('https://cdn.discordapp.com/attachments/567771088529129483/571025513330769940/20190425_124811.jpg')
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}