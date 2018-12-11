import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any[] = [
    { title: 'aaa', subTitle: 'aaaa', content: 'aaaaa' },
    { title: 'bbb', subTitle: 'bbbb', content: 'bbbbb' },
    { title: 'ccc', subTitle: 'cccc', content: 'ccccc' }
  ];
}
