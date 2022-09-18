import { IProject, TopicTag } from "./models";

export const CurrentProjects:IProject[] = [
    {
        name:"Kryptik Wallet",
        description:"A simple wallet that lets you save, send, and collect value across the internet. With Kryptik you can access a world of possibilities across 10+ blockchains from a single app. One secure wallet. One simple interface. One magical future.",
        photoPath:"/media/projects/logoKryptik.jpg",
        socials:{
            site:"https://kryptik.app/",
            twitter:"https://twitter.com/kryptikapp",
            github:"https://github.com/KryptikApp"
        }
    },
    {
        name:"OtterSec",
        description:"Smart contract audits with a proven track record in both traditional security and Web3. OtterSec has reports against popular protocols like Saber, Jet, Switchboard, and more.",
        photoPath:"/media/projects/logoOsec.png",
        socials:{
            site:"https://osec.io/",
            twitter:"https://twitter.com/osec_io",
            github:"https://github.com/otter-sec"
        }
    },
    {
        name:"The Fashionverse",
        description:"Enables self-expression for virtual identities by creating, marketing, and selling digital fashion for businesses like luxury fashion brands, select NFT communities, and celebrity-sponsored social campaigns.",
        photoPath:"/media/projects/logoFashionverse.jpg",
        socials:{
            site:"https://www.thefashionverse.io/",
            twitter:"https://twitter.com/FashionVerseInc"
        }
    },
    {
        name:"Innoco",
        description:"A decentralized incubator for young crypto founders. Innoco organizes world-wide hacker houses, faciliatates connections, and sources funding for founders. Previous partners include Polygon and Sui.",
        photoPath:"/media/projects/logoInnoco.png",
        socials:{
            site:"https://innovation-collective.xyz/",
            twitter:"https://twitter.com/innoco_club"
        }
    }
]


export const CallsForSubmission22Fall:IProject[] = [
    {
        name:"Ethereum Node",
        description:"Set up an Ethereum node and maintain it for the semester. The club will purchase the hardware and provide a small monthly stipend.",
        photoPath:"/media/projects/logoEthereum.png",
        tag: TopicTag.infrastructure
    },
    {
        name:"Web3 Login",
        description:"Update our club website to be Web3 enabled. Members should be able to connect their wallets and 'sign in with ethereum'.",
        photoPath:"/cbgLogo.png",
        tag: TopicTag.identity
    },
    {
        name:"Onchain Voting",
        description:"Build a website where people can create and vote on proposals. Both votes and proposals will be stored on the blockchain.",
        photoPath:"/media/projects/ballotBox.jpg",
        tag:TopicTag.privacy
    },
    {
        name:"Build Your Own",
        description:"If you have an idea for a decentralized application, build it! The club will help with funding and team creation.",
        photoPath:"/media/profiles/gradientSquare.jpg",
    },
    // {
    //     name:"NEAR Validator",
    //     description:"Set up a NEAR validator and maintain it for the semester. The club will purchase the hardware and provide a small monthly stipend.",
    //     photoPath:"/media/projects/logoNEAR.png",
    // }
]