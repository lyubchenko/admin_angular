import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public mainMap: Object[] = [
    {
      id: 1,
      title: 'Forms',
      sid: '/form',
      imgIcon: 'home',
      items: [
        {
          title: 'General Form',
          sid: '/forms'
        },
        {
          title: 'Form wizards',
          sid: '/forms/form_wizards'
        }
      ]
    },
    {
      id: 2,
      title: 'Tables',
      sid: 'tables',
      imgIcon: 'table_chart',
      items: [
        {
          title: 'Tables',
          sid: '/tables'
        },
        {
          title: 'Tables dynamic',
          sid: '/tables/tables_dynamic'
        }
      ]
    },
    {
      id: 3,
      title: 'Additional Pages',
      sid: '/additional_pages',
      imgIcon: 'bug_report',
      items: [
        {
          title: 'E commerce',
          sid: '/additional_pages'
        },
        {
          title: 'Project detail',
          sid: '/additional_pages/project_detail'
        }
      ]
    },
    {
      id: 4,
      title: 'Data Presentation',
      sid: '/chart',
      imgIcon: 'bar_chart',
      items: [
        {
          title: 'D3.js',
          sid: '/chart/d3'
        }
      ]
    }
  ];
  constructor() {

  }

  ngOnInit() {

}

}
