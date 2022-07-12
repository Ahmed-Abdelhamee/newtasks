import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private routeTitle:Title) { }

  ngOnInit(): void {
    this.routeTitle.setTitle("ITI angular projects");
  }

}
