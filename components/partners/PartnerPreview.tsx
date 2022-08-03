import { NextPage } from "next";
import { useEffect, useState } from "react";

import { IPartner } from "../../src/partners/models";

interface Props {
    partner:IPartner
}

const PartnerPreview:NextPage<Props> = (props) => {
    const{partner} = {...props};
    const cardId = partner.name;
    const [showLink, setShowLink] = useState(false);

    

    useEffect(()=>{
        if (typeof document !== 'undefined') {
        document.addEventListener("DOMContentLoaded", function(event) { 
            // show link on hover
            document.getElementById(cardId)?.addEventListener("mouseenter", ()=>{
                setShowLink(true);
            })
    
            document.getElementById(cardId)?.addEventListener("mouseleave", ()=>{
                setShowLink(false);
            })
        });
        }
    }, [])

    

    const handleMemberClicked = function(){

    }

    return(
        <div id={cardId} className="w-[100%]">
            <div className="mx-auto hover:z-10 rounded-md drop-shadow-lg border border-gray-200 bg-slate-50 dark:bg-slate-100 hover:cursor-pointer transition ease-in-out hover:scale-105 min-h-[200px] max-w-[70vw]" onClick={()=>handleMemberClicked()}>
                <a className="hover:cursor-pointer text-xl text-slate-500" href={partner.link} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col space-y-4 px-2">
                    <div className="flex flex-row">
                    <p className="my-2 text-lg text-gray-500 font-bold">{partner.name}</p>
                        <div className="flex-grow text-right mt-2">
                            {
                                showLink &&
                                <p>&#129133;</p>
                                    	
                                
                            }
                        </div>
                    </div>
                    <div className="mx-auto w-[90%]">
                        <img src={partner.photoPath} className="w-full h-auto  object-cover"/>
                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}

export default PartnerPreview;