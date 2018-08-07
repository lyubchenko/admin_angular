import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input() title: string;
  @Input() isOpenAtStart: boolean = false;
  @Input() isBlockOpen: boolean = false;
  @Input() contentShow: boolean = false;
  @Input() ImgClass: string;

  constructor() {}

   ngOnInit() {
      if (this.isOpenAtStart) {
        this.contentShow = true;
        this.toggleBlock();
      }
   }

   toggleBlock(): void {
     this.contentShow = true;
     this.isBlockOpen = !this.isBlockOpen;
   }
}
