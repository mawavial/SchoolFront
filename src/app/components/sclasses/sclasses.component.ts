import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sclasses',
  templateUrl: './sclasses.component.html',
  styleUrls: ['./sclasses.component.css']
})
export class SclassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('%c⧭', 'color: #00bf00', 'SclassesComponent' );
  }

}
