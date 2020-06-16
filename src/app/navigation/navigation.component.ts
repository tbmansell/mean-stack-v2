import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.styl',
    '../app.component.styl',
    '../common-styles/cards.styl',
  ]
})
export class NavigationComponent implements OnInit {

  currentUser = null;

  constructor() { }

  ngOnInit(): void {
  }

}
