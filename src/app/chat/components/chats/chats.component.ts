import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatContentComponent } from '../chat-content/chat-content.component';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  showChatSlide: boolean = false;


  @ViewChild('chatContainer', { static: true, read: ViewContainerRef }) chatEntry!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  messageTab() {
    this.showChatContentInSlide();
    this.showChatSlide = true;
    console.log('this.showChatSlide =>', this.showChatSlide);
  }

  showChatContentInSlide(): any {
    this.clearEntry();
    const factory = this.resolver.resolveComponentFactory(ChatContentComponent);
    this.chatEntry.createComponent(factory);
  }

  clearEntry(): any {
    this.chatEntry.clear();     
  }

}
