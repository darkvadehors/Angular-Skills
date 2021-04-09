import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { find, map, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  public user$: Observable<IUser[]>
  public userForm: FormGroup

  constructor(
    private _userService: UserService,
    private _fb: FormBuilder,
    private _route: Router
  ) { }

  ngOnInit(): void{
    this.userForm = this._fb.group({
      name: ['', 
        Validators.required
      ],
      firstname: ['', 
        Validators.required
      ]
    })

    this.editUser()
  }

  

  async editUser(){
    this.user$ = await this._userService.user$
    
    this.user$.subscribe(result => {
      if(result[0].name != '')
        this.userForm.controls['name'].setValue(result[0].name)

      if(result[0].firstname != '')
        this.userForm.controls['firstname'].setValue(result[0].firstname)
    })
  }

  save(){
    const {name, firstname} = this.userForm.value

    this._userService.updateUser(({name, firstname}), res => {
      if(res)
        this._route.navigate(['/profile'])
    })
  }
}
