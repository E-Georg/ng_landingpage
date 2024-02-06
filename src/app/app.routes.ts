import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: '**', component: WelcomeComponent}
];
