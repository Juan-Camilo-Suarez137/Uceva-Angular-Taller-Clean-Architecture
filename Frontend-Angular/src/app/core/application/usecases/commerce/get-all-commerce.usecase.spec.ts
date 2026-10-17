import { TestBed } from "@angular/core/testing";
import { GetAllCommerceUseCase } from "./get-all-commerce.usecase";
import { CommerceRepository } from "../../../domain/repositories/commerce/commerce.repository";
import { firstValueFrom, of, throwError } from "rxjs";
import { COMMERCE_MOCK } from "../../../../mocks/commerce/commerce.mocks";

describe('GetAllCommerceUseCase', () => {
  let useCase: GetAllCommerceUseCase;

  const countCommerce = 5;
  const CommerceRepositoryMock: jest.Mocked<CommerceRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    jest.clearAllMocks();
    await TestBed.configureTestingModule({
        providers: [
            GetAllCommerceUseCase,
            { provide: CommerceRepository, useValue: CommerceRepositoryMock }
        ]
    })
    .compileComponents();
    useCase = TestBed.inject(GetAllCommerceUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllCommerceUseCase);
  });

  it('debería delegar la llamada del repository', async () => {
    CommerceRepositoryMock.getAll.mockReturnValue(of(COMMERCE_MOCK));
    const result = await firstValueFrom(useCase.execute(countCommerce));
    expect(CommerceRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(CommerceRepositoryMock.getAll).toHaveBeenCalledWith(countCommerce);
    expect(result).toEqual(COMMERCE_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de articulos comerciales';
    CommerceRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countCommerce);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(CommerceRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(CommerceRepositoryMock.getAll).toHaveBeenCalledWith(countCommerce);
  });

});
