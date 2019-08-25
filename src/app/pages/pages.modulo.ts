import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModulo } from '../shared/shared.modulo';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        Graficas1Component,
        DashboardComponent,
        ProgressComponent
    ],
    exports: [
        Graficas1Component,
        DashboardComponent,
        ProgressComponent
    ],
    imports: [
        SharedModulo,
        PAGES_ROUTES
    ]
})
export class PagesModule{}