import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { COMMERCE_MOCK } from '../../../../../mocks/commerce/commerce.mocks';
import { Commerce } from '../../../../domain/models/commerce/commerce.model';
import { DataService } from '../../../services/data.service';
import { CommerceLocalRepositoryImpl } from './commerce-local.repository.impl';

describe('CommerceLocalRepositoryImpl (Infrastructure)', () => {
  let repository: CommerceLocalRepositoryImpl;

  const countCommerce = 5;
  const DataServiceMock = { getAllCommerceLocal: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    TestBed.configureTestingModule({
        providers: [
            CommerceLocalRepositoryImpl,
            { provide: DataService, useValue: DataServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(CommerceLocalRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllCommerceLocal()', () => {
    const getAllSpy = DataServiceMock.getAllCommerceLocal.mockReturnValue(of([]));
    repository.getAll(countCommerce).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countCommerce);
  });

  it('debe devolver el listado de artículos comerciales como Observable', (done) => {
    DataServiceMock.getAllCommerceLocal.mockReturnValue(of(COMMERCE_MOCK));
    repository.getAll(countCommerce).subscribe((commerce: Commerce[]) => {
      expect(commerce).toEqual(COMMERCE_MOCK);
      done();
    });
  });
});
