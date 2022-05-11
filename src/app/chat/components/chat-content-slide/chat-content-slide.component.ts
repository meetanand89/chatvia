import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ChatContentComponent } from '../chat-content/chat-content.component';

@Component({
  selector: 'app-chat-content-slide',
  templateUrl: './chat-content-slide.component.html',
  styleUrls: ['./chat-content-slide.component.scss']
})
export class ChatContentSlideComponent implements OnInit {

  @ViewChild('chatContainer', { static: true, read: ViewContainerRef }) chatEntry!: ViewContainerRef;

 position ="before";
  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.showChatContentInSlide()
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
