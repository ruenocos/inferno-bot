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
                .setColor('#efff00')
                .setTitle('List of all the commands')
                .addField(">av", "Displays the mentioned user's avatar")
                .addField(">ban", "bans the mentioned user owo")
                .addField(">bc", "Clears all the bots's messages")
                .addField(">buy", "Buys a specific item from the storage if you have enough $!")
                .addField(">clear", "Clears all the mentioned user's messages")
                .addField(">help", "Brings up the help embed")
                .addField(">info", "Displays some info about the server")
                .addField(">kick", "kicks the mentioned user owo")
                .addField(">money", "Displays the user's account balance")
                .addField(">poll", "Creates a poll")
                .addField(">purge", "Deletes ALL messages in chat");
            msgObject.channel.send(helpEmbed);
            msgObject.delete(0);
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBNkJqQyxDQUFDO0lBM0JGLElBQUk7UUFDQSxPQUFPLHNDQUFzQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLElBQUksU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDdEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLDBCQUEwQixDQUFDO2lCQUNwQyxRQUFRLENBQUMsS0FBSyxFQUFDLHNDQUFzQyxDQUFDO2lCQUN0RCxRQUFRLENBQUMsTUFBTSxFQUFDLDZCQUE2QixDQUFDO2lCQUM5QyxRQUFRLENBQUMsS0FBSyxFQUFDLGdDQUFnQyxDQUFDO2lCQUNoRCxRQUFRLENBQUMsTUFBTSxFQUFDLDZEQUE2RCxDQUFDO2lCQUM5RSxRQUFRLENBQUMsUUFBUSxFQUFDLDBDQUEwQyxDQUFDO2lCQUM3RCxRQUFRLENBQUMsT0FBTyxFQUFDLDBCQUEwQixDQUFDO2lCQUM1QyxRQUFRLENBQUMsT0FBTyxFQUFDLHFDQUFxQyxDQUFDO2lCQUN2RCxRQUFRLENBQUMsT0FBTyxFQUFDLDhCQUE4QixDQUFDO2lCQUNoRCxRQUFRLENBQUMsUUFBUSxFQUFDLHFDQUFxQyxDQUFDO2lCQUN4RCxRQUFRLENBQUMsT0FBTyxFQUFDLGdCQUFnQixDQUFDO2lCQUNsQyxRQUFRLENBQUMsUUFBUSxFQUFDLDhCQUE4QixDQUFDLENBQUE7WUFDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDakMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FBQztBQS9CTix1QkErQk0ifQ==