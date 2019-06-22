import { Component, OnInit } from '@angular/core';
import {Topic} from '../../../models/topic';
import {Router} from '@angular/router';
import {TopicService} from '../../../services/topic.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  newTopic: Topic;

  constructor(
    private router: Router,
    private topicSrv: TopicService,
    private toastr: ToastrService
  ) {
    this.newTopic = new Topic();
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/topic');
  }

  addTopic() {
    this.topicSrv.save(this.newTopic).subscribe(result => {
      if (result.retCode === 0) {
        this.toastr.success('Save topic success!', 'Note');
        this.router.navigateByUrl('/topic/');
      } else {
        this.toastr.error('Failed to save topic!', 'Note');
      }
    });
  }

}
