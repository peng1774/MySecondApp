import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
 
import { ComponentsModule } from '../../components/components.module';

import { PipesModule } from  '../../pipes/pipes.module'

@NgModule({

    imports: [
        IonicPageModule.forChild(HomePage),
        ComponentsModule,
      	PipesModule,
    ],
 

    exports: [],

    declarations: [HomePage],

    providers: [],
})
export class HomeModule { }