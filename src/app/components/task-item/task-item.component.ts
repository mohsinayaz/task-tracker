import { TmplAstElement } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/tasks.interface';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deletedTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();
  faTimes = faTimes;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDelete(task) {

    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '358px',
      panelClass: 'custom-confirm-component-modal',
      autoFocus: false,
  });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deletedTask.emit(task);
      }
      console.log(`Dialog result: ${result}`);
    });


  }

  changeReminder(task: Task) {
    this.toggleReminder.emit(task);
  }
}
