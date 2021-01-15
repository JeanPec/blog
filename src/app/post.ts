export class Post {
    name: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(name_: string, content_: string){
        this.name=name_;
        this.content=content_;
        this.loveIts=0;
        this.created_at=new Date();
    }
}