import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(admin only) Deletes the desired number of messages in the channel.";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Clean up our messages
        msgObject.delete()
            .catch(console.error);

        //Check if the member is an admin!
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`𝔰𝔬𝔯𝔯𝔶 ${msgObject.author.username} 𝔶𝔬𝔲 𝔠𝔞𝔫𝔫𝔬𝔱 𝔲𝔰𝔢 𝔱𝔥𝔦𝔰 𝔠𝔬𝔪𝔪𝔞𝔫𝔡!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }



        //Make sure that they have said how many messages they want to delete.
        if (!args[0]) {
            msgObject.channel.send(`𝔰𝔬𝔯𝔯𝔶 ${msgObject.author.username} 𝔟𝔲𝔱 𝔶𝔬𝔲 𝔪𝔲𝔰𝔱 𝔰𝔲𝔭𝔭𝔩𝔶 𝔢𝔫𝔬𝔲𝔤𝔥 𝔫𝔲𝔪𝔟𝔢𝔯 𝔬𝔣 𝔪𝔢𝔰𝔰𝔞𝔤𝔢𝔰 𝔱𝔬 𝔟𝔢 𝔡𝔢𝔩𝔢𝔱𝔢𝔡!`)
                .then(msg => {
                if (!msgObject.pinned) {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                }
                });
            return;
        }

        //Convert arg[0] into a number.
        let numberOfMessagesToDelete = Number(args[0]);

        //Make sure the args[0] is actually a number
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`𝔰𝔬𝔯𝔯𝔶 ${msgObject.author.username} 𝔟𝔲𝔱 𝔱𝔥𝔞𝔱 𝔦𝔰𝔫'𝔱 𝔞 𝔳𝔞𝔩𝔦𝔡 𝔫𝔲𝔪𝔟𝔢𝔯.`)
                .then(msg => {
                if (!msgObject.pinned) {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                }
                })
            return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);

        //Delete the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);

    }
}