import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routes';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [LazyComponent],
	imports: [
		CommonModule,
		LazyRoutingModule
	]
})
export class LazyModule {

}
