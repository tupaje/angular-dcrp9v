  import {  Component,  OnInit,  Input }  from '@angular/core';
  import {  ActivatedRoute } from  '@angular/router';
  import {  Location }  from '@angular/common';
import { HeroService } from '../hero.service';

  @Component({  
    selector: 'app-bindings',  
  templateUrl: './bindings.component.html',  
  styleUrls: [ './bindings.component.css' ]  })  
  export  class BindingsComponent implements OnInit {  
  public color  = 'green';
  stringers: String[];

  constructor(  private route: ActivatedRoute,  private location: Location, private heroService: HeroService ) {}

  public ngOnInit(): void {  
    this.color = 'red';
    this.getStringers();
  }

  getStringers(): void {
    this.heroService.getStringers()
    .subscribe(stringers => this.stringers = stringers);
  }
} 