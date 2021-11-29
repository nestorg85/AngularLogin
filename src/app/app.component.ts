import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submittedForm({username, password}: Login): void {
    alert(`${username}:${password}`)
  }
}

interface Login {
  username: string;
  password: string;
}
