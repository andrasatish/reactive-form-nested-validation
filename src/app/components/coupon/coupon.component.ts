import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  title = 'assignment';
  test="test data";
  coupon_type=['User','option2','option3'];
  availability=['unlimited','limited'];
  discountArray=['percentage','custom option']

  couponForm:FormGroup= new FormGroup({
    coupon_type:new FormControl('',Validators.required),
    coupon_code:new FormControl('',Validators.required),
    valid_from:new FormControl('',Validators.required),
    valid_to:new FormControl('',Validators.required),
    is_active:new FormControl(''),
    coupon_count:new FormControl(null),
    is_unlimited:new FormControl(),
    tnc:new FormControl(''),
    // availability:new FormControl('',Validators.required),
    couponstatus:new FormControl('',Validators.required),
    rules:this.fb.array([this.fb.group({
      min_amount:new FormControl(''),
      max_amount:new FormControl(''),
      discount_type :new FormControl(''),
      discount:new FormControl(''),
      max_discount:new FormControl('')
    })])
  });

  constructor(private fb:FormBuilder) { 

}


  ngOnInit(): void {
    // this.addRules();
    console.log(this.couponForm);
    
    
  }
  addRules(){
    const ruleSet=this.fb.group({
      min_amount:new FormControl(''),
      max_amount:new FormControl(''),
      discount_type :new FormControl(''),
      discount:new FormControl(''),
      max_discount:new FormControl('')
    });
    let ruleArr=this.couponForm.get('rules') as FormArray;
    ruleArr.push(ruleSet);
  }
  saveForm(){
    console.log("Your form data is as :",this.couponForm.value);
    
  }
  select(val:any,type:string){
    console.log(val);
    
    let form=this.couponForm.value;
    if(type==='coupon_type'){
      form.coupon_type=val;
    }
    else if (type==='availability'){
      form.is_unlimited = val==='unlimited' ? true :false;
    }
    else if (type==='status'){
      form.status=val;
    }
    
  }
 validations(){

 }

 get f(): {[key:string]:AbstractControl} {
  return this.couponForm.controls;
 }

}
