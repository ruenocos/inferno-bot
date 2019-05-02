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
const db = require("quick.db");
class gamble {
    constructor() {
        this._command = "gamble";
    }
    help() {
        return "This command does nothing";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                function makeid(length) {
                    let result = '';
                    let characters = '0123456789';
                    let charactersLength = characters.length;
                    for (let i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        msgObject.delete(0);
                    }
                    return result;
                }
                const num = parseInt(makeid(2));
                if (num === 21)
                    msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`);
                db.get(msgObject.member.id);
                db.add(`${msgObject.author}.money`, 20);
                if (num === 66)
                    msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`);
                db.get(msgObject.member.id);
                db.add(`${msgObject.author}.money`, 20);
                if (num === 15)
                    msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`);
                db.get(msgObject.member.id);
                db.add(`${msgObject.author}.money`, 20);
                if (num === 69)
                    msgObject.channel.send(`Congratulations ${msgObject.member.nickname}! You've won 20$!!!`);
                db.get(msgObject.member.id);
                db.add(`${msgObject.author}.money`, 20);
            }
        });
    }
}
exports.default = gamble;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2dhbWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0JBQStCO0FBRy9CLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQThDcEMsQ0FBQztJQTVDRCxJQUFJO1FBQ0EsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRTtnQkFDSSxTQUFTLE1BQU0sQ0FBQyxNQUFjO29CQUMxQixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7b0JBQzFCLElBQUksVUFBVSxHQUFTLFlBQVksQ0FBQztvQkFDcEMsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO29CQUN6QyxLQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHO3dCQUNoQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7d0JBQzFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3RCO29CQUNELE9BQU8sTUFBTSxDQUFDO2dCQUNqQixDQUFDO2dCQUNELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFaEMsSUFBSSxHQUFHLEtBQUssRUFBRTtvQkFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3pGLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxHQUFHLEtBQUssRUFBRTtvQkFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3pGLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxHQUFHLEtBQUssRUFBRTtvQkFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3pGLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxHQUFHLEtBQUssRUFBRTtvQkFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3pGLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1QztRQUNMLENBQUM7S0FBQTtDQUNBO0FBaERMLHlCQWdESyJ9