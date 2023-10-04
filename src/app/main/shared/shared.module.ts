// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//components
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ThemeChangerComponent } from './components/theme-changer/theme-changer.component';

// Pipes

const _modules = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule];

const _declarations = [PaginatorComponent, ThemeChangerComponent];

@NgModule({
  declarations: [..._declarations],
  imports: [..._modules],
  exports: [..._declarations, ..._modules]
})
export class SharedModule {}
