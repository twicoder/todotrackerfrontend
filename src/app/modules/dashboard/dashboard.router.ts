import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginGuard} from '../../guards/login.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [LoginGuard],
    children: [
      {
        path: 'topic', loadChildren: '../topic/topic.module#TopicModule'
      },
      {
        path: 'knowledge', loadChildren: '../knowledge/knowledge.module#KnowledgeModule'
      },
      {
        path: 'learningresource', loadChildren: '../learningresource/learningresource.module#LearningresourceModule'
      },
      { path: '**', redirectTo: 'topic' }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouterModule {
}
