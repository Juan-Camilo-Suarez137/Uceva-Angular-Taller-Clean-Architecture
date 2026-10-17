import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SUPPLIERS_MOCK } from '../../../../../mocks/suppliers/suppliers.mocks';
import { Supplier } from '../../../../domain/models/suppliers/supplier.model';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { SupplierSpringBootRepositoryImpl } from './supplier-springboot.repository.impl';

// faker es un módulo ESM que Jest no puede leer; este repositorio no lo usa
// directamente (el servicio está simulado), así que se reemplaza por un objeto vacío.
jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('SupplierSpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: SupplierSpringBootRepositoryImpl;

  const countSuppliers = 5;
  const SuppliersServiceMock = { getAllSuppliersSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            SupplierSpringBootRepositoryImpl,
            { provide: SuppliersService, useValue: SuppliersServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(SupplierSpringBootRepositoryImpl)
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a SuppliersService.getAllSuppliersSpringBoot()', () => {
    const getAllSpy = SuppliersServiceMock.getAllSuppliersSpringBoot.mockReturnValue(of([]));
    repository.getAll(countSuppliers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countSuppliers);
  });

  it('debe devolver el listado de proveedores como Observable', (done) => {
    SuppliersServiceMock.getAllSuppliersSpringBoot.mockReturnValue(of(SUPPLIERS_MOCK))
    repository.getAll(countSuppliers).subscribe((suppliers: Supplier[]) => {
      expect(suppliers).toEqual(SUPPLIERS_MOCK);
      done();
    });
  });
});
