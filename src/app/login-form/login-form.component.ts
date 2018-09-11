import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Credentials } from './../user/credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public loginLoading = false;
  public loginResult: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  public onSubmit(): void {
    this.loginForm.controls.usernameOrEmail.markAsDirty();
    this.loginForm.controls.password.markAsDirty();
    const { usernameOrEmail, password } = this.loginForm.value;
    const credentials: Credentials = {
      usernameOrEmail,
      password
    };
    if (this.loginForm.valid) {
      this.loginLoading = true;
      this.authService.login(credentials).subscribe(
        result => {
          this.loginLoading = false;
          this.authService.setUser(
            result.token,
            result.userInfo,
            result.expiresAt
          );
          this.router.navigate(['catalog']);
        },
        err => {
          this.loginResult = {
            message: err.error.message,
            state: 'error'
          };
          this.loginLoading = false;
        }
      );
    }
  }
}
