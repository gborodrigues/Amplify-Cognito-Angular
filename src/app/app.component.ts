import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC';
  constructor(public router: Router) {
  }

  logout() {
    Auth.signOut()
      .then(data => {
        console.log("You are successfully logged out");
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(err));
  }
}
