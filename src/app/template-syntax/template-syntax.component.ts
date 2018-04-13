import { Component, OnInit, AfterViewInit, ViewChildren, Directive, Input, QueryList } from '@angular/core';

@Directive({selector: '[appPane]' })
export class PaneDirective {
  @Input() id: string;
}

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit, AfterViewInit {

  @ViewChildren(PaneDirective) panes: QueryList<PaneDirective>;
  serializedPanes = '';

  shouldShow = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.calculateSerializedPanes();
    this.panes.changes.subscribe((r) => { this.calculateSerializedPanes(); } );
  }

  show() {
    this.shouldShow = true;
  }

  calculateSerializedPanes() {
    setTimeout(() => {
      this.serializedPanes = this.panes.map( p => p.id ).join('; ');
      }, 1000
    );
  }

}
