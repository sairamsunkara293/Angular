import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { passwordMatchValidator } from './validators/sign-up.validator';
import { AlertService } from '../../Services/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  loading = false;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  signUpForm: FormGroup
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      _id: [''],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: passwordMatchValidator })
  }

  /* Shorthands for form controls (used from within template) */
  get fullName() { return this.signUpForm.get('fullName'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    return this.signUpForm.hasError('passwordMismatch') ? this.confirmPassword.setErrors([{ 'passwordMismatch': true }]) : this.confirmPassword.setErrors(null);
  }
  register() {
    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.signUpForm.value)
      .pipe(first())
      .subscribe(data => {
        debugger;
        this.alertService.success('Registration Sucessful', true);
        this.router.navigate(['/login']);
        // setTimeout(() => {
        //   this.alertService.clear();
        // }, 2000)

      }, err => {
        if (err.error[0] == 'Duplicate email adrress found.') {
          this.alertService.error('Mail already Exist')
          this.loading = false;
        }
        else
          this.alertService.error(err.error[0])
      })
  }



}
