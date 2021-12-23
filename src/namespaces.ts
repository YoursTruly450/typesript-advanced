/// <reference path="form-namespace.ts" />

namespace IForm {
  class MyForm {
    private type: FormType = 'inline';
    private state: FromState = 'active';
  
    constructor(public email: string) {}
  
    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
  
  const myForm = new MyForm('v@mail.ru');
  console.log(myForm);
}
