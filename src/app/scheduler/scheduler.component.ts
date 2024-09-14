import { Component } from '@angular/core';
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.css'
})
export class SchedulerComponent {

showCheckboxes() {
  var expanded = false;
  var checkboxes = document.getElementById("checkboxes");
 if(checkboxes)
  { if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }}
}
}
