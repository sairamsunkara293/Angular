import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return (password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true })
  // if (control.get('password').value === control.get('confirmPassword').value)
  //   return null;
  // else
  //   return { passwordMismatch: true };
};
