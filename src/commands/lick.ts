import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class lick implements IBotCommand {

    private readonly _command = "lick"

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
        let facts = [`https://cdn.discordapp.com/attachments/559734208105545728/571511269539184640/tenor_2.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571511267919921165/tenor_1.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571511270465994962/tenor_3.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571511271590199327/tenor_4.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571511272030339076/tenor_5.gif`,`https://cdn.discordapp.com/attachments/559734208105545728/571511284474970132/tenor.gif`];
        let fact = Math.floor(Math.random() * facts.length);
        let embed = new Discord.RichEmbed()
        .setColor('#3c3b7a')
        .setDescription(`${memoriam} 𝔧𝔲𝔰𝔱 𝔩𝔦𝔠𝔨𝔢𝔡 ${user}! ℭ𝔯𝔢𝔢𝔭𝔶...`)
        .setImage(facts[fact])
        msgObject.channel.send(embed);
        msgObject.delete(0);

    }

}