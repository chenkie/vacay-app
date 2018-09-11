import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { UserService } from './../user/user.service';
import { NewUser } from './../user/user.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  public signupForm: FormGroup;
  public signupLoading = false;
  public emailValidating = false;
  public usernameValidating = false;
  public signupResult: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.checkEmail.bind(this)],
        updateOn: 'blur'
      }),
      username: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [this.checkUsername.bind(this)],
        updateOn: 'blur'
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  private checkEmail(control: FormControl): any {
    this.emailValidating = true;
    const email = control.value.toLowerCase();

    return this.userService.checkEmail(email).pipe(
      map(
        result => {
          this.emailValidating = false;
          if (result.emailTaken) {
            return { emailTaken: true };
          }
          return null;
        },
        err => {
          console.log(err);
          this.emailValidating = false;
        }
      )
    );
  }

  private checkUsername(control: FormControl): any {
    this.usernameValidating = true;
    const username = control.value;

    return this.userService.checkUsername(username).pipe(
      map(
        result => {
          this.usernameValidating = false;
          if (result.usernameTaken) {
            return { usernameTaken: true };
          }
          return null;
        },
        err => {
          console.log(err);
          this.usernameValidating = false;
        }
      )
    );
  }

  public onSubmit(): void {
    this.signupForm.controls.email.markAsDirty();
    this.signupForm.controls.username.markAsDirty();
    this.signupForm.controls.password.markAsDirty();
    if (this.signupForm.valid) {
      this.signupLoading = true;
      const { username, email, password } = this.signupForm.value;
      const newUser: NewUser = {
        username,
        email,
        password
      };
      this.authService.signup(newUser).subscribe(
        result => {
          this.signupResult = {
            message: result.message,
            state: 'success'
          };
          this.signupLoading = false;

          const { token, userInfo, expiresAt } = result;
          this.authService.setUser(token, userInfo, expiresAt);

          setTimeout(() => {
            this.router.navigate(['catalog']);
          }, 1500);
        },
        err => {
          this.signupResult = {
            message: err.error.message,
            state: 'error'
          };
          this.signupLoading = false;
        }
      );
    }
  }
}
