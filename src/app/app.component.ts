import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CrudSoloTalentoComponent } from "./components/crud-solo-talento/crud-solo-talento.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CrudSoloTalentoComponent, ReactiveFormsModule],
})

export class AppComponent {
  title = 'Crud_angular';
}
