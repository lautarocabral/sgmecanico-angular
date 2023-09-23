import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-operario',
  templateUrl: './modulo-operario.component.html',
  styleUrls: ['./modulo-operario.component.scss']
})
export class ModuloOperarioComponent {
  constructor(private router: Router) {}

  navigateToUpdateMotor() {
    this.router.navigate(['/updateMotor']);
}
}
