import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class addmoney implements IBotCommand {

    private readonly _command = "addmoney"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
    
        let id = args[0];
        let user = msgObject.mentions.users.first() || client.users.get(id) || msgObject.author;
        const number = parseInt(args[1]);

        if(!msgObject.member.hasPermission("MANAGE_MESSAGES"))
        msgObject.channel.send(`${msgObject.author.username} you cannot use this command!`)
        msgObject.delete(0);

        if(msgObject.member.hasPermission("MANAGE_MESSAGES"))
        db.get(msgObject.member.id)
        db.add(`${user.id}.money`, number)
        msgObject.channel.send(`Added ${number} to ${user}'s balance!`)
        msgObject.delete(0);
    }

}