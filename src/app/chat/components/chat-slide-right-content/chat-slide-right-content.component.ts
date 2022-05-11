import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-slide-right-content',
  templateUrl: './chat-slide-right-content.component.html',
  styleUrls: ['./chat-slide-right-content.component.scss']
})
export class ChatSlideRightContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rightSideBar_1(){
    // alert("Hai");
    // document.getElementById("").hide;
    document.getElementById("risht-side-menu").style.display="none";
  
  }

}
