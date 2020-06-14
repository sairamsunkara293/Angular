import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Services/alert.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  message: any
  constructor(private alertService: AlertService) { }
  private subscription: Subscription
  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe(message => {
      debugger;
      switch (message && message.type) {
        case 'success':
          message.cssClass = 'success';
          break;
        case 'error':
          message.cssClass = 'warning';
          break;
      }

      this.message = message;
    }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
