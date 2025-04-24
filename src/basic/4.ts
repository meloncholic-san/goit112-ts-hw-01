// function showMessage(message) {
//     console.log(message);
//   }
  
//   function calc(num1, num2) {
//     return num1 + num2;
//   }
  
//   function customError() {
//     throw new Error('Error');
//   }



function showMessage(message: string):void {
    console.log(message);
  }
  console.log(typeof showMessage('hello')); //undefined


function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(typeof calc(5,6));//number


function customError():never {
    throw new Error('Error');
  }

  console.log(typeof customError());//never не має типу?

  

