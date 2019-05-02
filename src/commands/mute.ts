import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class mute implements IBotCommand {

    private readonly _command = "mute"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = msgObject.mentions.users.first();
        if(!msgObject.member.hasPermission("MANAGE_MESSAGES"))
        {
            msgObject.channel.send(`${msgObject.author.username}, 𝔶𝔬𝔲 𝔠𝔞𝔫'𝔱 𝔲𝔰𝔢 𝔱𝔥𝔦𝔰 𝔠𝔬𝔪𝔪𝔞𝔫𝔡!`)
        }
        if(!mentionedUser)
        {
            msgObject.channel.send(`${msgObject.author.username}, ℑ 𝔠𝔞𝔫'𝔱 𝔣𝔦𝔫𝔡 𝔱𝔥𝔞𝔱 𝔲𝔰𝔢𝔯!`)
        }
        if(msgObject.member.hasPermission("MANAGE_MESSAGES"))
        {
        msgObject.channel.send(`${mentionedUser} 𝔥𝔞𝔰 𝔟𝔢𝔢𝔫 𝔪𝔲𝔱𝔢𝔡!`)

    } 

}}