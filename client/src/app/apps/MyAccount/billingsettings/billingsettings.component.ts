import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingsettings',
  templateUrl: './billingsettings.component.html',
  styleUrls: ['./billingsettings.component.css']
})
export class BillingsettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector(".billing-add-card-js").addEventListener("click", () => {
      document.querySelector(".todo-overlay").classList.toggle("active")
  })

  document.querySelector(".btn-popup-close-edit-task").addEventListener("click", () => {
      document.querySelector(".todo-overlay").classList.remove("active")
  })

  }

}
