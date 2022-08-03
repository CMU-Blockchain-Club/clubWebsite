import { NextPage } from "next";
import { useEffect, useState } from "react";

import { IBlockchainResource } from "../../src/resources/models";

interface Props {
    resource:IBlockchainResource
}

const ResourcePreview:NextPage<Props> = (props) => {
    const{resource} = {...props};
    const cardId = resource.name;
    const [showLink, setShowLink] = useState(false);

    useEffect(()=>{
        if (typeof document !== 'undefined') {
        // show linkon hover
        document.getElementById(cardId)?.addEventListener("mouseenter", ()=>{
            setShowLink(true);
        })

        document.getElementById(cardId)?.addEventListener("mouseleave", ()=>{
            setShowLink(false);
        })
        }
    }, [])

    

    const handleMemberClicked = function(){

    }

    return(
        <div id={cardId} className="">
            <div className="mx-auto hover:z-10 rounded-md drop-shadow-lg border border-gray-200 bg-slate-50 hover:cursor-pointer transition ease-in-out hover:scale-105 max-w-[400px] py-4 min-h-[230px]" onClick={()=>handleMemberClicked()}>
                <a className="hover:cursor-pointer text-xl text-slate-500" href={resource.link} target="_blank" rel="noopener noreferrer">
                <div className="">
                    <div className="flex flex-col space-y-4 px-2">
                        <div className="flex flex-row">
                            <div className=" my-2 ">
                                <img src={resource.photoPath} className="inline rounded-full w-10 h-10 object-cover"/>
                                <p className="inline ml-2 text-xl text-gray-500 font-bold">{resource.name}</p>
                            </div>
                            <div className="flex-grow text-right mt-2">
                                {
                                    showLink &&
                                    <p>&#129133;</p>
                                            
                                    
                                }
                            </div>
                        </div>
                        <p className="text-lg">{resource.description}</p>
                    </div>

                </div>
                </a>
            </div>
        </div>
    )
}

export default ResourcePreview;