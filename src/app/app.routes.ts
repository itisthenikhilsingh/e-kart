import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login} from './component/login/login';
import { Register } from './component/register/register';

export const routes: Routes = [
    {path: "", component: Landing},
    { path: 'login', component: Login },
  { path: 'register', component: Register},
];
