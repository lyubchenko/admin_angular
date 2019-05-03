import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() subtitle?: string;
  @Input() showCloseBtn?: boolean = true;
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() collapseEvent = new EventEmitter<boolean>();

  public showContent: boolean = true;
  public destroyPanel: boolean = false;

  constructor() {}

  ngOnInit() {}

  slideToggle($event): void {
    $event.preventDefault();
    this.showContent = !this.showContent;
  }

  destroyComponent($event): void {
    $event.preventDefault();
    this.destroyPanel = true;
  }

  ngOnDestroy() {}
}
