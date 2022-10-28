import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Output() btnClick = new EventEmitter();
  color: any;
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
  onMouseOver(): void {
    const addbtn = this.uiService.showTask;
    if(addbtn){
      this.color = "red"
    }else {
      this.color = '#5cbd5c'
    }
  }
  onMouseOut():void{
    this.color = 'rgba(0, 0, 0, 0.5)';
  }
}
