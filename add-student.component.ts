import { Component } from '@angular/core';
import { SamstrackService } from '../samstrack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student = {
    name: "",
    email: ""
  };

  constructor(private s: SamstrackService, private r: Router) { }

  submitHandler() {
    if (this.student.name && this.student.email) {
      this.s.addStudent(this.student).subscribe({
        next: () => {
          this.r.navigate(['/students']);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }
}
