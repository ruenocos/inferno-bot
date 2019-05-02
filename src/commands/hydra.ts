import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class hydra implements IBotCommand {

    private readonly _command = "hydra"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
        .setColor('#000080')
        .setTitle('Hydra')
        .setDescription('Why are you mentioning this loser,ew')
        .setImage(`https://cdn.discordapp.com/avatars/398965614347288587/79eb865490f804143be56165bf5ab270.png?size=2048`)
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}