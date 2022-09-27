import { NextPage } from "next";
import { useRouter } from "next/router";
import { IMember } from "../../src/members/models";

interface Props {
    member:IMember
}
const MiniMemberPreview:NextPage<Props> = (props) => {
    const{member} = {...props};
    const router = useRouter()

    const handleMemberClicked = function(){
        if(member.socials.twitter){
            window.open (member.socials.twitter, '_ blank', "noopener noreferrer");
        }
        else if(member.socials.site){
            window.open (member.socials.site, '_ blank', "noopener noreferrer");
        }
        else if(member.socials.github){
            window.open (member.socials.github, '_ blank', "noopener noreferrer");
        }
    }

    return(
            <div className="w-full border hover:border-purple-500 transition ease-in-out flex flex-row rounded-md space-x-2 hover:cursor-pointer" onClick={()=>handleMemberClicked()}>
                <img src={member.photoPath} className="w-32 h-32 rounded-tl-md rounded-bl-md object-cover" alt={`${member.name} photo`}/>
                <div className="flex flex-col space-y-2 flex-grow min-w-0">
                    <p className="text-lg text-gray-300 dark:text-gray-400 font-semibold">{member.name}</p>
                    {
                        member.description && 
                        <p className="text-sm text-gray-400 dark:text-gray-500">{member.description}</p>
                    }
                </div>
            
            </div>
            
    )
}

export default MiniMemberPreview;