import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bindings2',
  templateUrl: './bindings2.component.html',
  styleUrls: [ './bindings2.component.css' ]
})
export class Bindings2Component implements OnInit {
  @Input() color:String = 'green';
  public cls = `bkg-${this.color} border-${this.color}`;
  isThick:Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.setColor('blue');
  }

  setColor(value: String) {
    this.color = value;
    this.colorChanged();
  }

  colorChanged() {
    const borderWidthThick = this.isThick ? 'border-width-thick' : '';
    this.cls = `bkg-${this.color}  border-${this.color} ${borderWidthThick}`;

  }
}