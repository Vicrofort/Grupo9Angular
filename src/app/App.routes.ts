import {  RouterModule, Routes } from "@angular/router";

import { HomeComponent, ContactosComponent } from "./components/index.paginas";

const app_routes: Routes = [
    
    { path: 'home', component: HomeComponent},
    { path: 'contactos', component: ContactosComponent},
    { path: 'contactos', component: ContactosComponent},
    
     ];

     export const app_routing = RouterModule.forRoot(app_routes, {useHash:true} );
