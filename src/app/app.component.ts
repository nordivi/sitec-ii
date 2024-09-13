import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ExplanatoryContentComponent } from "./explanatory-content/explanatory-content.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { LabelsComponent } from "./labels/labels.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    NavBarComponent, MainContentComponent,
    ExplanatoryContentComponent, AboutUsComponent,
    LabelsComponent, SchedulerComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sitec-ii';
}
