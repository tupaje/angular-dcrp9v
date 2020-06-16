  import {  Component,  OnInit,  Input }  from '@angular/core';
  import {  ActivatedRoute } from  '@angular/router';
  import {  Location }  from '@angular/common';

  @Component({  
    selector: 'app-color-input',  
  templateUrl: './color-input.component.html',  
  styleUrls: [ './color-input.component.css' ]  })  
  
  export  class ColorInputComponent implements OnInit {  
  @Input() public color  = 'green';
  public cls  = `bkg-${this.color}  border-${this.color}`;
  public isThick = true;

  constructor(  private route: ActivatedRoute,  private location: Location  ) {}

  public ngOnInit(): void {  
    this.color = 'blue';
    this.setColor();
  }
  
  public setColor() { 
    const borderWidthThick = this.isThick ? 'border-width-thick' : '';
    this.cls = `bkg-${this.color}  border-${this.color} ${borderWidthThick}`;
  }  
} 