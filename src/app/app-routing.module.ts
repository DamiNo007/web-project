import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionGamesComponent } from './action-games/action-games.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import {GameDetailsComponent} from './game-details/game-details.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import {ShootersComponent} from './shooters/shooters.component'
import {RPGComponent} from './rpg/rpg.component'
import {CartComponent} from './cart/cart.component'
import {OnlineComponent} from './online/online.component'


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'categories' , component: CategoriesComponent},
  {path: 'games/:gameId' , component: GameDetailsComponent},
  {path: 'categories/1' , component: ActionGamesComponent},
  {path: 'categories/2' , component: ShootersComponent},
  {path: 'categories/3' , component: RPGComponent},
  {path: 'categories/4' , component: OnlineComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'games' , component: CategoriesComponent},
  {path: 'reviews' , component: ReviewsComponent},
  {path: 'news' , component: NewsComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
