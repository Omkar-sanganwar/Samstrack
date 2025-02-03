import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamstrackService } from '../samstrack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  newid: any;
  student: any = {};  // Initialize with an empty object

  constructor(private activateRoute: ActivatedRoute, private s: SamstrackService, private r: Router) {}

  ngOnInit(): void {
    this.newid = Number(this.activateRoute.snapshot.paramMap.get('id'));  // Getting the ID from URL
    console.log(this.newid);

    // Fetch the student by ID to prefill the form
    this.s.getStudentById(this.newid).subscribe(
      (res) => {
        this.student = res;  // Populate the student object with the data
        console.log(this.student);
      },
      (err) => {
        console.error('Error fetching student details', err);
      }
    );
  }

  // Submit handler for the form - renamed to updatestudent()
  updatestudent(): void {
    this.s.updateStudent(this.student).subscribe(
      (res) => {
        console.log('Student updated successfully!', res);
        this.r.navigate(['/students']);  // Redirect after successful update
      },
      (err) => {
        console.error('Error updating student', err);
      }
    );
  }
}
