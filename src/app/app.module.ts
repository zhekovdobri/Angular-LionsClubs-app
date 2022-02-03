import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { SocialComponent } from './component/social/social.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DonateComponent } from './component/donate/donate.component';
import { CarouselComponent } from './component/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ImagecomponentComponent,
    SocialComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    CarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'donate', component: DonateComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
