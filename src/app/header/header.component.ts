import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Angular 2 @ 2016/08/27';
  imgTitle = 'This is Will 保哥';
  subTitle = '記載著 Will 在網路世界的學習心得與技術分享';
  num = 1;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(value){

    this.title = value;

  }

  plusOrMinusOne($event: MouseEvent){
    //﹝判斷﹞shiftKey 是否被按下
    if ($event.shiftKey) {
      // num - 1
      this.num -= 1;
    }else {
      // num + 1
      this.num += 1;
    }
  }
}
