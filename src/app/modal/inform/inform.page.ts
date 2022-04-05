import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.page.html',
  styleUrls: ['./inform.page.scss'],
})
export class InformPage implements OnInit {

  @Input() email: string;
  @Input() first_name: string;
  @Input() last_name: string;
  @Input() avatar: string;

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
