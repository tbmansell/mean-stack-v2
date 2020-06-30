import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['' +
    './app.component.styl',
    'common-styles/svg.styl',
  ]
})
export class AppComponent {
  title = 'mean2';

  onSignedIn(user) {
    console.log('APP.SignedinEvent called: ', user);
  }
}
