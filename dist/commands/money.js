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
const db = require("quick.db");
class money {
    constructor() {
        this._command = "money";
    }
    help() {
        return "Displays the user's bank account";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            let member = msgObject.mentions.users.first() || msgObject.author;
            let moneyAmount = db.get(`${member.id}.money`);
            let moneyEmbed = new Discord.RichEmbed()
                .setTitle(`${member.id}'𝔰 𝔪𝔬𝔫𝔢𝔶`)
                .setColor('#efff00')
                .setDescription(`${moneyAmount} $`);
            msgObject.channel.send(moneyEmbed);
            (msg) => {
                msg.delete(3000)
                    .catch(console.error);
            };
        });
    }
}
exports.default = money;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvbW9uZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFHL0IsTUFBcUIsS0FBSztJQUExQjtRQUVxQixhQUFRLEdBQUcsT0FBTyxDQUFBO0lBMkJ2QyxDQUFDO0lBekJHLElBQUk7UUFDQSxPQUFPLGtDQUFrQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNsRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDOUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNuQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDdEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsY0FBYyxDQUFDLEdBQUcsV0FBVyxJQUFJLENBQUMsQ0FBQTtZQUV2QyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixDQUFDLEdBQW9CLEVBQUUsRUFBRTtnQkFDeEIsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQTtRQUNMLENBQUM7S0FBQTtDQUNKO0FBN0JELHdCQTZCQyJ9