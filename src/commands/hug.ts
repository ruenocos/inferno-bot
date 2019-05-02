import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class hug implements IBotCommand {

    private readonly _command = "hug"

    help(): string {
        return "This command does nothing";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let id = args[0];
        let memoriam = msgObject.author.username || msgObject.member.nickname;
        let user = msgObject.mentions.users.first() || client.users.get(id);
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571510443277942787/tenor_13.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571510473921658881/tenor_14.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571510475615895563/tenor_15.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571510477126107147/tenor_16.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571510481886380052/tenor_19.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571510480946987019/tenor_18.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571510480238280715/tenor_17.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} just hugged ${user}!`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}