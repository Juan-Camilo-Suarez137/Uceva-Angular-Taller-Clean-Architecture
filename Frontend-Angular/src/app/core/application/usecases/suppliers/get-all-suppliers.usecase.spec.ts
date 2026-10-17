import { TestBed } from "@angular/core/testing";
import { GetAllSuppliersUseCase } from "./get-all-suppliers.usecase";
import { SupplierRepository } from "../../../domain/repositories/suppliers/supplier.repository";
import { firstValueFrom, of, throwError } from "rxjs";
import { SUPPLIERS_MOCK } from "../../../../mocks/suppliers/suppliers.mocks";


describe('GetAllSuppliersUseCase', () => {
  let useCase: GetAllSuppliersUseCase;

  const countSuppliers = 5;
  const SupplierRepositoryMock: jest.Mocked<SupplierRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [
            GetAllSuppliersUseCase,
            { provide: SupplierRepository, useValue: SupplierRepositoryMock }
        ]
    })
    .compileComponents();
    useCase = TestBed.inject(GetAllSuppliersUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllSuppliersUseCase);
  });

  it('debería delegar la llamada del repository', async () => {
    SupplierRepositoryMock.getAll.mockReturnValue(of(SUPPLIERS_MOCK));
    const result = await firstValueFrom(useCase.execute(countSuppliers));
    expect(SupplierRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(SupplierRepositoryMock.getAll).toHaveBeenCalledWith(countSuppliers);
    expect(result).toEqual(SUPPLIERS_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de proveedores';
    SupplierRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countSuppliers);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(SupplierRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(SupplierRepositoryMock.getAll).toHaveBeenCalledWith(countSuppliers);
  });

});
