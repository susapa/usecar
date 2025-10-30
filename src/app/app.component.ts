import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toast } from "primeng/toast";
@Component({
    selector: 'app-root',
    standalone:true,
    imports: [RouterModule, Toast],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'usecar';
}
