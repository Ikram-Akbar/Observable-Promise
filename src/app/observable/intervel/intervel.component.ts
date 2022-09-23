import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-intervel',
  templateUrl: './intervel.component.html',
  styleUrls: ['./intervel.component.scss']
})
export class IntervelComponent implements OnInit {
  // majhe maje eikhne obsMsg eivabe declare korele error asbe, tahole property tar pashe : diye type define korte hbe, tao na hole type|undefine or type|null diye dile cole jabe 
  obsMsg: number | undefined;
  videoSubscription: Subscription |undefined;

  constructor( private _designUtility:DesignUtilityService ) { }

  ngOnInit(): void {
    // eikhane boradCast name variable declare kore rxjs er interval method ke call kroechi ar vitore time diye diyechi;

    // const broadCastVideo = interval(  1000);
    // timer(delay , interval)
    const broadCastVideo = timer(5000, 1000);
    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg = res;
      this._designUtility.print(this.obsMsg, "elContainer3")
      // 
      
      if (res >= 10)
        this.videoSubscription?.unsubscribe();
      
    })
  }

}
