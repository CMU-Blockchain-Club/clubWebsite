import { NextPage } from "next";

import { IProject, TopicTag, topicTagToUiString } from "../../src/labs/projects/models";
import Socials from "../Socials";

interface Props {
    tag:TopicTag
}

const TopicTagBubble:NextPage<Props> = (props) => {
    const{tag} = {...props};

    const tagName:string = topicTagToUiString(tag);

    return(
        <div className="">
            <div className="px-4 py-1 hover:z-10 rounded-lg border border-gray-200 transition ease-in-out hover:border-purple-400 text-slate-900 dark:text-slate-100 font-semibold text-md">
                <p>{tagName}</p>
            </div>
        </div>
    )
}

export default TopicTagBubble;