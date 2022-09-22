import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() { }


  dellAvailable() {
    return true;
  }
  hpAvailable() {
    return false;
  }





  // make some object for sending dynamic data in the promise: 
  dell = {
    brand: "Dell",
    hardDisk: "2 TB",
    color: "Black"
  }
  hp = {
    brand: "HP",
    hardDisk: "1 TB",
    color: "red"
  }
  notAvailable = {
    brand: "Not Available",
    status: "failed"
  }

  // make a promiseVal

  promiseVal: string = "";

  ngOnInit(): void {
    // make a promise like
    const buyLaptop = new Promise((resolve, reject) => {
      // 1st case : General case
      /* resolve("promise is resolved")
       reject('promise is rejected ');*/

      // 2nd case: if else
      if (this.dellAvailable()) {
        setTimeout(() => {
          // resolve('Dell is Purchased');
          resolve(this.dell);

        }, 2000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {
          // resolve('HP is Purchased ');
          resolve(this.hp)
        }, 2000);
      } else {
        // reject('sorry no product is available ');
        reject(this.notAvailable);
      }
    });
    buyLaptop
      .then(res => {
        console.log(`the result is : ${JSON.stringify(res)}`)
        this.promiseVal = res as string;
      },
      )
      .catch((res) => {
        console.log(`the result is : ${JSON.stringify(res) }`);
        this.promiseVal = res as string;
      });  
  }
}
 