import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { get } from 'jquery';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  login: FormGroup;
  submitted=false;
  isSubmit =true;
  submitMessage='';

  constructor(private fb : FormBuilder){

  }
  ngOnInit() {
    this.login = this.fb.group({
      name : ["" , [Validators.required , Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message:["",[Validators.required, Validators.minLength(5)]]
    })

    // get f() { return this.login.controls; }

  }
  submitData(value:any){
    // console.log(this.login.value);
    let Uname=this.login.get('name').value;
    console.log("Name is:"+Uname);

    let mail=this.login.get('email').value;
    console.log("email is:"+mail);

    let msg=this.login.get('message').value;
    console.log("message is:"+msg);

    this.submitMessage='Submitted Successfully';

  setTimeout(()=>{
    this.isSubmit=false;
  },3000);

  }

}
function f() {
  throw new Error('Function not implemented.');
}

