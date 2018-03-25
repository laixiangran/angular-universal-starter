import { BrowserModule } from '@angular/platform-browser';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { isPlatformBrowser } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule.withServerTransition({appId: 'my-app'}),
		TransferHttpCacheModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(@Inject(PLATFORM_ID) private platformId: Object,
				@Inject(APP_ID) private appId: string) {
		const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
		console.log(`Running ${platform} with appId=${appId}`);
	}
}
