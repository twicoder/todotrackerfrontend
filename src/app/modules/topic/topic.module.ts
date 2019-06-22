import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTopicComponent } from './list-topic/list-topic.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { UpdateTopicComponent } from './update-topic/update-topic.component';
import { TopicRouterModule } from './topic.router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListTopicComponent, AddTopicComponent, UpdateTopicComponent],
  imports: [
    CommonModule,
    TopicRouterModule,
    FormsModule
  ]
})
export class TopicModule { }
