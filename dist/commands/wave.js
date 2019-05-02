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
class wave {
    constructor() {
        this._command = "wave";
    }
    help() {
        return "This command does nothing";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = args[0];
            let memoriam = msgObject.author.username || msgObject.member.nickname;
            let user = msgObject.mentions.users.first() || client.users.get(id);
            let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571516669038690304/tenor_1.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571516669978214420/tenor_2.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571516674310668298/tenor_5.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571516672410648577/tenor_4.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571516671685165078/tenor_3.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571516675447324728/tenor_6.gif`];
            let fact = Math.floor(Math.random() * facts.length);
            let embed = new Discord.RichEmbed()
                .setColor('#3c3b7a')
                .setDescription(`${memoriam} waved to ${user}! Wave back!!!`)
                .setImage(facts[fact]);
            msgObject.channel.send(embed);
            msgObject.delete(0);
        });
    }
}
exports.default = wave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93YXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMEJ0QyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUN0RSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLEtBQUssR0FBRyxDQUFDLDBGQUEwRixFQUFDLDBGQUEwRixFQUFDLDBGQUEwRixFQUFDLDBGQUEwRixFQUFDLDBGQUEwRixFQUFDLDBGQUEwRixDQUFDLENBQUM7WUFDaGpCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLGNBQWMsQ0FBQyxHQUFHLFFBQVEsYUFBYSxJQUFJLGdCQUFnQixDQUFDO2lCQUM1RCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixDQUFDO0tBQUE7Q0FFSjtBQTVCRCx1QkE0QkMifQ==