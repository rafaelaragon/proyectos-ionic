import { Component } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../services/film.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films: Film[] = [];
  film: Film;
  isClicked: boolean = false;
  index: number;

  constructor(
    private filmService: FilmService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.films = this.filmService.getFilms();
  }
  muestraDetalles(id: string) {

    this.index = this.films.findIndex(f => f.title == id);
    this.film = this.filmService.getFilm(id);
    console.log(this.film);
    this.isClicked = !this.isClicked;
  }
  deleteFilm(id: string) {
    this.filmService.deleteFilm(id);
    this.films = this.filmService.getFilms();
  }

  async presentAlertConfirm(id: string) {
    const alert = await this.alertController.create({
      header: 'Borrar película',
      message: `Vas a borrar <strong>${id}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => this.deleteFilm(id)
        }
      ]
    });
    await alert.present();
  }
}
