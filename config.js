import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Akko-Ism",
  //BotName
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=1025195160168054846&scope=applications.commands%20bot&permissions=8",
  //BotInvite Link
  Features: [
    {
      name: "Moderation/AutoModeration",
      description:
        "Moderation/Automateration is the process of eliminating or lessening extremes, Bot done or moderator done.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Automation describes a wide range of technologies that reduce  human intervention in processes.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Welcomer",
      description:
        "Welcomer is the person who greets the new person in an unique and great way",
      logo: <CgCrown className="h-10 w-10" />,
    },
    {
      name: "Tickets",
      description:
        "Tickets are the system we need! Giving non-moderating players a chance to report a corrupt moderator/member.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Logging",
      description:
        "Logging is a actions where when the bot uses commands it enters what they did inside a bot-made channel.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 300, //-  - Your
  memberCount: 700, //--   - Bot
  executedCommand: 27000, //--  - Stats
  availableCommand: 400, //---   - Here
  //Do not change if you don't know about them
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  twitterLink: "https://twitter.com/JameUwUMan",
  discordLink: "https://discord.com/channels/1023635862505930873/1023635862979883060",
  youtubeLink: "https://www.youtube.com/channel/UCY2rQKJpC-prBdTrq-v8xkg",
};

export default config;
