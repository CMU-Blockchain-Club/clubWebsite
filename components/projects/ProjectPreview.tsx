import { NextPage } from "next";

import { IProject } from "../../src/labs/projects/models";
import Socials from "../Socials";

interface Props {
    project:IProject
}

const ProjectPreview:NextPage<Props> = (props) => {
    const{project} = {...props};

    

    const handleMemberClicked = function(){

    }

    return(
        <div className="">
            <div className="mx-auto hover:z-10 rounded-md drop-shadow-lg border border-gray-200 bg-slate-50 transition ease-in-out hover:scale-105 max-w-[400px] py-4 min-h-[230px]" onClick={()=>handleMemberClicked()}>
                <div className="">
                    <div className="flex flex-col space-y-4 px-2">
                        <div className="flex flex-row">
                            <div className=" my-2 ">
                                <img src={project.photoPath} className="inline rounded-full w-10 h-10 object-cover"/>
                                <p className="inline ml-2 text-xl text-gray-500 font-bold">{project.name}</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-800">{project.description}</p>
                        <div className="mt-2">
                                <div className="float-right">
                                <Socials socials={project.socials}/>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectPreview;