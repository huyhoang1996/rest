import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupermanFormComponent }	from './superman-form/superman-form.component';
import { HelioComponent }	from './helio/helio.component';


const routes: Routes = [
  { path: 'superman', component: SupermanFormComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//default routing
  { path: 'helio', component: HelioComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}


