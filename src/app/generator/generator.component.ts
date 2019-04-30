import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../core/auth-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.sass']
})
export class GeneratorComponent implements OnInit {

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

}
