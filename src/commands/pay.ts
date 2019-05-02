import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class pay implements IBotCommand {

    private readonly _command = "pay"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let id = args[0];
        let user = msgObject.mentions.users.first() || client.users.get(id) || msgObject.author;
        let member = msgObject.mentions.users.first();
        const number = parseInt(args[1]);

        db.get(msgObject.member.id)
        db.get(member.id)
        db.add(`${user.id}.money`, -number)
        db.add(`${member.id}.money`, number)
        msgObject.channel.send(`${msgObject.author} gave ${number} to ${member}!`)
        msgObject.delete(0);

    }

}