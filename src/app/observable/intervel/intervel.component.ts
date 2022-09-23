import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-intervel',
  templateUrl: './intervel.component.html',
  styleUrls: ['./intervel.component.scss']
})
export class IntervelComponent implements OnInit {
  obsMsg:number;

  constructor() { }

  ngOnInit(): void {
    const broadCastVideo = interval(    5000);
    broadCastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg =  res;
      
    })
  }

}
