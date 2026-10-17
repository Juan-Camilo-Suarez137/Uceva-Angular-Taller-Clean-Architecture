import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllSuppliersUseCase } from '../../../core/application/usecases/suppliers/get-all-suppliers.usecase';
import { SUPPLIERS_MOCK } from '../../../mocks/suppliers/suppliers.mocks';
import { SuppliersTableComponent } from '../../components/suppliers-table/suppliers-table.component';
import { SuppliersPage } from './suppliers.page';

describe('SuppliersPage', () => {
  let component: SuppliersPage;
  let fixture: ComponentFixture<SuppliersPage>;

  const GetAllSuppliersUseCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersPage, SuppliersTableComponent],
    })
    .overrideComponent(SuppliersPage, {
      set: {
        providers: [
          { provide: GetAllSuppliersUseCase, useValue: GetAllSuppliersUseCaseMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersPage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.suppliers).toEqual([]);
  });

  it('debe ejecutar el caso de uso pidiendo 10 proveedores', () => {
    GetAllSuppliersUseCaseMock.execute.mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    expect(GetAllSuppliersUseCaseMock.execute).toHaveBeenCalledWith(10);
  });

  it('debe cargar los proveedores y cambiar el estado a success', () => {
    GetAllSuppliersUseCaseMock.execute.mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    expect(component.suppliers).toEqual(SUPPLIERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('no debería cargar los proveedores y cambiar el estado a error', () => {
    GetAllSuppliersUseCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.suppliers).toEqual([]);
    expect(component.state).toBe('error');
  });

});
