import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  model!: NgbDateStruct;
  EmployeeForm: FormGroup

  CountryList = [
    "India",
    "Usa",
    "Canada",
    "Nepal",
    "Pakistan",
    "China",
    "Iran",
    "Iraq"
  ]
  EmployeeListData: any = [];
  ErroMsg:any;
  errorDiv = false;

  constructor(private calendar: NgbCalendar, private fb:FormBuilder){
      this.EmployeeForm = this.fb.group({
        name: ['',Validators.required],
        gender: ['',Validators.required],
        country: ['',Validators.required],
        dob: ['',Validators.required],
      })
  }

  ngOnInit(): void {

  }
  selectCountry(data:any){
    // console.log(data.value)
  }

  Submit(){
    setTimeout(() => {
      this.errorDiv = false;
    }, 3000);
    if(this.EmployeeForm.invalid){
      this.errorDiv = true;
      this.ErroMsg = "Please Fill All Fields!"
      return
    }
  this.EmployeeListData.push(this.EmployeeForm.value)
this.EmployeeForm.reset();
  console.log(this.EmployeeListData)
  }
}
