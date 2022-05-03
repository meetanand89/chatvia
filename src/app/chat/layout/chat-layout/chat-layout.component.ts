  import { Component, HostListener, OnInit } from '@angular/core';

  @Component({
    selector: 'app-chat-layout',
    templateUrl: './chat-layout.component.html',
    styleUrls: ['./chat-layout.component.scss']
  })
  export class ChatLayoutComponent implements OnInit {

    // showNav: any;

    // innerWidth: any;

    constructor() { }

    ngOnInit(): void {
      // this.showNav = true;
      // this.innerWidth = window.innerWidth;
      // this.onResize();
    }


    // @HostListener('window:resize', ['$event'])
    // onResize() {
    //   this.innerWidth = window.innerWidth;
    //   console.log('this.innerWidth =>', this.innerWidth);
    //   if (this.innerWidth > 1000) {
    //     this.showNav = true;
    //   } else {
    //     this.showNav = false;
    //   }
    // }

  }
