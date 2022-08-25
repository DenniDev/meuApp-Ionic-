import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCrtl: ToastController) { }

  ngOnInit() {
  }

  async toastSimples() {
    let toast = await this.toastCrtl.create({
      message:'Olá mundo',
      duration: 2000 //duração é em milesegundos
    });
    toast.present();
  }
  async toastOpcoes() {
    const toast = await this.toastCrtl.create({
      header:'Toast header',
      message: 'Click to close',
      position:'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log("Favorite Clicked");
          }
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    toast.present();
  }
}
