import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class d implements IBotCommand {

    private readonly _command = "d"

    help(): string {
        return "(admin only) Deletes the desired number of messages in the channel.";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {


        //Check if the member is an admin!
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`sorry ${msgObject.author.username} you cannot use this command!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }


        if (!args[0]) {
            msgObject.channel.send(`sorry ${msgObject.author.username} but you must supply enough number of messages to be deleted!`)
                .then(msg => {
                if (!msgObject.pinned) {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                }
                });
            return;
        }


        let numberOfMessagesToDelete = Number(args[0]);
        let user = msgObject.mentions.users.first() || msgObject.author;
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);

        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);

    }
}