import { Component, OnInit } from '@angular/core';

import { AppBasicService } from 'app/services/app-basic/app-basic.service';

import { IMainMenu } from 'app/interfaces/main-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public mainMap: IMainMenu[] = [];

  constructor(
    private appBasic: AppBasicService
  ) {}

  ngOnInit() {
    this.appBasic.getMainMenu()
      .subscribe( (data: IMainMenu[]) => this.mainMap = data);

  }

  public createRouterLink(categoryMenu, item): string {
    let url: string = '/' + categoryMenu.sid;
    if (item.sid && item.sid.length) {
      url += '/' + item.sid;
    }
    return url;
  }

}
