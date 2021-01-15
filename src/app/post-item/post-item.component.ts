import { getCurrencySymbol } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() postName!: string;
  @Input() postContent!: string;
  @Input() postcreated_at!: Date;
  @Input() postloveIts!: number;

  isAuth=false;
  constructor() {
    setTimeout(
      () =>{
        this.isAuth = true;
      }, 2000
    );
    
   }

  ngOnInit(): void {
  }

  checkStatus(postloveIts: number){
    if(postloveIts>0)
    {
      return 'positif'
    }
  if(postloveIts<0)
    {
      return 'négatif'
    } 
    return 'neutre'
  }

  clickLove(){
    this.postloveIts = this.postloveIts + 1;
  }

  clickUnLove(){
    this.postloveIts = this.postloveIts - 1;
  }

}
