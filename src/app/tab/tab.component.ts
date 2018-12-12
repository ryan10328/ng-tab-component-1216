import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() data: any[] = [];
  selectedItem: any;

  constructor() {
  }

  ngOnInit() {
    if (this.data.length > 0) {
      this.selectedItem = this.data[0];
    }
  }

  tabChange(item: any) {
    this.selectedItem = item;
  }
}
