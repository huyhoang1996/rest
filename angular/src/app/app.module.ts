//AppModule
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// to use NgModel
import { NgModule } from '@angular/core';

//component in project
import { AppComponent } from './app.component';
import { SupermanFormComponent } from './superman-form/superman-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupermanService } from './superman.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { SupermanDetailComponent } from './superman-detail/superman-detail.component';



@NgModule({//metadata, declare component
  declarations: [
    AppComponent,
    SupermanFormComponent,
    SupermanDetailComponent
  ],
  imports: [ //declare module
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     AppRoutingModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
     // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [SupermanService],
  bootstrap: [AppComponent] //show component in server
})
export class AppModule { }
