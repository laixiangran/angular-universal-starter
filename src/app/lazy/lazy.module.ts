import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routes';

@NgModule({
	declarations: [LazyComponent],
	imports: [
		LazyRoutingModule
	]
})
export class LazyModule {

}
