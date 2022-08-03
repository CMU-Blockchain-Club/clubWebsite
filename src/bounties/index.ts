import { IBounty } from "./models";

export const CurrentBounties:IBounty[] = [
    {
        sponsor:{
            name: "Kryptik Wallet",
            photoPath: "/media/projects/logoKryptik.jpg"
        },
        task:{
            name: "Add Cosmos Address Generator",
            description:"Update a heirarchical deterministic seedloop, to generate standard Cosmos addresses."
        },
        link:"https://github.com/KryptikApp/kryptik-seedloop/issues/1",
        prize:"$200"
    }
]