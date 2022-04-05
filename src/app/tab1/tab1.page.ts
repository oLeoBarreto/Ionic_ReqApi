import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { InformPage } from '../modal/inform/inform.page';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  listUser = [];
  userDetail = {};
  page = 1;
  totalPage: number;
  userId: number;
  modal: HTMLElement;

  constructor(
    public apiService: UserService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit(): void {
    this.getUsers(this.apiService.urlApi);
  }

  async openModal(object: any) {
    const modal = await this.modalController.create({
      component: InformPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        "email": object.email,
        "first_name": object.first_name,
        "last_name": object.last_name,
        "avatar": object.avatar
      }
    });
    return await modal.present();
  }

  getUsers(url: string) {
    this.listUser = [];
    this.apiService.getUsersList(url).subscribe(res => {
      this.page = res['page'];
      this.totalPage = res['total_pages'];
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

  getUserDetail(url: string) {
    this.userDetail = {};
    this.apiService.getUserData(url).subscribe(res => {
      this.userDetail = res['data'];
      this.openModal(this.userDetail);
    });
  }

  userDetails(id: number) {
    this.userId = id;
    this.getUserDetail(`${this.apiService.urlApi}/${this.userId}`)
  }
}
