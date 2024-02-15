import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  openAnalytics(){
    const eanalytics: string = 'https://eanalytics.e-infra.com/';
    this.openInNewTab(eanalytics);
  }
  openConsulting(){
    const econsulting: string = 'https://servicehub.e-infra.com/nachhaltigkeit/';
    this.openInNewTab(econsulting);
  }

  openInfra(){
    const einfra: string= 'https://www.e-infra.com/';
    this.openInNewTab(einfra);
  }

  openInNewTab(url: string):void{
    window.open(url, '_blank');
  }

}
