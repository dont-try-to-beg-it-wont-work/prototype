import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tags = ['Workshops', 'Arts', 'Gaming', 'Sports', 'Burwoord Campus', 'All']
  currentTag = 'Sports';

}
