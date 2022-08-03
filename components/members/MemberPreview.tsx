import { NextPage } from "next";
import { IMember } from "../../src/members/models";

interface Props {
    member:IMember
}
const MemberPreview:NextPage<Props> = (props) => {
    const{member} = {...props};

    const handleMemberClicked = function(){

    }

    return(
        <div className="">
            <div className="mx-auto hover:z-10 transition ease-in-out hover:scale-110" onClick={()=>handleMemberClicked()}>
                <img src={member.photoPath} className="hover:saturate-0 w-64 h-64 rounded-md drop-shadow-lg object-cover"/>
                <div className="flex">
                    <p className="my-2 text-lg text-gray-300 dark:text-gray-400 font-semibold">{member.name}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberPreview;