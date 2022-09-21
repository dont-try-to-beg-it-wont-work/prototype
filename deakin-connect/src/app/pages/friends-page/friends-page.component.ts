import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuOptions = ['Chat', 'Friends list', 'Connect']
  currentOption = 'Chat'

  // image directory, online
  friendsBannerItems = [
    ['./assets/headshots/headshot2.jpg' , true],
    ['./assets/headshots/headshot6.jpg', true],
    ['./assets/headshots/headshot5.jpg' , true],
    ['./assets/headshots/headshot4.jpg' , true],
    ['./assets/headshots/headshot3.jpg' , false],
    ['./assets/headshots/headshot2.jpg' , false],
    ['./assets/headshots/headshot5.jpg' , false],
  ]

  // Some dummy data 
  messageInfo = [
    {
      name : 'Julian Connor',
      message : 'Hey! have you seen that event that',
      timeSent : '2 mins ago',
      imageDir : './assets/headshots/headshot2.jpg',
      currentlyOnline : true,
      messageViewed: false,
    },
    {
      name : 'Travis Stuart',
      message : 'Shared an event with you',
      timeSent : '30 mins ago',
      imageDir : './assets/headshots/headshot3.jpg',
      currentlyOnline : false,
      messageViewed: false,
    },
    {
      name : 'Lucy Heng',
      message : 'Shared an event with you',
      timeSent : '2 hours ago',
      imageDir : './assets/headshots/headshot4.jpg',
      currentlyOnline : false,
      messageViewed: true,
    },
    {
      name : 'Amber Williams',
      message : 'You have connected with Amber',
      timeSent : '1 day ago',
      imageDir : './assets/headshots/headshot5.jpg',
      currentlyOnline : true,
      messageViewed: true,
    },
    {
      name : 'Daniel Wong',
      message : 'You have connected with Daniel',
      timeSent : '1 day ago',
      imageDir : './assets/headshots/headshot6.jpg',
      currentlyOnline : true,
      messageViewed: true,
    },
    {
      name : 'Joseph Trihn',
      message : 'You have connected with Joseph',
      timeSent : '2 days ago',
      imageDir : './assets/headshots/headshot2.jpg',
      currentlyOnline : true,
      messageViewed: true,
    },{
      name : 'Gordon Freeman',
      message : 'You have connected with Gordon',
      timeSent : '3 days ago',
      imageDir : './assets/headshots/headshot3.jpg',
      currentlyOnline : true,
      messageViewed: true,
    },{
      name : 'Mike Wazowski',
      message : 'You have connected with Gordon',
      timeSent : '6 days ago',
      imageDir : './assets/headshots/headshot4.jpg',
      currentlyOnline : true,
      messageViewed: true,
    },
  ]

}
