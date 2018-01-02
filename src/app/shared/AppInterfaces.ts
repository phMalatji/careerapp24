export interface IJob {
    title:string,
    description:string,
    province:string,
    skills:[{
        id:number,
        name:string
    }],
    datePosted:number,
    dateClosing:number,
    remun:number,
  
    sector:string
}
export interface IBook {
title:string,
genre:string,
read:boolean
}

  export interface Contact {
      $key: string;
      name: string;
      phone: string;
      imageUrl?:string;
  }

  export interface Skill {
      id:number,
      name:string
  }

  export interface IUser {
      email:string,
      password:string,
      name:string,
      cellNo:number,
      idNo:number,
      currentLocation:string,
      userType?:string
  }