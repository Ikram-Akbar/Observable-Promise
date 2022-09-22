import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  dellAvailable() {
    return true;
  }
  hpAvailable() {
    return false;
  }

  ngOnInit(): void {
    // make a promise like
    const byeLaptop = new Promise((resolve, reject) => {
      /* 1st case : General case
       resolve("promise is resolved")
       reject('promise is rejected ');*/

      // 2nd case: if else
      if (this.dellAvailable()) {
         setTimeout(() => {
          resolve('Dell is Purchased');
        }, 5000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {
          resolve('HP is Purchased ');
        }, 5000);
      } else {
        reject('sorry no product is available ');
      }
    });
    byeLaptop
      .then((res) => console.log(`the result is : ${res}`))
      .catch((res) => {
        console.log(`the result is : ${res}`);
      });
  }
}
