import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent implements OnInit {
  title = 'assignment';
  test = 'test data';
  coupon_type = ['User', 'option2', 'option3'];
  availability = ['unlimited', 'limited'];
  discountArray = ['percentage', 'custom option'];
  couponForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.couponForm = this.fb.group({
      coupon_type: ['', Validators.required],
      coupon_code: ['', Validators.required],
      valid_from: ['', Validators.required],
      valid_to: ['', Validators.required],
      is_active: ['', Validators.required],
      coupon_count: [''],
      is_unlimited: [''],
      tnc: [''],
      couponstatus: ['', Validators.required],
      rules: this.fb.array([]),
    });

    this.addRules();
  }

  addRules() {
    const ruleArr = this.couponForm.get('rules') as FormArray;
    const ruleSet = this.fb.group({
      min_amount: [''],
      max_amount: [''],
      discount_type: [''],
      discount: [''],
      max_discount: [''],
    });
    ruleArr.push(ruleSet);
  }

  addMore(){
    this.addRules();
  }

  saveForm() {
    console.log('Your form data is as :', this.couponForm.value);
  }


  select(val: any, type: string) {
    console.log(val);

    let form = this.couponForm.value;
    if (type === 'coupon_type') {
      form.coupon_type = val;
    } else if (type === 'availability') {
      form.is_unlimited = val === 'unlimited' ? true : false;
    } else if (type === 'status') {
      form.status = val;
    }
  }

  validations() {}

  get f(): { [key: string]: AbstractControl } {
    return this.couponForm.controls;
  }

  get ruleArray(): { [key: string]:  any} {
    return this.couponForm.get('rules') as FormArray;
  }
}
