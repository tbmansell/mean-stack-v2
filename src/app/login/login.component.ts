import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  @Output() signedIn = new EventEmitter<any>();

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {}

  async onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    console.log(`onSubmit: username=`, username, ` password=`, password);
    this.userService.login(username, password).subscribe((authToken) => {
      console.log(`Successfully logged in as: `, authToken);
      this.userService.getUser(authToken).subscribe((user) => {
        console.log(`userService user=`, user);
        this.signedIn.emit(user);
      });
    });
  }

}
