import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: '', component: TableComponent },
  { path: 'people', component: TableComponent },
  { path: 'people/:id', component: PersonDetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
