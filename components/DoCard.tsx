import { NextPage } from "next";
import { title } from "process";
import { useEffect } from "react";
import Divider from "./Divider";

interface Props {
    title:string,
    description:string,
    hexColor:string
}



const DoCard:NextPage<Props> = (props) => {
    const{hexColor, title, description} = {...props};
    const cardId = title;
    const cardTitleId = cardId + "Title";
    // TODO: UPDATE TO SUPPORT DARK MODE
    const defaultTitleColor = "black";

    useEffect(()=>{
        if (typeof document !== 'undefined') {
        // change title color on hover
        document.getElementById(cardId)?.addEventListener("mouseenter", ()=>{
            let cardTitle = document.getElementById(cardTitleId);
            if(!cardTitle) return;
            cardTitle.style.color = hexColor;
        })

        // uncomment below to revert to default color on mouse out
        // ensure defauylt color works for both light and dark

        // document.getElementById(cardId)?.addEventListener("mouseleave", ()=>{
        //     let cardTitle = document.getElementById(cardTitleId);
        //     if(!cardTitle) return;
        //     cardTitle.style.color = defaultTitleColor;
        // })
        }
    }, [])
    
    

    return(
        <div id={cardId} className={`flex flex-col p-2 min-h-[260px] rounded-md`}>
                <h1 id={cardTitleId} className={`font-bold text-5xl`}>
                    {title}
                    <Divider/>
                  </h1>
                  <p className="text-xl">
                  {description}
                  </p>
        </div>
        
    )
}

export default DoCard;
