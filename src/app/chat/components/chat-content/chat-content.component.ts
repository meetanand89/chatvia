import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rightSideBar(){
    // alert("Hai");
    // document.getElementById("").hide;
    document.getElementById("risht-side-menu").style.display="block"
 
  }
  

}
