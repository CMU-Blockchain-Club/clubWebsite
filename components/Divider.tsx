import { NextPage } from "next";

interface Props {
    hexColor?:string
}

const Divider:NextPage<Props> = (props) => {
    const{hexColor} = {...props};

    return(
        <div>
        {
            hexColor?
            <div className={`w-full h-1 my-1`} style={{backgroundColor:`${hexColor}`}}/>:
            <div className="w-full h-1 bg-black dark:bg-white my-1"/>
        }
        </div>
        
    )
}

export default Divider;
