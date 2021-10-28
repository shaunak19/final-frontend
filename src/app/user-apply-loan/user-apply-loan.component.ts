import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-apply-loan',
  templateUrl: './user-apply-loan.component.html',
  styleUrls: ['./user-apply-loan.component.css']
})
export class UserApplyLoanComponent implements OnInit {

  selectedLoan: string ="";
  userForm: FormGroup;
  Emi: string ="";
  isCal: Boolean= false;
  constructor(private userService:UserService) {
    this.userForm = new FormGroup({
      'userName': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'dob': new FormControl('', [Validators.required]),
      'paddress': new FormControl('', [Validators.required]),
      'taddress': new FormControl('',[Validators.required]),
      'type': new FormControl('',[Validators.required]),
      'iRate': new FormControl('',[Validators.required]),
      'paymentPeriod': new FormControl('',[Validators.required]),
      'Adate': new FormControl('', [Validators.required]),
      'lamnt': new FormControl('', [Validators.required]),
      'emi': new FormControl('', [Validators.required]),
      'approved': new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }
  get f(){
    return this.userForm.controls;
  }
  submit(){
    this.userForm.get('approved')?.setValue("No");
    if(this.userForm.valid){
      this.emiCalculator();
      this.userService.applyLoan(this.userForm.value).subscribe((data)=>{
        alert("Loan Application Successful");
      },(err) => {
        console.log(err);
        alert(err.error.message);
      })
    }else{
      alert("Enter Valid Form");
    }
  }

  modo(value:string){
    const field1 = this.userForm.get('iRate'); 
    switch(value) {
      case "Ploan":
        field1?.setValue('12');
        break;
      case "Eloan":
        field1?.setValue('10');
        break;
      case "Vloan":
        field1?.setValue('13');
        break;
      case "Hloan":
        field1?.setValue('17');
        break;
    }
  }

  emiCalculator(){
    // Extracting value in the amount 
    // section in the variable
    const amount = this.userForm.get('lamnt')?.value;
  
    // Extracting value in the interest
    // rate section in the variable
    const rate = this.userForm.get('iRate')?.value;
  
    // Extracting value in the months 
    // section in the variable
    const months = this.userForm.get('paymentPeriod')?.value;

    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
      
    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);

    this.Emi = total.toString();
    this.isCal =true;
    this.userForm.get('emi')?.setValue(this.Emi);
  }
}
