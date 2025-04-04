import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonRadioGroup,IonRadio,IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/angular/standalone';

import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonRadioGroup ,IonRadio,IonItem, IonLabel, IonList ,IonBackButton 
    ,IonButton,IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule]
})
export class StatusPage implements OnInit {
  myStatus: string=' ';
  constructor(private storage:Storage, private router:Router) { }
  async onSave()
  {
    console.log(this.myStatus);
    await this.storage.create();
    await this.storage.set('status', this.myStatus);
    this.router.navigate(['/home']);
  }

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }


  ngOnInit() {
  }

}
