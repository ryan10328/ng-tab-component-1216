import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any[] = [
    {title: 'aaa', subTitle: 'aaaa', content: 'aaaaa'},
    {title: 'bbb', subTitle: 'bbbb', content: 'bbbbb'},
    {title: 'ccc', subTitle: 'cccc', content: 'ccccc'}
  ];

  frm: FormGroup;
  obj: any = {};

  ngOnInit() {
    this.frm = new FormGroup({
      tabControl: new FormControl({value: '', disabled: false})
    });
  }

}
