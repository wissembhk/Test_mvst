export class repositorie{
    name:string="";
    visibility:string="";
    url:string="";
    description:string="";
    created_at:string;
    updated_at:string;
    language:string;

constructor(name:string,visibility:string,url:string,description:string,createdate:string,updatedon:string,language:string){
    this.name=name;
    this.visibility=visibility;
    this.url=url;
    this.description=description;
    this.created_at=createdate;
    this.updated_at=updatedon;
    this.language=language;

}

}