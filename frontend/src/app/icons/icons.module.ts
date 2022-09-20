import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feather Icons
import { FeatherModule } from 'angular-feather';
import { Edit, Trash } from 'angular-feather/icons';

const icons = {
  Edit,
  Trash
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
