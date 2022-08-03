import { NextPage } from "next";
import { CMUBrand } from "../src/brand";

interface Props {
    hexColor?:string
}

const Footer:NextPage<Props> = (props) => {
    const{hexColor} = {...props};

    return(
        <div className="h-full px-4 py-10 max-w-screen text-white" style={{backgroundColor:`${CMUBrand.red}`}}>

        <div className="flex flex-row">

        <div className="text-xl font-semibold">
        <a className="hover:text-sky-400" href="https://jetthays.com" target="_blank" rel="noopener noreferrer">Made by Jett✈️</a>
        </div>

        <div className="flex-grow place-items-right text-2xl font-semibold">
            <div className="flex flex-row space-x-4 float-right">
                    <a className="text-slate-200 hover:text-slate-300 dark:text-slate-600" href="https://twitter.com/CMUBlockchain" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a className="text-slate-200 hover:text-slate-300 dark:text-slate-600" href="https://discord.gg/9Pqq6nnwU2" target="_blank" rel="noopener noreferrer">Discord</a> 
                    <a className="text-slate-200 hover:text-slate-300 dark:text-slate-600" href="mailto:cmu.blockchain.group@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
                    
        </div>

        </div>
        </div>
    )
}

export default Footer;