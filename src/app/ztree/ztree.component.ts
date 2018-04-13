import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';
// import * as zTree from 'ztree';

declare var $: any;

@Component({
  selector: 'app-ztree',
  templateUrl: './ztree.component.html',
  styleUrls: ['./ztree.component.css']
})
export class ZtreeComponent implements OnInit {

  setting = {
    data: {
      simpleData: {
        enable: true
      }
    }
  };

  zNodes = [
    {id: 1, pId: 0, name: '1 level title'},
    {id: 11, pId: 1, name: '1.1 level title'},
    {id: 111, pId: 11, name: '1.1.1 三级标题'},
    {id: 112, pId: 11, name: '1.1.2 三级标题'},
    {id: 12, pId: 1, name: '1.2 二级标题'},
    {id: 2, pId: 0, name: '2 一级标题'}
  ];

  constructor() { }

  ngOnInit() {
    console.log($);
    console.log($.fn.zTree);
    $.fn.zTree.init($('#ztree'), this.setting, this.zNodes);
  }

}
