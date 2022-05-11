import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  signUp(){
    alert('Hai')
  }
  // createForm() {
  //   this.formGroup = this.formBuilder.group({
  //     'username': ['', Validators.required],
  //     'password': ['', Validators.required],
  //   });
  // }

  // getError(el) {
  //   switch (el) {
  //     case 'user':
  //       if (this.formGroup.get('username').hasError('required')) {
  //         return 'Username required';
  //       }
  //       break;
  //     case 'pass':
  //       if (this.formGroup.get('password').hasError('required')) {
  //         return 'Password required';
  //       }
  //       break;
  //     default:
  //       return '';
  //   }
  // }

  
  // onSubmit(post) {
  //   // this.post = post;
  // }

}
