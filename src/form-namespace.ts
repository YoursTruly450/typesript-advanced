namespace IForm {
  export type FormType = 'inline' | 'block';
  export type FromState = 'active' | 'disabled';

  export interface FormInfo {
    type: FormType,
    state: FromState
  }
}