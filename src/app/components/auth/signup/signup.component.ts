import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this._fb.group({
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  signup(){
    const { email, password } = this.signupForm.value

    this._authService.signup({email, password}).then(result => {
      console.log('result => ', result);
      
    })
  }
}
