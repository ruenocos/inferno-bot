"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This command brings up the help page";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
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
                .addField("!rukh", "Yeehaw 🤠");
            msgObject.channel.send(helpEmbed);
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
                .addField("!addmoney", "Adds a set amount of money to the mentioned user's account balance")
                .addField("!removemoney", "Removes a said amount from the mentioned user")
                .addField("!embed", "Sends the message as an embed!")
                .addField("!hydra", "Mommy Hydra");
            msgObject.channel.send(helpEmbed2);
            msgObject.delete(0);
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBeUR0QyxDQUFDO0lBdkRHLElBQUk7UUFDQSxPQUFPLHNDQUFzQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLElBQUksU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLDBCQUEwQixDQUFDO2lCQUNwQyxRQUFRLENBQUMsS0FBSyxFQUFFLHNDQUFzQyxDQUFDO2lCQUN2RCxRQUFRLENBQUMsTUFBTSxFQUFFLDZCQUE2QixDQUFDO2lCQUMvQyxRQUFRLENBQUMsS0FBSyxFQUFFLGdDQUFnQyxDQUFDO2lCQUNqRCxRQUFRLENBQUMsTUFBTSxFQUFFLDZEQUE2RCxDQUFDO2lCQUMvRSxRQUFRLENBQUMsUUFBUSxFQUFFLDBDQUEwQyxDQUFDO2lCQUM5RCxRQUFRLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDO2lCQUM3QyxRQUFRLENBQUMsT0FBTyxFQUFFLHFDQUFxQyxDQUFDO2lCQUN4RCxRQUFRLENBQUMsT0FBTyxFQUFFLDhCQUE4QixDQUFDO2lCQUNqRCxRQUFRLENBQUMsUUFBUSxFQUFFLHFDQUFxQyxDQUFDO2lCQUN6RCxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO2lCQUNuQyxRQUFRLENBQUMsUUFBUSxFQUFFLDhCQUE4QixDQUFDO2lCQUNsRCxRQUFRLENBQUMsT0FBTyxFQUFFLHVDQUF1QyxDQUFDO2lCQUMxRCxRQUFRLENBQUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDO2lCQUM5QyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztpQkFDekIsUUFBUSxDQUFDLE1BQU0sRUFBRSwrQkFBK0IsQ0FBQztpQkFDakQsUUFBUSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQztpQkFDakQsUUFBUSxDQUFDLFNBQVMsRUFBRSw2Q0FBNkMsQ0FBQztpQkFDbEUsUUFBUSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQztpQkFDM0MsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUNuQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ25DLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUM7aUJBQzVDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUM7aUJBQ2xELFFBQVEsQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUM7aUJBQzVDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUM7aUJBQy9DLFFBQVEsQ0FBQyxPQUFPLEVBQUUsOEJBQThCLENBQUM7aUJBQ2pELFFBQVEsQ0FBQyxXQUFXLEVBQUUsc0NBQXNDLENBQUM7aUJBQzdELFFBQVEsQ0FBQyxTQUFTLEVBQUUscUNBQXFDLENBQUM7aUJBQzFELFFBQVEsQ0FBQyxNQUFNLEVBQUUsMENBQTBDLENBQUM7aUJBQzVELFFBQVEsQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUM7aUJBQ3RELFFBQVEsQ0FBQyxXQUFXLEVBQUMsb0VBQW9FLENBQUM7aUJBQzFGLFFBQVEsQ0FBQyxjQUFjLEVBQUMsK0NBQStDLENBQUM7aUJBQ3hFLFFBQVEsQ0FBQyxRQUFRLEVBQUMsZ0NBQWdDLENBQUM7aUJBQ25ELFFBQVEsQ0FBQyxRQUFRLEVBQUMsYUFBYSxDQUFDLENBQUE7WUFDakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDSjtBQTNERCx1QkEyREMifQ==