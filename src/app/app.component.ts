import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E.INFRA | SERVICEHUB';
}
