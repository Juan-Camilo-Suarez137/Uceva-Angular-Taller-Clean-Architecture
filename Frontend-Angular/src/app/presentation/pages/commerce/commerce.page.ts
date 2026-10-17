import { Component, inject, OnInit } from '@angular/core';
import { GetAllCommerceUseCase } from '../../../core/application/usecases/commerce/get-all-commerce.usecase';
import { Commerce } from '../../../core/domain/models/commerce/commerce.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { CommerceTableComponent } from '../../components/commerce-table/commerce-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Componente contenedor de artículos comerciales.
 *
 * Se utiliza para gestionar y mostrar un listado de artículos comerciales
 * utilizando el componente `CommerceTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el caso de uso `GetAllCommerceUseCase`
 * para obtener los artículos comerciales y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.page.html',
  imports: [CommerceTableComponent, AlertComponent],
  providers: [GetAllCommerceUseCase]
})
export class CommercePage implements OnInit {
  /**
   * Listado de artículos comerciales obtenidos desde el caso de uso.
   * @type {Commerce[]}
   */
  commerceList: Commerce[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Caso de Uso para obtener artículos comerciales.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private getAllCommerceUseCase = inject(GetAllCommerceUseCase);

  /**
   * Inicializa el componente y carga los artículos comerciales.
   * @remarks
   * Se suscribe al método `execute()` del caso de uso y
   * asigna los datos recibidos a la propiedad `commerceList`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.getAllCommerceUseCase.execute(10).subscribe({
      next: (commerce) => {
        this.commerceList = commerce;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
