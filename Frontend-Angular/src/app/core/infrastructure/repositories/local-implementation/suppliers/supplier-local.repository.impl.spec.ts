import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SUPPLIERS_MOCK } from '../../../../../mocks/suppliers/suppliers.mocks';
import { Supplier } from '../../../../domain/models/suppliers/supplier.model';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { SupplierLocalRepositoryImpl } from './supplier-local.repository.impl';

// faker es un módulo ESM que Jest no puede leer; este repositorio no lo usa
// directamente (el servicio está simulado), así que se reemplaza por un objeto vacío.
jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('SupplierLocalRepositoryImpl (Infrastructure)', () => {
  let repository: SupplierLocalRepositoryImpl;

  const countSuppliers = 5;
  const SuppliersServiceMock = { getAllSuppliersLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            SupplierLocalRepositoryImpl,
            { provide: SuppliersService, useValue: SuppliersServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(SupplierLocalRepositoryImpl)
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a SuppliersService.getAllSuppliersLocal()', () => {
    const getAllSpy = SuppliersServiceMock.getAllSuppliersLocal.mockReturnValue(of([]));
    repository.getAll(countSuppliers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countSuppliers);
  });

  it('debe devolver el listado de proveedores como Observable', (done) => {
    SuppliersServiceMock.getAllSuppliersLocal.mockReturnValue(of(SUPPLIERS_MOCK))
    repository.getAll(countSuppliers).subscribe((suppliers: Supplier[]) => {
      expect(suppliers).toEqual(SUPPLIERS_MOCK);
      done();
    });
  });
});
