import { Component, OnInit ,Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl,FormArray} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {ClientService} from '../../client/client.service'
import { ProjectService } from '../../../services/project/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent   implements OnInit {
  private stepper: Stepper;
  @Input()
  isLinear = true;
    
  @Input()
  isEditable = true;
  clientlist:any;
  filteredOptions;
  frmValues: object = {};
  constructor(private fb: FormBuilder,private clientservice:ClientService,private projectservice:ProjectService,private snackbar:MatSnackBar ) { 
    this.rows = this.fb.array([]);
    }
    frmStepper: FormGroup;
    rows: FormArray;

    get formArray(): AbstractControl {
      return this.frmStepper.get('steps');
    }
    form = this.fb.group({
      project_name: ['', Validators.required],
      // project_subject:['',Validators.required],
      project_owner:null,
      description: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      budget: ['', Validators.required],
      project_expenses:null,
      client_select:[],
      client_id:null,
      client_email:['', Validators.required],
      company_site:null,
      client_phone:['', Validators.required],
      address1:null,
      address2:null,
      city:null,
      state:null,
      postcode:null


    });
  ngOnInit() {
    this.form.addControl('rows', this.rows);
    this.frmStepper = this.fb.group({
      steps: this.fb.array([
        this.fb.group({
          firstName: ['First Name', Validators.compose([Validators.required])],
          lastName: ['Last Name', Validators.compose([Validators.required])],
          phone: [null], // optional
          email: [
            'johndoe@example.com',
            Validators.compose([Validators.required, Validators.email]),
          ],
        }),
        this.fb.group({
          addressOne: [null, Validators.compose([Validators.required])],
          addressTwo: [null], // optional
          city: [null, Validators.compose([Validators.required])],
          county: [null, Validators.compose([Validators.required])],
          country: [null, Validators.compose([Validators.required])],
        }),
        this.fb.group({
          creditCardNo: [
            '4111 1111 1111 1111',
            Validators.compose([Validators.required]),
          ],
          expiryDate: ['', Validators.compose([Validators.required])],
          cvvCode: ['', Validators.compose([Validators.required])],
        }),
      ]),
    });
    this.clientservice.getallclient().subscribe(res=>{
      this.clientlist=res['data'];
      console.log("clientlist",this.clientlist);
    })

    this.form.get('client_select').valueChanges.subscribe(val => {
      
      this.filteredOptions=this._filter(val)
     
     })
    
   
  }
  next() {
    this.stepper.next();
  }
  submit() {
    console.log("project detail=>",this.form.value);
   if(this.form.valid){
    this.projectservice.createproject(this.form.value).subscribe(res=>{
      console.log("res",res);
      if(res['message'] == "Success"){
        this.snackbar.open('Project Created SuccessFully', 'Ok', {
          duration: 3000            
        });
        location.reload();
      } 
    });
   }
  }
  private _filter(value: string): string[] {
    if(value){
     
    console.log("fikler",this.clientlist);
    return this.clientlist.filter(option =>option.first_name.toLowerCase().includes(value));
    }
  }
  handler(event:any): void {
    console.log("event",event);
   let clientrow =  this.clientlist.find(x => x.client_id == event.option.value);
   console.log("clientrow",clientrow);
   let client_name= clientrow.first_name+" "+clientrow.last_name;
   
   this.form.patchValue({
     client_id:event.option.value,
     client_select:client_name,
     client_email:clientrow.email,
     client_company:clientrow.company,
     client_phone:clientrow.phone
   })
}
onAddRow() {
  this.rows.push(this.createItemFormGroup());
}
onRemoveRow(rowIndex:number){
  this.rows.removeAt(rowIndex);
}
createItemFormGroup(): FormGroup {
  return this.fb.group({
    milestone: null,
    
  });
}

}
