import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class help implements IBotCommand {

    private readonly _command = "help"

    help(): string {
        return "This command brings up the help page";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {


        let helpEmbed = new Discord.RichEmbed()
            .setColor('#3b3c7a')
            .setTitle('List of all the commands')
            .addField("!av", "Displays the mentioned user's avatar")
            .addField("!ban", "bans the mentioned user owo")
            .addField("!bc", "Clears all the bots's messages")
            .addField("!buy", "Buys a specific item from the storage if you have enough $!")
            .addField("!clear", "Clears all the mentioned user's messages")
            .addField("!help", "Brings up the help embed")
            .addField("!info", "Displays some info about the server")
            .addField("!kick", "kicks the mentioned user owo")
            .addField("!money", "Displays the user's account balance")
            .addField("!poll", "Creates a poll")
            .addField("!purge", "Deletes ALL messages in chat")
            .addField("!kiss", "Gives the mentioned user a smooch uwu")
            .addField("!fuck", "Fucks the mentioned user!")
            .addField("!greg", "Greg")
            .addField("!inv", "Displays the user's inventory")
            .addField("!mute", "Mutes the mentioned user owo")
            .addField("!gamble", "Randomly chooses a number between 0 and 100")
            .addField("!unfuck", "Revert your fucking!")
            .addField("!rukh", "Yeehaw 🤠")
        msgObject.channel.send(helpEmbed)

        let helpEmbed2 = new Discord.RichEmbed()
            .setColor('#3b3c7a')
            .addField("!hug", "Hugs the mentioned user!")
            .addField("!insult", "Insults the mentioned user!")
            .addField("!lick", "Licks the mentioned user!")
            .addField("!pat", "Pats the mentioned user!")
            .addField("!poke", "Pokes the mentioned user!")
            .addField("!stare", "Stares at him,creepily...")
            .addField("!wave", "Waves at the mentioned user!")
            .addField("!highfive", "Gives the mentioned user a high five")
            .addField("!cuddle", "Cuddles with your snuggle buddy uwu")
            .addField("!sol", "Displays my thicc boy :weary: :ok_hand: ")
            .addField("!ship", "Shows the love % between 2 users!")
            .addField("!addmoney","Adds a set amount of money to the mentioned user's account balance")
            .addField("!removemoney","Removes a said amount from the mentioned user")
            .addField("!embed","Sends the message as an embed!")
            .addField("!hydra","Mommy Hydra")
            msgObject.channel.send(helpEmbed2)
        msgObject.delete(0);
    }
}