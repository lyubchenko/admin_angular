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
      title: 'Home',
      sid: '',
      imgIcon: 'home',
      items: [
        {
          title: 'link 1',
          sid: '/link_1'
        }
      ]
    },
    {
      id: 2,
      title: 'Forms',
      sid: '/form',
      imgIcon: 'home',
      items: [
        {
          title: 'General Form',
          sid: '/form'
        },
        {
          title: 'Form wizards',
          sid: '/form/form_wizards'
        }
      ]
    },
    {
      id: 3,
      title: 'Tables',
      sid: 'tables',
      imgIcon: 'bug_report',
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
      id: 4,
      title: 'Additional Pages',
      sid: '/additional_pages',
      imgIcon: 'bug_report',
      items: [
        {
          title: 'E commerce',
          sid: 'e_commerce'
        },
        {
          title: 'Project detail',
          sid: 'project_detail'
        }
      ]
    },
    {
      id: 5,
      title: 'Data Presentation',
      sid: '/chart',
      imgIcon: 'bar_chart',
      items: [
        {
          title: 'D3.js',
          sid: 'd3'
        }
      ]
    }
  ];
  constructor() {

  }

  ngOnInit() {

}

}
