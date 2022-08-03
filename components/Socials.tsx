import { NextPage } from "next";
import { ISocials } from "../src/members/models";
import { removeHttp } from "../src/utils/links";

interface Props {
    socials:ISocials
}

const Socials:NextPage<Props> = (props) => {
    const {socials} = {...props}
    return(
        <div className="w-full flex flex-row space-x-2">
            
            {
                socials.github &&
                <a href={`${socials.github}`} className="hover:cursor-pointer text-xl text-slate-500" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8 rounded-full" src="/media/social/logoGithub64.png"/>
                </a>
            }
            {
                socials.twitter &&
                <a href={`${socials.twitter}`} className="hover:cursor-pointer text-xl text-slate-500" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8 rounded-full" src="/media/social/logoTwitterBlue.svg"/>
                </a>
            }
            {
                socials.site && 
                <a href={`${socials.site}`} className="hover:cursor-pointer text-xl text-slate-400 font-semibold pb-2" target="_blank" rel="noopener noreferrer">
                    <div className="p-1 rounded-lg bg-slate-200 drop-shadow-sm">
                        <p>{removeHttp(socials.site)}</p>
                    </div>
                </a>
            }
        </div>
        
    )
}

export default Socials;