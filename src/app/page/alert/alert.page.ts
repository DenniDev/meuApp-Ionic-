import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alert(){
    const alert = await this.alertCtrl.create({
      header: 'Titulo',
      subHeader: 'Sub-titulo',
      message: 'Mensagem do Alert',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertConfirme(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons:[
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm cancel: blah');
        }
      },
      {
        text:'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
      ]
    });
    await alert.present();
  }
  async alertMultiplo() {
    const alert = await this.alertCtrl.create({
      header:'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Deelete']
    });
    await alert.present();
  }

  async alertPrompt() {
    const alert = await this.alertCtrl.create({
      header:'Prompt!',
      inputs:[
        {
          name:'name1',
          type: 'text',
          placeholder:'placeholder 1'
        },
        {
          name:'name2',
          type: 'text',
          id: 'name2-id',
          value:'hello',
          placeholder:'placeholder 2'
        },

        // Multiline input.
        {
          name:'paragraph',
          id:'paragraph',
          type: 'textarea',
          placeholder:'placeholder 3'
        },
        {
          name:'name3',
          value:'https://ionicframework.com',
          type: 'url',
          placeholder:'Favorite site ever'
        },
          //input date with min & max
        {
          name:'name4',
          type: 'date',
          min:'2017-03-01',
          max:'2018-03-01'
        },
               //input date without min nor max
        {
          name:'name5',
          type: 'date',
        },
        {
          name:'name6',
          type: 'number',
          min:-5,
          max:10
        },
        {
          name:'name7',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () =>{
            console.log('Confirm cancel');
          }
        },
        {
          text: 'ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
  async alertPrompt2(){
    const alert = await this.alertCtrl.create({
      header: 'Acesso Restrito!',
      inputs: [
        {
          name:'email',
          type:'text',
          placeholder:'Informe seu email'
        },
        {
          name:'senha',
          type:'password',
          placeholder:'Informe sua senha'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          }
        },
        {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });
    await alert.present();
  }
}
