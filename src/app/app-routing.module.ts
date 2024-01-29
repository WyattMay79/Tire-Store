import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TireListComponent } from './component/tire-list/tire-list.component';
import { TireDetailComponent } from './component/tire-detail/tire-detail.component';
import { CreateTireComponent } from './component/create-tire/create-tire.component';
import { EditTireComponent } from './component/edit-tire/edit-tire.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "products", component: TireListComponent },
  { path: "products/:id", component: TireDetailComponent },
  { path: "newProduct", component: CreateTireComponent },
  { path: "editProduct/:id", component: EditTireComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
