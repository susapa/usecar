import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Access } from './access';
import { Error } from './error';
import { RegisterComponent } from './register/register.component';
export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
] as Routes;
