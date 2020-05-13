import { NgModule } from '@angular/core';
import { NgxLoaderBarComponent } from './ngx-loader-bar/ngx-loader-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxLoaderBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgxLoaderBarComponent]
})
export class NgxLoaderBarModule { }
