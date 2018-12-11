import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  data: any[] = [];
  selectedItem: any;

  constructor() {}

  ngOnInit() {
    this.data = [
      { title: 'aaa', subTitle: 'aaaa', content: 'aaaaa' },
      { title: 'bbb', subTitle: 'bbbb', content: 'bbbbb' },
      { title: 'ccc', subTitle: 'cccc', content: 'ccccc' }
    ];

    if (this.data.length) {
      this.selectedItem = this.data[0];
    }
  }

  tabChange(item: any) {
    this.selectedItem = item;
  }
}
