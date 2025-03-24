import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  title = 'Home';
  homeForm!: FormGroup;
  // passwordeye: string = 'password';
  // showPwdIcon: boolean = false;
  // nameErrMsg = "Name is requied";
  // regCusContact = new RegCusContact();
  // errInfo = new ErrorInfo();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    // private apiService: ApiService
    ) { }

  ngOnInit(): void {
   
    console.log("Inside home");
    this.homeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    // if(this.homeForm.value >= 0)
      console.log("home form");
      // this.userLogin();

  }

  home(){

  }

}
