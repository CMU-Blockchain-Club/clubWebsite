export interface IMember{
    name:string,
    description?:string,
    photoPath:string,
    socials:ISocials
}

export interface ISocials{
    site?:string,
    twitter?:string,
    github?:string,
    linkedIn?:string
}


export interface IBoardMember extends IMember{
    boardData:IBoardData
}


export interface IBoardData{
    position:BoardPosition
}

export enum BoardPosition{
    president = 0,
    vicePresident = 1,
    treasurer = 2,
    general = 3,
    marketing = 4,
    governance = 5
}

export const boardPositionToUiString = function(position:BoardPosition):string{
    switch(position){
        case(BoardPosition.president):{
            return "President"
        }
        case(BoardPosition.vicePresident):{
            return "Vice President"
        }
        case(BoardPosition.treasurer):{
            return "Finance"
        }
        case(BoardPosition.governance):{
            return "Governance"
        }
        case(BoardPosition.marketing):{
            return "Marketing"
        }
        default:{
            return "Officer"
        }
    }
}