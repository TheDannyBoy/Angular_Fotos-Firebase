import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {
  
  archivos: FileItem[] = [];
  estaSobreDrop = false;
  
  constructor(
    public _cis: CargaImagenesService
  ) { }

  ngOnInit() {
  }

  public cargarImagenes(){
    this._cis.cargarImagenesFirebase( this.archivos );
  }

  public limpiarArchivos(){
    this.archivos = [];
  }

}
