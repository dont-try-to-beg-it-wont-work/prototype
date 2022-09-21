import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuOptions = ["Recomended", "Popular", "New"]
  currentMenuOption = "Recomended"
  
  viewingEvent = false;
  CurrentEventIndex = 0;
  eventDetails = [
    {
      name : 'Football',
      time: 'Mon Sept 13, 3:00pm',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor id quam a fringilla. Curabitur tortor diam.',
      image : './assets/football.jpg',
      status : 'Interested',
      host : 'Gary Marley',
      hostImageDir : './assets/headshots/headshot2.jpg',
      attendanceText : '7/12'
    },
    {
      name : 'Soccer',
      time: 'Mon Sept 13, 3:00pm',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor id quam a fringilla. Curabitur tortor diam.',
      image : './assets/soccer.jpg',
      status : 'Going',
      host : 'Gary Marley',
      hostImageDir : './assets/headshots/headshot3.jpg',
      attendanceText : '7/12'
    },
    {
      name : 'Golf',
      time: 'Mon Sept 13, 3:00pm',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor id quam a fringilla. Curabitur tortor diam.',
      image : './assets/golf.jpg',
      status : 'Going',
      host : 'Gary Marley',
      hostImageDir : './assets/headshots/headshot4.jpg',
      attendanceText : '7/12'
    },
    {
      name : 'Basketball',
      time: 'Mon Oct 12, 3:00pm',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor id quam a fringilla. Curabitur tortor diam.',
      image : './assets/basketBall.jpg',
      status : 'Interested',
      host : 'Gary Marley',
      hostImageDir : './assets/headshots/headshot5.jpg',
      attendanceText : '7/12'
    },
  ]

}
