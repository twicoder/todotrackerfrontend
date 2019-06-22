import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.css']
})
export class ListTopicComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  addTopic() {
    this.router.navigateByUrl('/topic/addtopic');
  }
}
