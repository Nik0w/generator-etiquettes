import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../core/auth-service.service';
import { Location } from '@angular/common';

import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

	public marque:string = '';
	public sku:string = '';
	public conso:string = '';

	constructor(
		public authService: AuthServiceService,
		private location : Location) { }

	ngOnInit() {
	}

	logout(){
	  this.authService.doLogout()
	  .then((res) => {
	    this.location.back();
	  }, (error) => {
	    console.log("Logout error", error);
	  });
	}

	exportAndSave(){

		var node = document.getElementById('etiquette');

		domtoimage.toPng(node)
		    .then(function (dataUrl) {
		        var img = new Image();
		        img.src = dataUrl;
		        document.body.appendChild(img);
		    })
		    .catch(function (error) {
		        console.error('oops, something went wrong!', error);
		    });

	}

}
