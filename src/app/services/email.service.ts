import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class EmailService {

	emailUrl: string = "https://formspree.io/messiaslima.03@gmail.com";

	constructor(
		private http: Http
	) { }

	enviarEmail(contato: any) {
		return this.http.post(this.emailUrl, contato);
	}
}
