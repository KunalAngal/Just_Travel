import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'',redirectTo:'/About',pathMatch:'full'},
  {path:'',redirectTo:'/Blog',pathMatch:'full'},
  {path:'',redirectTo:'/Contact',pathMatch:'full'},
  {path:'',redirectTo:'/Gallery',pathMatch:'full'},

  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"blog",component:BlogComponent},
  {path:"contact",component:ContactComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
