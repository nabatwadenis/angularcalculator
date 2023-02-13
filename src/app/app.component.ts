import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartailwind-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'anyValue';
  firstNum: number= 0;
  secondNum: number = 0;

  onClickValue (val: string, type:any) {
    if(type == 'number'){
      this.onNumberClick(val);
    }
    else if(type == 'function'){
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string){
    if (this.calNumber !== 'anyValue'){
      this.calNumber = this.calNumber + val;
    }
    else{
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
   onFunctionClick(val: string){

    if(this.funcT == 'c'){
      this.clearAll();
    }
    else if(this.funcT == 'NoFunction'){
      this.firstNum = this.calValue;
      this.calValue = 0;
      this.calNumber = 'anyValue';
      this.funcT = val;
    }
    else if(this.funcT !== 'NoFunction'){
      this.secondNum = this.calValue;
      this.valueCalc(val);
    }
   }
   valueCalc(val: string){
    if(this.funcT == '+'){
      const Total = this.firstNum + this.secondNum;
      this.totalAssignValues(Total, val);
      if(val == '='){ this.onEqualPress()};
    }
    if(this.funcT == '-'){
      const Total = this.firstNum - this.secondNum;
      this.totalAssignValues(Total, val);
      if(val == '='){ this.onEqualPress()};
    }
    if(this.funcT == '/'){
      const Total = this.firstNum / this.secondNum;
      this.totalAssignValues(Total, val);
      if(val == '='){ this.onEqualPress()};
    }
    if(this.funcT == '*'){
      const Total = this.firstNum * this.secondNum;
      this.totalAssignValues(Total, val);
      if(val == '='){ this.onEqualPress()};
    }
    if(this.funcT == '%'){
      const Total = this.firstNum % this.secondNum;
      this.totalAssignValues(Total, val);
      if(val == '='){ this.onEqualPress()};
    }
   }

   totalAssignValues(Total: number, val: string){

    this.calValue = Total;
    this.firstNum = Total;
    this.secondNum = 0;
    this.calNumber = 'anyValue';
    this.funcT = val;
   }
   onEqualPress(){
    this.firstNum = 0;
    this.secondNum = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'anyValue';
   }
   clearAll(){
    this.firstNum = 0;
    this.secondNum = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'anyValue';
   }
}
