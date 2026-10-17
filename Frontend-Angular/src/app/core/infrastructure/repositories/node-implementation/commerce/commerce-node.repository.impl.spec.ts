import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { COMMERCE_MOCK } from '../../../../../mocks/commerce/commerce.mocks';
import { Commerce } from '../../../../domain/models/commerce/commerce.model';
import { DataService } from '../../../services/data.service';
import { CommerceNodeRepositoryImpl } from './commerce-node.repository.impl';

describe('CommerceNodeRepositoryImpl (Infrastructure)', () => {
  let repository: CommerceNodeRepositoryImpl;

  const countCommerce = 5;
  const DataServiceMock = { getAllCommerceNode: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    TestBed.configureTestingModule({
        providers: [
            CommerceNodeRepositoryImpl,
            { provide: DataService, useValue: DataServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(CommerceNodeRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllCommerceNode()', () => {
    const getAllSpy = DataServiceMock.getAllCommerceNode.mockReturnValue(of([]));
    repository.getAll(countCommerce).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countCommerce);
  });

  it('debe devolver el listado de artículos comerciales como Observable', (done) => {
    DataServiceMock.getAllCommerceNode.mockReturnValue(of(COMMERCE_MOCK));
    repository.getAll(countCommerce).subscribe((commerce: Commerce[]) => {
      expect(commerce).toEqual(COMMERCE_MOCK);
      done();
    });
  });
});
