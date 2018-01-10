import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupermanFormComponent }	from './superman-form/superman-form.component';
import { SupermanDetailComponent }	from './superman-detail/superman-detail.component';

const routes: Routes = [
  { path: 'superman', component: SupermanFormComponent },
  { path: 'supermandetail', component: SupermanDetailComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//default routing
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}


