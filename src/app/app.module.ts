import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { isPlatformBrowser } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule.withServerTransition({appId: 'my-app'}),
		TransferHttpCacheModule,
		BrowserTransferStateModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
		HomeComponent
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
