import { AbstractControl, ValidatorFn, FormGroup, FormControl } from '@angular/forms';

// export function equalValidator(field_1: FormControl, field_2: FormControl ): ValidatorFn  { 
//   if (field_1.value != null && field_1.value !=null){
//   	if (field_1.value == field_2.value){
//   		return true;
//   	}
//   	return false;
//   }
//   return true;
// }

export class EqualValidators {

  /**
   * Match two controls if they are the same
   * @param firstControlName
   * @param secondControlName
   * @returns {(AC: AbstractControl) => any}
   * @constructor
   */



   static Match(firstGroup: FormGroup, secondGroup: FormGroup) {
    return (AC: AbstractControl) => {
    	console.log(firstGroup.controls.name.value); 
    	console.log(secondGroup.controls.name.value); 


      // let firstControlValue = AC.get(firstControlName).value; // to get value in input tag
      // let secondControlValue = AC.get(secondControlName).value; // to get value in input tag
      // if (firstControlValue != secondControlValue) {
      //   AC.get(secondControlName).setErrors({MatchFields: true});
      //   console.log(false);
      // } else {
      //   console.log(true);
      //   return null
      // }
    };
  }
}

