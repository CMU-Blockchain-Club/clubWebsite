import { ISocials } from "../../members/models";

export interface IProject{
    name:string,
    description?:string,
    photoPath:string,
    socials?:ISocials
}