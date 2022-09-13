import { NextPage } from "next";

import { IProject } from "../../src/labs/projects/models";
import { IResearchQuestion } from "../../src/labs/research/models";
import Socials from "../Socials";

interface Props {
    rq:IResearchQuestion
}

const QuestionPreview:NextPage<Props> = (props) => {
    const{rq} = {...props};

    

    const handleMemberClicked = function(){

    }

    return(
        <div className="">
            <div className="flex flex-col space-y-4 px-2 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex flex-row">
                            <div className="my-2">
                                <p className="inline hover:text-purple-400 text-gray-500 dark:text-gray-200 font-bold text-4xl">{rq.question}</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-800 dark:text-slate-200">{rq.description}</p>
            </div>
        </div>
    )
}

export default QuestionPreview;