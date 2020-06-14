import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { AlertService } from '../../Services/alert.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  loading = false;
  constructor(public userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    // if (this.authenticationService.isLoggedIn())
    //   this.router.navigateByUrl('/tickets');
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.loginForm.value).pipe(first()).subscribe(res => {
      this.authenticationService.setToken(res['token'])
      this.router.navigateByUrl('/tickets')
      debugger;
      setTimeout(() => {
        this.alertService.success('Sucessfully LoggedIn', true);
        this.alertService.clear();
      }, 2000)
    }, err => {
      debugger;
      console.log(err.error.message)
      if (err.error.message == 'Email is not registered') {
        this.alertService.error(err.error.message);
      }
      else {
        this.alertService.error(err.error.message)
      }

      this.loading = false;
    })
  }

}
