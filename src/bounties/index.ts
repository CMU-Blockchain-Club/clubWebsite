import { IBounty } from "./models";

export const CurrentBounties:IBounty[] = [
    {
        sponsor:{
            name: "Kryptik Wallet",
            photoPath: "/media/projects/logoKryptik.jpg"
        },
        task:{
            name: "Add Cosmos Address Generator",
            description:"Update a key manager to generate standard Cosmos addresses."
        },
        link:"https://github.com/KryptikApp/kryptik-seedloop/issues/1",
        prize:"$200"
    },
    {
        sponsor:{
            name: "CMU Blockchain Group",
            photoPath: "/cbgLogo.png"
        },
        task:{
            name: "Add WalletConnect",
            description:"Allow users to connect their mobile wallet to a sample dApp."
        },
        link:"https://github.com/CMU-Blockchain-Club/dappStarter/issues/1",
        prize:"$50"
    }
]
