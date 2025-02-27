import { Component } from "@angular/core";
import { Country } from "@jaguards/select-country";

@Component({
  selector: "app-minimal",
  templateUrl: "./minimal.component.html",
})
export class MinimalComponent {
  onCountrySelected($event: Country): void {
    console.log("Minimal example: onCountrySelected", $event);
  }
}
