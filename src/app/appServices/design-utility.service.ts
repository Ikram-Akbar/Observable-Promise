import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val: any, containerId: string) {
    let ele = document.createElement("li");
    ele.innerText = val;
    document.getElementById(containerId)?.appendChild(ele);
  }

}
