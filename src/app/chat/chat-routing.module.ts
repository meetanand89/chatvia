import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatLayoutComponent } from './layout/chat-layout/chat-layout.component';
import { ChatContentComponent } from './components/chat-content/chat-content.component';
import { TestComponent } from './components/test/test.component';
import { ChatsComponent } from './components/chats/chats.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [

  {
    path: '',
    component: ChatLayoutComponent,    
    children: [
      // {
      //   path: 'chat-content',
      //   component: ChatContentComponent,
      // }, 
      // {
      //   path: '',
      //   redirectTo: 'chat-content',
      //   pathMatch: 'full'
      // },
      {
        path: 'test',
        component: TestComponent,
      }, 
      {
        path: 'chats',
        component: ChatsComponent,
      }, 
      {
        path: 'groups',
        component: GroupsComponent,
      }, 
      {
        path: 'contacts',
        component: ContactsComponent,
      }, 
      {
        path: 'settings',
        component: SettingsComponent,
      }, 
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
