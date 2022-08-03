import { NextPage } from "next";
import { IBounty } from "../../src/bounties/models";


interface Props {
    bounty:IBounty
}

const BountyPreview:NextPage<Props> = (props) => {
    const{bounty} = {...props};

    

    const handleMemberClicked = function(){

    }

    return(
        <div className="">
            <div className="mx-auto hover:z-10 rounded-md drop-shadow-lg border border-gray-200 bg-slate-50 transition ease-in-out hover:scale-105 max-w-[400px] py-4 min-h-[230px]" onClick={()=>handleMemberClicked()}>
                <div className="">
                    <div className="flex flex-col space-y-4 px-2">
                        <div className="flex flex-row">
                            <div className="">
                                <img src={bounty.sponsor.photoPath} className="inline rounded-full w-6 h-6 object-cover"/>
                                <p className="inline ml-2 text-md text-gray-500 font-semibold">{bounty.sponsor.name}</p>
                            </div>
                            <div className="flex-grow">
                                <div className="float-right mr-2">
                                    <p className="text-lg text-slate-400 font-semibold">{bounty.prize}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mb-2">
                            <div className="">
                                <p className=" text-xl text-gray-600 font-bold">{bounty.task.name}</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-800">{bounty.task.description}</p>
                        <div className="mt-2">
                                <div className="float-right ">
                                <a href={`${bounty.link}`} className="hover:cursor-pointer p-2 bg-gray-100 rounded-lg text-green-400 text-xl font-semibold hover:bg-green-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    Start
                                </a>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BountyPreview;