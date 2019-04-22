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
            let suppliedReason = args.slice(1).join(" ") || "";
            let muteLog = `${msgObject.author.username}: ${suppliedReason}`;
            msgObject.delete(0)
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`Nice try ${msgObject.author.username}, you're just a normie!`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!mentionedUser) {
                msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                if (msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`${mentionedUser} has been muted`)
                        .then(msg => {
                        msg.delete(3)
                            .catch(console.error);
                        msgObject.member.addRole('568948958463000576')
                            .then(console.log)
                            .catch(console.error);
                        return;
                    });
                }
            }
        });
    }
}
exports.default = mute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUErQ3RDLENBQUM7SUE3Q0csSUFBSTtRQUNBLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7WUFFaEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2xELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHlCQUF5QixDQUFDO3FCQUNqRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSw2QkFBNkIsQ0FBQztxQkFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtvQkFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLGlCQUFpQixDQUFDO3lCQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzZCQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUVsQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQzs2QkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7NkJBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQ3pCLE9BQU87b0JBQ1gsQ0FBQyxDQUFDLENBQUE7aUJBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBakRELHVCQWlEQyJ9