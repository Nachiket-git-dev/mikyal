import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-portfolio-settings',
  templateUrl: './portfolio-settings.component.html',
  styleUrls: ['./portfolio-settings.component.css']
})
export class PortfolioSettingsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  form = this.fb.group({
    header_title: [''],
    header_description:[''],
    sub_header: [''],
    content: [''],
    footer: [''],
    social_facebook: [''],
    social_twitter:[''],
    social_google:[],
  });
}
