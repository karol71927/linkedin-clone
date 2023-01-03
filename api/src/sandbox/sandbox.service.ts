import { Injectable } from '@nestjs/common';

@Injectable()
export class DifferentNameThanFile {
  async func1() {
    const a = 1;
    let b = 2;
    var x = 3;
    return a + b;
  }

  async func2() {
    const a = 1;
    let b = 2;
    var x = 3;
    return a + b;
  }

  functionThatReturnsSomething(parameter: string) {
    if (parameter === 'a') {
      return true;
    } else if (parameter === 'b') {
      return 1;
    } else {
      return 'c';
    }
    return 'Unreachable code';
  }

  // Commented duplicate
  // functionThatReturnsSomething(parameter: string) {
  //   if(parameter === "a"){
  //     return true;
  //   } else if( parameter === "b" ) {
  //     return 1;
  //   } else {
  //     return "c"
  //   }
  //   return "Unreachable code"
  // }
}
