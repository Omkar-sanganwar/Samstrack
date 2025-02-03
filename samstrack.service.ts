import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SamstrackService {
  private apiUrl = 'http://localhost:8091/student'; 

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all-students`);
  }

  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-student`, student);
  }

  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-student/${id}`, { responseType: 'text' });
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-student`, student);
  }

  getStudentById(id:any){
    return this.http.get(`${this.apiUrl}/get-student-by-id/${id}`);
  }
}
