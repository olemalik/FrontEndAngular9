import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home';
import { LoginComponent } from '../app/components/login';
import { AuthGuard } from './helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);