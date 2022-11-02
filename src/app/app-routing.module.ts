import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:"",component:FrontLayoutComponent,
  children:[
    {path: 'accueil',loadChildren:()=>import('./views/front/accueil/accueil.module').then(m=>m.AccueilModule)},
    {path: 'services',loadChildren:()=>import('./views/front/services/services.module').then(m=>m.ServicesModule)},
    {path: 'connexion',loadChildren:()=>import('./views/front/connexion/connexion.module').then(m=>m.ConnexionModule)},
    {path: 'inscription',loadChildren:()=>import('./views/front/inscription/inscription.module').then(m=>m.InscriptionModule)},
]},

  {path:'admin',component:AdminLayoutComponent,
   children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'reclamation',loadChildren:()=>import('./views/admin/reclamation/reclamation.module').then(m=>m.ReclamationModule)},
    {path:'statistique',loadChildren:()=>import('./views/admin/statistique/statistique.module').then(m=>m.StatistiqueModule)}
   ]},
  {path:"user",component:UserLayoutComponent,
  children:[
    {path: 'accueil',loadChildren:()=>import('./views/user/accueil/accueil.module').then(m=>m.AccueilModule)},
    {path: 'services',loadChildren:()=>import('./views/user/services/services.module').then(m=>m.ServicesModule)},
    {path: 'connexion',loadChildren:()=>import('./views/user/connexion/connexion.module').then(m=>m.ConnexionModule)}
]}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  LayoutsModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
