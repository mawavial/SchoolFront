import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('%c⧭', 'color: #733d00', 'SchoolsComponent' );
  }

}
