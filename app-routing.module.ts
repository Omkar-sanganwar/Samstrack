import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { AlbumComponent } from './album/album.component';
import { NewsComponent } from './news/news.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'comments', component: CommentComponent },
  { path: 'posts', component: PostComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'news', component: NewsComponent },
  { path: 'students', component: ShowStudentsComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'student/:id', component: ShowStudentsComponent },
  {path:'editstudent/:id',component:EditstudentComponent} // This route seems redundant. You can omit it unless needed for editing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
