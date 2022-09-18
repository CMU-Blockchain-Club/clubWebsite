import { ISocials } from "../../members/models";

export interface IProject{
    name:string,
    description?:string,
    photoPath:string,
    socials?:ISocials,
    tag?:TopicTag
}

export enum TopicTag{
    identity = 0,
    privacy = 1,
    infrastructure = 2
}

export const topicTagToUiString = function(tag:TopicTag):string{
    switch(tag){
        case(TopicTag.identity):{
            return "Identity"
        }
        case(TopicTag.infrastructure):{
            return "Infra"
        }
        case(TopicTag.privacy):{
            return "Privacy"
        }
        default:{
            return "Web3"
        }
    }
}