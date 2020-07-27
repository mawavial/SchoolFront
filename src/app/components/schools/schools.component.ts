import { OnInit, Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren   } from '@angular/core';
import { School } from '../../interfaces/school' 
import { SchoolService } from '../../services/schoolService/school.service'

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  schools: School[] = [];
  @Input() school: School;
  
 

  constructor(private schoolService: SchoolService ) { }

  ngOnInit(): void {
    this.getSchools();
    // this.getSingleSchool(1);
    // this.deleteSchool( {
    //   id: 7,
    //   name: 'ISSJ',
    //   classes: 32,
    //   grade: 14,
    //   students: 380
    // } as School);
  }

  getSchools(): void {
    this.schoolService.getAll()
    .subscribe(schools => this.schools = schools);
  }

  getSingleSchool(id: number): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.schoolService.getById(id)
      .subscribe(school => this.school = school);
  }

  addSchool(school: School): void {
    this.schoolService.add(school)
      .subscribe(school => {
        this.schools.push(school);
      });
  }
  editModal(school: School): void {
    
    console.log('%c⧭', 'color: #731d1d', school);
  }

  deleteSchool(school: School): void {
    this.schools = this.schools.filter(s => s !== school);
    this.schoolService.delete(school).subscribe();
  }


}
