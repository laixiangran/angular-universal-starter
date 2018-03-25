import { Component, OnInit } from '@angular/core';
import { AMapWebService } from 'e-ngx-services';
import { Http } from '@angular/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	message: string;
	keyword: string = '肯德基';
	kfcList: any[] = [];

	constructor(public aMapWebServic: AMapWebService, public http: Http) {
	}

	ngOnInit() {
		this.message = '欢迎进入首页！';
		console.log(this.message);
		this.aMapWebServic.poiSearch(this.keyword, '北京市').subscribe((data: any) => {
			this.kfcList = data.pois;
		});
		this.http.get(`http://restapi.amap.com/v3/place/text?keywords=肯德基&city=北京市&offset=20&key=55f909211b9950837fba2c71d0488db9&extensions=all`)
			.subscribe((data: any) => {
			// this.kfcList = data.pois;
			console.log(JSON.parse(data._body).pois);
		});
	}

	query() {
		this.keyword = this.keyword === '肯德基' ? '麦当劳' : '肯德基' ;
		this.aMapWebServic.poiSearch(this.keyword, '北京市').subscribe((data: any) => {
			this.kfcList = data.pois;
		});
	}
}
