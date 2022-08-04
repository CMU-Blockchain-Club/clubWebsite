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
        description:"Smart contract audits with a focus on the Solana ecosystem.",
        photoPath:"/media/projects/logoOsec.png",
        socials:{
            site:"https://osec.io/",
            twitter:"https://twitter.com/osec_io",
            github:"https://github.com/otter-sec"
        }
    }
]