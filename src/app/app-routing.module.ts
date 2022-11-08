import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PrestataireLayoutComponent } from './layouts/prestataire-layout/prestataire-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,
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
    {path:'statistique',loadChildren:()=>import('./views/admin/statistique/statistique.module').then(m=>m.StatistiqueModule)},
    {path:'categorieservice',loadChildren:()=>import('./views/admin/categorieservice/categorieservice.module').then(m=>m.CategorieserviceModule)}
 
  ]},
  {path:'user',component:UserLayoutComponent,
  children:[
    {path: '',loadChildren:()=>import('./views/user/accueil/accueil.module').then(m=>m.AccueilModule)},
    {path: 'accueil',loadChildren:()=>import('./views/user/accueil/accueil.module').then(m=>m.AccueilModule)},
    {path: 'services',loadChildren:()=>import('./views/user/services/services.module').then(m=>m.ServicesModule)},
    {path: 'connexion',loadChildren:()=>import('./views/user/connexion/connexion.module').then(m=>m.ConnexionModule)},
    {path: 'demandes',loadChildren:()=>import('./views/user/demandes/demandes.module').then(m=>m.DemandesModule)},
    {path: 'demandeservice',loadChildren:()=>import('./views/user/demandeservice/demandeservice.module').then(m=>m.DemandeserviceModule)},
    {path: 'reclamation',loadChildren:()=>import('./views/user/reclamation/reclamation.module').then(m=>m.ReclamationModule)}

    
  ]},
{path:'prestataire',component: PrestataireLayoutComponent,
children:[
 {path:'',loadChildren:()=>import('./views/prestataire/accueils/accueils.module').then(m=>m.AccueilsModule)},
 {path:'accueils',loadChildren:()=>import('./views/prestataire/accueils/accueils.module').then(m=>m.AccueilsModule)},
 {path:'service',loadChildren:()=>import('./views/prestataire/service/service.module').then(m=>m.ServiceModule)},
 {path:'demande',loadChildren:()=>import('./views/prestataire/demande/demande.module').then(m=>m.DemandeModule)},
 {path:'listclient',loadChildren:()=>import('./views/prestataire/listclient/listclient.module').then(m=>m.ListclientModule)}

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
