import { Component, OnInit } from '@angular/core';
import {Task} from "protractor/built/taskScheduler";

@Component({
  selector: 'app-displays-tasks',
  templateUrl: './displays-tasks.component.html',
  styleUrls: ['./displays-tasks.component.css']
})
export class DisplaysTasksComponent implements OnInit {

  private taskTableHeader: string[] = ['Task id', 'Year', 'Month', 'Comment', 'Sart Time', 'End Time', 'Edit', 'Delete'];

  tasks: Task[] = [
    {taskId: 'LT-4545', year: 2017, month: 10, day: 11, comment: 'Valami kommentelés...', startTime: '10:15', endTime: '11:45'},
    {taskId: 'LT-4545', year: 2017, month: 10, day: 11, comment: 'Valami kommentelés...', startTime: '12:15', endTime: '13:45'},
    {taskId: 'LT-4545', year: 2017, month: 10, day: 11, comment: 'Valami kommentelés...', startTime: '14:15', endTime: '15:45'},
    {taskId: 'LT-4545', year: 2017, month: 10, day: 11, comment: 'Valami kommentelés...', startTime: '16:15', endTime: '17:45'},
    {taskId: 'LT-4545', year: 2017, month: 10, day: 11, comment: 'Valami kommentelés...', startTime: '18:15', endTime: '19:45'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
