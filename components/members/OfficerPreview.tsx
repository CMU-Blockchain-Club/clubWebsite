import { NextPage } from "next";
import { boardPositionToUiString, IBoardMember, IMember } from "../../src/members/models";

interface Props {
    member:IBoardMember
}
const OfficerPreview:NextPage<Props> = (props) => {
    const{member} = {...props};
    const boardPositionString:string = boardPositionToUiString(member.boardData.position);

    const handleMemberClicked = function(){

    }

    return(
        <div className="">
            <div className="mx-auto hover:z-10 transition ease-in-out hover:scale-110" onClick={()=>handleMemberClicked()}>
                <img src={member.photoPath} className="hover:shadow-md hover:shadow-purple-400 w-64 h-64 rounded-md drop-shadow-lg object-cover"/>
                <div className="flex flex-col space-y-1">
                    <p className="text-lg text-gray-300 dark:text-gray-400 font-semibold">{member.name}</p>
                    <p className="text-md text-gray-300 dark:text-gray-400">{boardPositionString}</p>
                </div>
            </div>
        </div>
    )
}

export default OfficerPreview;