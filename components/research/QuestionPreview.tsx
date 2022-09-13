import { timeLog } from "console";
import { NextPage } from "next";
import { useEffect } from "react";

import { IProject } from "../../src/labs/projects/models";
import { IResearchQuestion } from "../../src/labs/research/models";
import Socials from "../Socials";

interface Props {
    rq:IResearchQuestion
}

const QuestionPreview:NextPage<Props> = (props) => {
    const{rq} = {...props};
    let titleColor = "#000000"

    useEffect(()=>{
        if(!document) return;
        let container = document.getElementById(rq.question+"Container");
        if(!container) return;
        let title = document.getElementById(rq.question);
        if(!title) return;
        titleColor = title.style.color;
        container.addEventListener('mouseenter', function(e){
            let title = document.getElementById(rq.question);
            if(!title) return;
            title.style.color = "#a14fe3";
        });
        container.addEventListener('mouseleave', function(e){
            let title = document.getElementById(rq.question);
            if(!title) return;
            title.style.color = titleColor;
        });
    }, [])


    return(
        <div className="">
            <div id={rq.question+"Container"} className="flex flex-col space-y-4 px-2 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md hover:shadow-purple-400">
                        <div className="flex flex-row">
                            <div className="my-2">
                                <p id={rq.question} className="inline text-gray-500 dark:text-gray-200 font-bold text-4xl">{rq.question}</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-800 dark:text-slate-200">{rq.description}</p>
            </div>
        </div>
    )
}

export default QuestionPreview;