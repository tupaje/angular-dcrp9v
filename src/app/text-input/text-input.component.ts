import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  private color:String = 'green';
  private _isThick:boolean = true;
  private currentClasses: {};

  constructor( private route: ActivatedRoute, private location: Location ) {}

  public ngOnInit(): void {
    this.setColor('blue');
  }

  public set isThick(v : boolean) {
  	this._isThick = v;
  	this.setCurrentClasses();
  }

  public get isThick() : boolean {
  	return this._isThick;
  }

  public setColor(value: String) {
    this.color = value;
    this.setCurrentClasses();
  }

	public setCurrentClasses() {
	  this.currentClasses =  {
	    'bkg-red border-red': this.color === 'red',
		'bkg-green border-green': this.color === 'green',
		'bkg-blue border-blue': this.color === 'blue',
	    'border-width-thick': this._isThick,
	  };
	}

  public getCurrentClasses() {
    const keys = Object.keys(this.currentClasses);
    let str = '';
    for (const item in this.currentClasses) {
      if(this.currentClasses[item]) str += ` ${item}`;
    }
    return str;
  }

}
