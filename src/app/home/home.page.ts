import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonButton,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  myStatus: string= ' ';
  constructor(private storage:Storage) {}

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }
}
