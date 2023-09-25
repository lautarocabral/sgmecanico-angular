import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rectificado } from 'src/app/models/rectificado.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-rectificado',
  templateUrl: './rectificado.component.html',
  styleUrls: ['./rectificado.component.scss']
})
export class RectificadoComponent {

  rectificados: Rectificado[] = [];


  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRectificadosList();
  }

  getRectificadosList() {
    try {
      this.apiService.getAll().subscribe(
        (response) => {
          this.rectificados = response;
        },
        (error) => {
          // Handle error here
        }
      );
    } catch (error) {

    }
  }
}
