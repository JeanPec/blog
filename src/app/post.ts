export class Post {
    name: string;
    content: string;
    loveIts: number;
    createdAt: number;

    constructor(name_: string, content_: string){
        this.name=name_;
        this.content=content_;
        this.loveIts=0;
        this.createdAt=new Date().getTime();
    }
}