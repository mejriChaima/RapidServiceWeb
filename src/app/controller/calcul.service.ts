import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculService {
  constructor() {}

  getNumberOf(list: any[], critiria: string, value: any) {
    console.log(list);
    console.log(critiria);
    console.log(value);

    //return list.filter((t)=> t[critiria] === value).length;
    let n = 0;
    for (let i in list) {
      if (list[i][critiria] === value) {
        n++;
      }
    }
    return n;
  }
}
