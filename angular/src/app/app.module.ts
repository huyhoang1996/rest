//AppModule
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// to use NgModel
import { NgModule } from '@angular/core';

//component in project
import { AppComponent } from './app.component';
import { SupermanFormComponent } from './superman-form/superman-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupermanService } from './superman.service';
import { SearchList } from './searchList.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { HelioComponent } from './helio/helio.component';
import { HelioService } from './helio.service';



@NgModule({//metadata, declare component
  declarations: [
    AppComponent,
    SupermanFormComponent,
    SearchList,
    HelioComponent
  ],
  imports: [ //declare module
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     AppRoutingModule,
     Ng2SearchPipeModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
     // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [SupermanService, HelioService],
  bootstrap: [AppComponent] //show component in server
})
export class AppModule { }
