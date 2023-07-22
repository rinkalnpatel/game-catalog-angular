// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External modules
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { ToastComponent } from './components/blocks/toast/toast.component';
import { ProgressBarComponent } from './components/blocks/progress-bar/progress-bar.component';

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';

// Pipes

// Directives
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DetailsComponent } from '../pages/details/details.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // External modules
    TranslateModule,
    AngularSvgIconModule,
    NgbModule,
  ],
  declarations: [
    // Components
    ToastComponent,
    ProgressBarComponent,

    // Layouts
    LayoutHeaderComponent,
    PageLayoutComponent,

    // Directives
    SearchBarComponent,
    DetailsComponent,
    HighlightDirective,
  ],
  exports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // External modules
    TranslateModule,
    AngularSvgIconModule,
    NgbModule,

    // Components
    ToastComponent,
    ProgressBarComponent,
    SearchBarComponent,
    DetailsComponent,

    // Layouts
    LayoutHeaderComponent,
    PageLayoutComponent,

    // Directives
    HighlightDirective,
  ],
  providers: [],
})
export class SharedModule {}
