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
class pat {
    constructor() {
        this._command = "pat";
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
            let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571509587681738762/tenor_12.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571509586733957120/tenor_11.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571509584565370896/tenor_10.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571509581885472770/tenor_9.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571509580891291669/tenor_8.gif`];
            let fact = Math.floor(Math.random() * facts.length);
            let embed = new Discord.RichEmbed()
                .setColor('#3c3b7a')
                .setDescription(`${memoriam} just patted ${user}! uwu`)
                .setImage(facts[fact]);
            msgObject.channel.send(embed);
            msgObject.delete(0);
        });
    }
}
exports.default = pat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3BhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQTBCckMsQ0FBQztJQXhCRyxJQUFJO1FBQ0EsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDdEUsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxLQUFLLEdBQUcsQ0FBQywyRkFBMkYsRUFBQywyRkFBMkYsRUFBQywyRkFBMkYsRUFBQywwRkFBMEYsRUFBQywwRkFBMEYsQ0FBQyxDQUFDO1lBQ3hkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLGNBQWMsQ0FBQyxHQUFHLFFBQVEsZ0JBQWdCLElBQUksT0FBTyxDQUFDO2lCQUN0RCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixDQUFDO0tBQUE7Q0FFSjtBQTVCRCxzQkE0QkMifQ==