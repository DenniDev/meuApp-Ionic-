import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  // Criação da variável para a url
  url: any;

  // Definindo uma variável no construtor
  constructor(private domSanitize: DomSanitizer, private navCtrl: NavController) { }

  ngOnInit() {
    // definimos a abertura de página no Oninit porque ela é a inicialização da página
    this.url =
    this.domSanitize.bypassSecurityTrustResourceUrl('https://programadorbr.com/')
  }

  // Programação do voltar
  voltar(){
    this.navCtrl.navigateForward('home')
  }
}
