import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class uptime implements IBotCommand {

    private readonly _command = "uptime"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let start = Date.now();
        let uptimes = Math.floor(client.uptime / 1000)
        let uptime = Math.floor(client.uptime / 60000)
        let uptimeh = Math.floor(client.uptime / 3600000000)

        if (uptime < 60000)
            msgObject.channel.send(`My uptime: ${uptimes} seconds`)
        msgObject.delete(0);

        if (uptime > 60000)
            msgObject.channel.send(`My uptime: ${uptimeh} hours`)

        
        msgObject.channel.send(`My uptime: ${uptime} minutes`)
        msgObject.delete(0);



    }}
