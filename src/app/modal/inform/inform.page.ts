import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.page.html',
  styleUrls: ['./inform.page.scss'],
})
export class InformPage implements OnInit {

  private user;

  constructor(
    public apiService: UserService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
