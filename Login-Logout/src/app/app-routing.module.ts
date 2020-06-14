import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './features/tickets/tickets.component';
import { KnowledgebaseComponent } from './features/knowledgebase/knowledgebase.component';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'sign-up', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  { path: 'tickets', component: TicketsComponent,canActivate:[AuthGuard] },
  { path: 'knowledgebase', component: KnowledgebaseComponent },
  { path: 'knowledgebase', component: KnowledgebaseComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [UserComponent, LoginComponent, SignUpComponent, TicketsComponent, KnowledgebaseComponent, PagenotfoundComponent]
