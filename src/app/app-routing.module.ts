import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GeneratorComponent } from './generator/generator.component';
import { AppComponent } from './app.component';
import { UserResolver } from './core/user-resolver';

import { AuthGuard } from './core/auth.guard';

/*const routes: Routes = [
	{ path: '',   redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
	{ path: 'generator', component: GeneratorComponent, resolve: {data: UserResolver} }
];*/

const routes: Routes = [
	{ path: '',   redirectTo: '/generator', pathMatch: 'full' },
	{ path: 'generator', component: GeneratorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
