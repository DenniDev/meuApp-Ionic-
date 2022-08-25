import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  exibirSobre() {
    this.navCtrl.navigateForward('sobre');
  }
  exibirVacinacao(){
    this.navCtrl.navigateForward('vacinacao');
  }
  exibirOutras(){
    this.navCtrl.navigateForward('outras');
  }
  exibirContato(){
    this.navCtrl.navigateForward('contato')
  }
  ngOnInit() {
  }

}