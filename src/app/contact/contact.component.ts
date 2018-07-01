import { Component, OnInit } from "@angular/core";
import { AppService, IMessage } from "./contact.service";
import { NgModel } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  lat = 54.910705;
  lng = 23.919183;
  zoom = 14;

  message: IMessage = {};

  constructor(private appService: AppService) {}

  ngOnInit() {}

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(
      res => {
        console.log("AppComponent Success", res);
      },
      error => {
        console.log("AppComponent Error", error);
      }
    );
  }
}
