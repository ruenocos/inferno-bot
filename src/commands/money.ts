import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class money implements IBotCommand {

    private readonly _command = "money"

    help(): string {
        return "Displays the user's bank account";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete(0);

        let member = msgObject.mentions.users.first() || msgObject.author;
        let moneyAmount = db.get(`${member.id}.money`)
        let moneyEmbed = new Discord.RichEmbed()
            .setTitle(`${member.id}'𝔰 𝔪𝔬𝔫𝔢𝔶`)
            .setColor('#efff00')
            .setDescription(`${moneyAmount} $`)

        msgObject.channel.send(moneyEmbed);
            (msg: Discord.Message) => {
            (msg as Discord.Message).delete(3000)
            .catch(console.error);
        }
    }
}