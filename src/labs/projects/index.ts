import { IProject } from "./models";

export const CurrentProjects:IProject[] = [
    {
        name:"Kryptik Wallet",
        description:"Kryptik is a simple wallet that lets you save, send, and collect value across the internet. With Kryptik you can access a world of possibilities across 10+ blockchains from a single app. One secure wallet. One simple interface. One magical future.",
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
    }
]