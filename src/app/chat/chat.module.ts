import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatLayoutComponent } from './layout/chat-layout/chat-layout.component';
import { ChatHeaderComponent } from './layout/chat-header/chat-header.component';
import { ChatNavbarComponent } from './layout/chat-navbar/chat-navbar.component';
import { ChatFooterComponent } from './layout/chat-footer/chat-footer.component';
import { TestComponent } from './components/test/test.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatContentComponent } from './components/chat-content/chat-content.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChatsComponent } from './components/chats/chats.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SettingsComponent } from './components/settings/settings.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ChatNavBottomComponent } from './layout/chat-nav-bottom/chat-nav-bottom.component';
import { ChatContentSlideComponent } from './components/chat-content-slide/chat-content-slide.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChatSlideRightContentComponent } from './components/chat-slide-right-content/chat-slide-right-content.component';


// import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ChatLayoutComponent,
    ChatHeaderComponent,
    ChatNavbarComponent,
    ChatFooterComponent,
    TestComponent,
    ChatContentComponent,
    ChatsComponent,
    GroupsComponent,
    ContactsComponent,
    SettingsComponent,
    ChatNavBottomComponent,
    ChatContentSlideComponent,
    ChatSlideRightContentComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTooltipModule
    // NgbAccordion
  ]
})
export class ChatModule { }
