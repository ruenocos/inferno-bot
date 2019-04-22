import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "ban"

    help(): string {
        return "(admin only) bans mentioned user";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete()
            .catch(console.error);

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Nice try ${msgObject.author.username}, you're just a normie!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        if (!mentionedUser) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        msgObject.guild.member(mentionedUser).ban(banLog)
            .then(console.log)
            .catch(console.error)
    }
}