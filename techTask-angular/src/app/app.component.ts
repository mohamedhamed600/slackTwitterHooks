import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tweets;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/tweets').subscribe(data => {      
      this.tweets=data;
    });
  }
}
