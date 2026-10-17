import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { COMMERCE_MOCK } from '../../../../../mocks/commerce/commerce.mocks';
import { Commerce } from '../../../../domain/models/commerce/commerce.model';
import { DataService } from '../../../services/data.service';
import { CommerceSpringBootRepositoryImpl } from './commerce-springboot.repository.impl';

describe('CommerceSpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: CommerceSpringBootRepositoryImpl;

  const countCommerce = 5;
  const DataServiceMock = { getAllCommerceSpringBoot: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    TestBed.configureTestingModule({
        providers: [
            CommerceSpringBootRepositoryImpl,
            { provide: DataService, useValue: DataServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(CommerceSpringBootRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllCommerceSpringBoot()', () => {
    const getAllSpy = DataServiceMock.getAllCommerceSpringBoot.mockReturnValue(of([]));
    repository.getAll(countCommerce).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countCommerce);
  });

  it('debe devolver el listado de artículos comerciales como Observable', (done) => {
    DataServiceMock.getAllCommerceSpringBoot.mockReturnValue(of(COMMERCE_MOCK));
    repository.getAll(countCommerce).subscribe((commerce: Commerce[]) => {
      expect(commerce).toEqual(COMMERCE_MOCK);
      done();
    });
  });
});
