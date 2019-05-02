import * as Discord from "discord.js";
import { IBotCommand } from "../api";



export default class set implements IBotCommand {

    private readonly _command = "set"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let letter = msgObject.content.split(' ').slice(1).join(' ')
        if(!msgObject.member.hasPermission("MANAGE_GUILD"))
        msgObject.channel.send(`${msgObject.author.username} stop tryna be a cock`)

        if(msgObject.member.hasPermission("MANAGE_GUILD"))
        client.user.setGame(letter, "https://www.twitch.tv/noobyninjq")
        msgObject.delete(0);

    }

}