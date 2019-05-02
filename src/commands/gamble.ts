import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class gamble implements IBotCommand {

    private readonly _command = "gamble"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        {
            function makeid(length: number) {
                let result           = '';
                let characters       = '0123456789';
                let charactersLength = characters.length;
                for ( let i = 0; i < length; i++ ) {
                   result += characters.charAt(Math.floor(Math.random() * charactersLength));
                   msgObject.delete(0);
                }
                return result;
             }
             const num = parseInt(makeid(2));

             if (num === 21)
             msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`)
             db.get(msgObject.member.id)  
             db.add(`${msgObject.author}.money`, 20);
             
             if (num === 66)
             msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`)
             db.get(msgObject.member.id)  
             db.add(`${msgObject.author}.money`, 20);

             if (num === 15)
             msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`)
             db.get(msgObject.member.id)  
             db.add(`${msgObject.author}.money`, 20);

             if (num === 69)
             msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`)
             db.get(msgObject.member.id)  
             db.add(`${msgObject.author}.money`, 20);
        } 
    }
    }