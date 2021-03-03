import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  click !: boolean;

  constructor() { }

  ngOnInit(): void {
    this.click=false;
  }

  showNavbar(){
    const element = document.getElementById("navbarSupportedContent");
    if(this.click){
      element?.classList.remove("show");
      this.click=false;
    } else {
      element?.classList.add("show");
      this.click=true;
    }
  }

}
