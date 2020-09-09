import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let popupOpen = () => {
      document.querySelector('.tooltip').classList.toggle('tooltip__active')
  }
  document.querySelector(".share-select").addEventListener("click", popupOpen)

  let faqOpen = (e) => {
      e.currentTarget.classList.toggle('overview-content-faq__item-active')
  }

  document.querySelectorAll(".overview-content-faq__item").forEach( e => {
    e.addEventListener("click", faqOpen)
  })
  }

}
