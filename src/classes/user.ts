export class user{
    login: string ="";
    company:string ="";
    avatarUrl:string="";
    followers:number=0;
    following:number=0;
    location:string="";
    url:string="";
    name:string;

constructor(login:string,company:string,avatarUrl:string,followers:number,following:number,location:string,url:string,name:string)
{
    this.login=login;
    this.company=company;
    this.avatarUrl=avatarUrl;
    this.followers=followers;
    this.following=following;
    this.location=location;
    this.url=url;
    this.name=name;
}
}