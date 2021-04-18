import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [ '', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ] ],
      password: [ '', [
        Validators.required,
        Validators.minLength(6)
      ] ]
    })
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'eMail is required.' },
      { type: 'pattern', message: 'eMail must be valide.' },
    ],
    'password': [
      { type: 'required', message: 'password is required.' }
    ],

  }

  async login(){
    const { email, password } = this.loginForm.value

    this._authService.signin({email,password}).then(result => {
      if (result) {
        for (const [key, value] of Object.entries(result)) {
          if(key === 'userId')
            localStorage.setItem('uid', `${value}`)
          if(key === 'token')
            localStorage.setItem('token', `${value}`)
        }

        this._route.navigate(['/publications'])
      }
    })
  }
}
