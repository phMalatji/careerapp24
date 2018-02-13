export interface IJob {
    _id?:string,
    title:string,
    desc:string,
    remun:number,
    company:string,
    industry:string,
    province:string,
    skills:[{
        id:number,
        name:string
    }],
    datePosted:number,
    dateClosing:number
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
      _id?:string,
      email?:string,
      password?:string,
      name?:string,
      surname?:string
  }