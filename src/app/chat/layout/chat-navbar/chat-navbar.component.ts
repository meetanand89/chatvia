import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss']
})
export class ChatNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
  }

  isLinkActive(url: string): boolean {
    const queryParamsIndex = this.router.url.split('?');
    const baseUrl = queryParamsIndex[0];
    return baseUrl === url;
  }

  navigateTo(url:string) {
    this.router.navigate([url]);
  }
  
  
}
