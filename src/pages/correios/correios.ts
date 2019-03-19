import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorreioProvider } from '../../providers/correio/correio';

@IonicPage()
@Component({
  selector: 'page-correios',
  templateUrl: 'correios.html',

  providers: [
    CorreioProvider
  ]
})
export class CorreiosPage {

  txtCidade:string;
  txtEstado:string;
  txtLogradouro:string;

  enderecos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cProvider: CorreioProvider) {
  }

  ionViewDidLoad() {}

  listaEnderecos(){
    if((this.txtEstado.length == 2) && (this.txtCidade.length >= 3) && (this.txtLogradouro.length >=3))
    this.cProvider.localizarEndereco(this.txtEstado, this.txtCidade, this.txtLogradouro).subscribe(
      data => {
        let resultado = (data as any)._body;
        let resultadoJson = JSON.parse(resultado);
        this.enderecos = resultadoJson;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
