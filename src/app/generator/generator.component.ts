import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../core/auth-service.service';
import { Location } from '@angular/common';

import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

	public marque: string = '';
	public sku: string = '';
	public conso: string = '';
	public class: string = 'Appp';
	public classETxt: string = 'A+++';
	public buttonText: string = 'Enregistrer l\'image';

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

	changeClassE(event){
		switch(event.target.value){
			case 'Appp':
				this.classETxt = 'A+++';
			break;
			case 'App':
				this.classETxt = 'A++';
			break;
			case 'Ap':
				this.classETxt = 'A+';
			break;
			default:
				this.classETxt = this.class;
			break;
		}
	}

	exportAndSave(){

		var node = document.getElementById('etiquette');
		let _this = this;
		_this.buttonText = '<i class="fas fa-spinner spin" style="animation: spin 1s ease-in-out infinite;"></i>';

	    domtoimage.toBlob(document.getElementById('etiquette'))
	        .then(function (blob) {
	            saveAs(blob, 'etiquette.png');
	            _this.buttonText = 'Image enregistré !';
	        });

	}

	reset(){
		this.marque = '';
		this.sku = '';
		this.conso = '';
		this.class = 'Appp';
		this.classETxt = 'A+++';
		this.buttonText = 'Enregistrer l\'image';
	}

}
