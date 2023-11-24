import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ContactosComponent } from "./components/index.paginas";


    const routes: Routes = [
      { path: 'inicio', component: HomeComponent },
      { path: 'contactos', component: ContactosComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
