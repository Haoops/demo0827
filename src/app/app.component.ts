import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  title = 'Angular 2 @ 2016/08/27';
  keyword = '';
  data: any[];

  doSearch(keyword: string) {
    this.keyword = keyword;
  }

  delArticle(item) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }

  constructor(private datasvc: DataService) {
    this.data = datasvc.data;
  }

}
