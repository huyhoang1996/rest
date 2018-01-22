import { Component, OnInit } from '@angular/core';
import { HelioService } from '../helio.service';
import { User } from '../user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { EqualValidators } from '../EqualValidators';


@Component({
  selector: 'app-helio',
  templateUrl: './helio.component.html',
  styleUrls: ['./helio.component.css']
})
export class HelioComponent implements OnInit {

  constructor( private helioService: HelioService, private formBuilder: FormBuilder) { }

  searchApp_hidden = false;
  barcode_is_error = false;
  userState={name: false, email: false, phone: false, birthday: false, government_id: false, address: false};
  userAppState={name: false, email: false, phone: false, birthday: false, government_id: false, address: false};

  users:User[];
  user:User;
  userForm: FormGroup;

  usersApp:User[];
  userApp:User;
  userAppForm: FormGroup;

  
  changState(is_checked: boolean,element: string){
    if (is_checked) {
      this.userAppForm.controls[element].disable();
    }else{
      this.userAppForm.controls[element].disable();
    }

  }
  changStateEmbed(is_checked: boolean,element: string){
    if (is_checked) {
      this.userForm.controls[element].enable();
    }else{
      this.userForm.controls[element].disable();
    }

  }

  getUsers(){
  	this.helioService.getUsers().subscribe( result => this.users = result);
  }

  getUser(id: number){
    this.helioService.getUser(id).subscribe( result=> {
        this.barcode_is_error = false;
        this.user = result;  
        this.userForm.setValue(result, { onlySelf: false });
        for (var i in this.userState ) {
          this.userState[i] = true;
          console.log(this.userState[i]);
        }
        this.validate(this.userAppForm, this.userForm);
      },
        err => {
        if (err.status == 404 ) {
          // code...
          this.barcode_is_error = true;
        }
      }
      );
    // this.helioService.getUser(id).subscribe( result=> this.user = result);
  }

  updateUser(value: any){
    this.helioService.updateUser(value).subscribe( result=> this.getUsers());
  }

  // for app
  getUsersApp(){
    this.helioService.getUsersApp().subscribe( result => this.usersApp = result);
  }

  getUserApp(id: number){
    this.helioService.getUserApp(id).subscribe( result => {
      this.userApp = result; 
      this.userAppForm.setValue(result, { onlySelf: false}); 
      this.validate(this.userAppForm, this.userForm);
      for (var i in this.userAppState ) {
          this.userAppState[i] = true;
          console.log(this.userState[i]);
        }
    },
      error => console.log('oops', error) );
    // this.helioService.getUser(id).subscribe( result=> this.userApp = result);
      
  }

  updateUserApp(value: any){
    console.log(value);
    this.helioService.updateUserApp(value).subscribe( result=> this.getUsersApp());
  }

  relateUser(){
    if (this.userForm.valid && this.userAppForm.valid ){
      console.log('true relateUser');
        this.helioService.relateUser(this.user.barcode, this.userApp.id).subscribe(result => console.log(result),  error => console.log('oops', error));
    }else{
      return console.log('fail relateUser');
    }

  }

  validate(userAppForm: FormGroup, userForm: FormGroup){
    var field = ['name', 'email', 'phone', 'birthday', 'government_id', 'address'];
    for (var i = 0; i<field.length; i++){
      userAppForm.get(field[i]).setErrors({equal: false});
      userForm.get(field[i]).setErrors({equal: false});
        if(userAppForm.controls[field[i]].value !== '' && userForm.controls[field[i]].value !== ''){
          if(userAppForm.controls[field[i]].value != userForm.controls[field[i]].value){
              userAppForm.get(field[i]).setErrors({equal: true});
              userForm.get(field[i]).setErrors({equal: true});
          }
        }
      };
  }

  ngOnInit() {
  	this.getUsers();
    this.getUsersApp();
    this.userAppForm = this.formBuilder.group({
      id: '',
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{9}") ]],
      birthday: ['', Validators.required],
      government_id: ['', [Validators.required, Validators.pattern("[0-9]{9}") ]],
      address: ['', Validators.required],
    });

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{9}") ]],
      birthday: ['', Validators.required],
      government_id: ['', [Validators.required, Validators.pattern("[0-9]{9}") ]],
      address: ['', Validators.required],
      barcode:'',
      mapping_by: '',
      app_id: '',
    });
  }

}
