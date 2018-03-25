import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent, pathMatch: 'full'},
	{path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}
