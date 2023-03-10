import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  email :string = 'ka@gs.com';
  course = {
    title: "The Complete Angular Course",
    rating: 4.9756,
    students: "30000",
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  cours: any;

  loadCourses(){
    this.cours = [
      {
        id: 1,
        name: 'course1'
      },
      {
        id: 2,
        name: 'course2'
      },
      {
        id: 3,
        name: 'course3'
      }
    ];
  }
  trackCourse(index: any, course: { id: any }) {
    return course? course.id : undefined
  }

  courses = [1,2];
  text: string = "The way I worked in Gemini Solution working as an Angular Developer without having the knowledge of Angular is just Awesome and disgusting at the same time."
  onSave($event: any){
    console.log("Button was clicked")
    console.log($event);
  }
  // onKeyUp($event : any){
  //   if($event.keyCode === 13) {
  //     console.log("Enter was pressed");
  //     console.log("value of input is ", $event.target.value);
  //   }
  //   console.log($event.target.value);
  // }
  onKeyUp(){
    console.log(this.email);
  }

  post = {
    title: "Mr.",
    isFavorite: true
  }

  onFavoriteChanged(isSelected: boolean){
    console.log("Favorite changed and got notified in app.component.html", isSelected);
  }

  tweet = {
    body: 'Here is the body of a tweet ...',
    isActive : true,
    likesCount : 10
  }

  onHeartClick() {
    console.log("heart shape is clicked");
  }

  viewMode = 'map';

  changeViewMode(mode: string){
    this.viewMode = mode;
  }
}
