import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router:Router) { }

  ngOnInit(): void {
  }
  sidebarToggle(){
    this.document.body.classList.toggle('toggle-sidebar');
  }

  logout(){
    this.router.navigate(['/'])
  }

}
