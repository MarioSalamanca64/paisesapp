import { NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
      //si no tiene ningun / estara en esta url que es la principal  
      path: '',
      component:PorPaisComponent,
      //si no tiene la url correcta que caiga en la url principal
      pathMatch:'full'
    },
    {
        // tendria la url /region
        path:'region',
        component: PorRegionComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {   
        // espara ver el pais ya que usa url dinamicas :yelnombre
        path:'pais/:id',
        component:VerPaisComponent
    },
    {   
        // cualquier otro ulr '**'se mandaria ala pagina principal '' 
        // o puedes crear una url 404 para mostrar error personalisado 
        path:'**',
        redirectTo:''
    }

];


@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        // es el que usa las url por eso este se exporta 
        RouterModule
    ]
})
export class AppRoutingModule{

}