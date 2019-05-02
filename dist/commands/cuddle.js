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
class cuddle {
    constructor() {
        this._command = "cuddle";
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
            let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571512236326256652/tenor_1.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571512238536523776/tenor_3.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571512239127920650/tenor.gif`, `https://cdn.discordapp.com/attachments/567113403353530369/571512393667051523/tenor_2.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571512561598726157/tenor_4.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571512571392294923/tenor_5.gif`, `https://cdn.discordapp.com/attachments/559734208105545728/571512573984505867/tenor_6.gif`];
            let fact = Math.floor(Math.random() * facts.length);
            let embed = new Discord.RichEmbed()
                .setColor('#3c3b7a')
                .setDescription(`${memoriam} and ${user} are cuddling,how sweet <3`)
                .setImage(facts[fact]);
            msgObject.channel.send(embed);
            msgObject.delete(0);
        });
    }
}
exports.default = cuddle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VkZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2N1ZGRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQTBCeEMsQ0FBQztJQXhCRyxJQUFJO1FBQ0EsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDdEUsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxLQUFLLEdBQUcsQ0FBQywwRkFBMEYsRUFBQywwRkFBMEYsRUFBQyx3RkFBd0YsRUFBQywwRkFBMEYsRUFBQywwRkFBMEYsRUFBQywwRkFBMEYsRUFBQywwRkFBMEYsQ0FBQyxDQUFDO1lBQ3pvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUNuQixjQUFjLENBQUMsR0FBRyxRQUFRLFFBQVEsSUFBSSw0QkFBNEIsQ0FBQztpQkFDbkUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEIsQ0FBQztLQUFBO0NBRUo7QUE1QkQseUJBNEJDIn0=