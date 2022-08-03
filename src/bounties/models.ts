export interface IBounty{
    sponsor:ISponsor,
    task:ITask,
    link:string,
    prize:string
}

export interface ITask{
    name:string,
    description:string
}

export interface ISponsor{
    name:string,
    photoPath:string
}