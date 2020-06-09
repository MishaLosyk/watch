import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import {FilmsService} from './films.service';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';
import { FilmPageComponent } from './film-page/film-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetAppComponent } from './get-app/get-app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {AutofocusDirective} from './autofocus.directive';
import { ContactedComponent } from './contacted/contacted.component'

let routs = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'contacted', component: ContactedComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'app', component: GetAppComponent},
  {path: '404', component: NotFoundPageComponent},
  {path: 'home/:id', component: FilmPageComponent},
  {path: ':id', component: FilmPageComponent},
  {path: '**', component: NotFoundPageComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent,
    HomePageComponent,
    ContactsPageComponent,
    NotFoundPageComponent,
    FilmPageComponent,
    GetAppComponent,
    AboutUsComponent,
    AutofocusDirective,
    ContactedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
