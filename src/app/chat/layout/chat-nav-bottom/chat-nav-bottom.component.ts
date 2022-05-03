import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-nav-bottom',
  templateUrl: './chat-nav-bottom.component.html',
  styleUrls: ['./chat-nav-bottom.component.scss']
})
export class ChatNavBottomComponent implements OnInit {

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
