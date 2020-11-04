import { Component,ViewChild, OnInit ,Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl,FormArray} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {ClientService} from '../../client/client.service'
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../../../services/project/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Stepper from 'bs-stepper';
import { Subscription } from 'rxjs';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  VERSION,
} from '@angular/material'
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
  subscription: Subscription;
  frmValues: object = {};
  @ViewChild(MatAutocompleteTrigger,{static:false}) trigger: MatAutocompleteTrigger;
  constructor(private fb: FormBuilder,private clientservice:ClientService,
    private projectservice:ProjectService,private snackbar:MatSnackBar,public dialogRef: MatDialogRef<CreateProjectComponent>  ) { 
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
      client_email:[''],
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
    // this.frmStepper = this.fb.group({
    //   steps: this.fb.array([
    //     this.fb.group({
    //       project_name: ['', Validators.required],
    //       description: ['', Validators.required],
    //     start_date: ['', Validators.required],
    //     end_date: ['', Validators.required],
    //     budget: ['', Validators.required],
    //     client_phone:[''],
    //     client_select:[],
    //   client_id:null,
    //   client_email:[''],
    //     }),
    //     this.fb.group({
    //       addressOne: [null, Validators.compose([Validators.required])],
    //       addressTwo: [null], // optional
    //       city: [null, Validators.compose([Validators.required])],
    //       county: [null, Validators.compose([Validators.required])],
    //       country: [null, Validators.compose([Validators.required])],
    //     }),
    //     this.fb.group({
    //       address1:null,
    //       address2:null,
    //       city:null,
    //       state:null,
    //     postcode:null
    //     }),
    //   ]),
    // });
    this.clientservice.getallclient().subscribe(res=>{
      this.clientlist=res['data'];
      console.log("clientlist",this.clientlist);
    })

    this.form.get('client_select').valueChanges.subscribe(val => {
      
      this.filteredOptions=this._filter(val)
     
     })
    
   
  }
  next() {
    console.log("next step")
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
ngAfterViewInit() {
  this._subscribeToClosingActions();
}

private _subscribeToClosingActions(): void {
  if (this.subscription && !this.subscription.closed) {
    this.subscription.unsubscribe();
  }

  this.subscription = this.trigger.panelClosingActions
    .subscribe(e => {
      if (!e || !e.source) {
        this.form.patchValue({
          client_select:null,
          project_select:null
        })
      }
    },
    err => this._subscribeToClosingActions(),
    () => this._subscribeToClosingActions());
}

}
