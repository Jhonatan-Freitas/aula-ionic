import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorreiosPage } from './correios';

@NgModule({
  declarations: [
    CorreiosPage,
  ],
  imports: [
    IonicPageModule.forChild(CorreiosPage),
  ],
})
export class CorreiosPageModule {}
