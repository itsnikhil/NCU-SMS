import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../admin/admin.component.css', '../home/home.component.css']
})
export class NavbarComponent implements OnInit {
  path = window.location.pathname;
  constructor() { }
  ngOnInit() {
  }
}
