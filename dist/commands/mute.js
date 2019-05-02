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
class mute {
    constructor() {
        this._command = "mute";
    }
    help() {
        return "This command does nothing";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentionedUser = msgObject.mentions.users.first();
            if (!msgObject.member.hasPermission("MANAGE_MESSAGES")) {
                msgObject.channel.send(`${msgObject.author.username}, 𝔶𝔬𝔲 𝔠𝔞𝔫'𝔱 𝔲𝔰𝔢 𝔱𝔥𝔦𝔰 𝔠𝔬𝔪𝔪𝔞𝔫𝔡!`);
            }
            if (!mentionedUser) {
                msgObject.channel.send(`${msgObject.author.username}, ℑ 𝔠𝔞𝔫'𝔱 𝔣𝔦𝔫𝔡 𝔱𝔥𝔞𝔱 𝔲𝔰𝔢𝔯!`);
            }
            if (msgObject.member.hasPermission("MANAGE_MESSAGES")) {
                msgObject.channel.send(`${mentionedUser} 𝔥𝔞𝔰 𝔟𝔢𝔢𝔫 𝔪𝔲𝔱𝔢𝔡!`);
            }
        });
    }
}
exports.default = mute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUEyQnJDLENBQUM7SUF6QkUsSUFBSTtRQUNBLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQ3JEO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLG9EQUFvRCxDQUFDLENBQUE7YUFDM0c7WUFDRCxJQUFHLENBQUMsYUFBYSxFQUNqQjtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwyQ0FBMkMsQ0FBQyxDQUFBO2FBQ2xHO1lBQ0QsSUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNwRDtnQkFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsOEJBQThCLENBQUMsQ0FBQTthQUV6RTtRQUVMLENBQUM7S0FBQTtDQUFDO0FBN0JGLHVCQTZCRSJ9