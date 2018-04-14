import { Component } from '@angular/core';
import { EmailService } from './services/email.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	contato: any = {};
	carregando: boolean = false;
	erroEmail: boolean = false;

	constructor(
		private emailService: EmailService
	){}

	downloadCV() {
		window.open("./assets/docs/cv.pdf")
	}

	openLink(link:string){
		window.open(link, "blank_");
	}

	openEmail(){
		window.open("mailto:messiaslima.03@gmail.com", "_self") ;
	}

	enviarEmail(contato:any){
		this.emailService.enviarEmail(contato).subscribe(
			(data)=>{},
			(err)=>{}
		);
	}
}
