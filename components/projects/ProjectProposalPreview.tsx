import { NextPage } from "next";

import { IProject, TopicTag } from "../../src/labs/projects/models";
import Socials from "../Socials";
import TopicTagBubble from "../tags/TopicTagBubble";

interface Props {
    project:IProject
}

const ProjectProposalPreview:NextPage<Props> = (props) => {
    const{project} = {...props};
    
    const tag:TopicTag|undefined = project.tag;
    function handleProposalClicked(): void {
        console.log("Hey!");
    }

    return(
        <div className="">
            <div className="mx-auto hover:z-10 rounded-md drop-shadow-lg border border-gray-200 bg-slate-50 dark:bg-black transition ease-in-out hover:scale-105 hover:border-purple-400 max-w-[400px] py-4 px-2 min-h-[240px]" onClick={()=>handleProposalClicked()}>
                <div className="">
                    <div className="flex flex-col space-y-4 px-2">
                        <div className="flex flex-row my-2">
                            <div className="">
                                <img src={project.photoPath} className="inline rounded-full w-10 h-10 object-cover dark:bg-black"/>
                                <p className="inline ml-2 text-xl text-gray-500 dark:text-gray-200 font-bold">{project.name}</p>
                            </div>
                            {
                                tag!=undefined &&
                                <div className="ml-4">
                                <div>
                                    <TopicTagBubble tag={tag}/>
                                </div>
                                </div>
                            }
                        </div>
                        <p className="text-lg text-slate-800 dark:text-slate-200">{project.description}</p>
                        <div className="mt-2">
                                <div className="float-right">
                                    {
                                        project.socials && 
                                        <Socials socials={project.socials}/>
                                    }
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectProposalPreview;



