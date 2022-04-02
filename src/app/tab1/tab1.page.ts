import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
//import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  listUser = [];
  page = 1;
  totalPage: number;
  modal: HTMLElement;

  constructor(public apiService: UserService, public modalController: ModalController) { }

  ngOnInit(): void {
    this.getUsers(this.apiService.urlApi);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage, //TODO: Criar e implementar pagina para modal
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getUsers(url: string) {
    this.listUser = [];
    this.apiService.getUsersList(url).subscribe(res => {
      this.page = res['page']
      this.totalPage = res['total_pages']
      res["data"].forEach(user => {
        this.listUser.push(user);
      });
    });
  }

  nextPage() {
    this.page += 1;
    this.getUsers(`${this.apiService.urlApi}?page=${this.page}`);
  }

  previusPage() {
    this.page -= 1;
    this.getUsers(`${this.apiService.urlApi}?page=${this.page}`);
  }
}
