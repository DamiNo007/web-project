import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ActionGamesComponent } from './action-games/action-games.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShootersComponent } from './shooters/shooters.component';
import { RPGComponent } from './rpg/rpg.component';
import { OnlineComponent } from './online/online.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReviewsComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    ActionGamesComponent,
    ShootersComponent,
    RPGComponent,
    OnlineComponent,
    DashboardComponent,
    GameDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
