import { Component, OnInit } from '@angular/core';
import { SamstrackService } from '../samstrack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {

  students: any[] = [];

  constructor(private s: SamstrackService, private r: Router) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.s.getStudents().subscribe({
      next: (res) => {
        this.students = res;
        console.log(res);
      },
      error: (error) => {
        console.error("Error fetching students:", error);
      }
    });
  }

  deleteHandler(id: any) {
    console.log('Deleting student with ID:', id);  // Log the ID to verify
    this.s.deleteStudent(id).subscribe({
      next: () => {
        console.log("Deleted successfully");
        this.getStudents(); // Refresh the student list after deletion
      },
      error: (error) => {
        console.error("Error deleting student:", error);
      }
    });
  }
}  
