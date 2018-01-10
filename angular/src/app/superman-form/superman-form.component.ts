import { Component, OnInit, Input } from '@angular/core';
import { Superman } from '../superman';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SupermanService } from '../superman.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-superman-form',
  templateUrl: './superman-form.component.html',
  styleUrls: ['./superman-form.component.css']
})
export class SupermanFormComponent implements OnInit {

  constructor(private supermanService: SupermanService, private formBuilder: FormBuilder ) { }

  power = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer', 'oc heo'];

  model: Superman;

  models$: Observable<Superman[]>;
  models: Superman[];

  supermanForm: FormGroup;

  isReactive = true;
  @Input() input: string;

   onReactive(){
  	return this.isReactive = false;
  }

  createSuperman(value: any){
  	this.supermanService.createSuperman(value).subscribe( result=> this.models.push(result));
  }

  getModels(){
  	//manner 1
  	// this.models$ = this.supermanService.getSupermans();
  	//manner 2
  	this.supermanService.getSupermans().subscribe(result=> this.models= result);
  }

  getModel( id: number){
    console.log('id', id);
  	this.supermanService.getSuperman(id).subscribe(result=> this.model= result);
    // console.log(this.model.name);
  }

  onSubmit(){

  }

  logValue(value: any){
  	console.log(value);
  }

  createFrom(){
  	this.supermanForm = this.formBuilder.group({
  		email: ['', Validators.required],
  		name: ['', [Validators.required]],
      power: ['', [Validators.required]]
  	})
  }

  ngOnInit(): void {
  	this.getModels();
  	this.createFrom();
	}
}
  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
//   submitted = false;
// onSubmit() { 
//   	this.submitted = true; 
//   }

