import { Component, OnInit , Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
@Component({
  selector: 'app-stepper-options',
  templateUrl: './stepper-options.component.html',
  styleUrls: ['./stepper-options.component.css'],
  providers: [{ provide: CdkStepper, useExisting: StepperOptionsComponent }],
})
export class StepperOptionsComponent extends CdkStepper {
  @Input()
  activeClass = 'active';
  isNextButtonHidden() {
    
    return !(this.steps.length === this.selectedIndex + 1);
  }

  ngOnInit() {
   
  }

}
