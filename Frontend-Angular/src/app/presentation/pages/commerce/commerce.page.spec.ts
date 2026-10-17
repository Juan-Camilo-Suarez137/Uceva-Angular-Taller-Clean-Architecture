import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllCommerceUseCase } from '../../../core/application/usecases/commerce/get-all-commerce.usecase';
import { COMMERCE_MOCK } from '../../../mocks/commerce/commerce.mocks';
import { CommerceTableComponent } from '../../components/commerce-table/commerce-table.component';
import { CommercePage } from './commerce.page';

describe('CommercePage', () => {
  let component: CommercePage;
  let fixture: ComponentFixture<CommercePage>;

  const GetAllCommerceUseCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    jest.clearAllMocks();
    await TestBed.configureTestingModule({
      imports: [CommercePage, CommerceTableComponent],
    })
    .overrideComponent(CommercePage, {
      set: {
        providers: [
          { provide: GetAllCommerceUseCase, useValue: GetAllCommerceUseCaseMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercePage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.commerceList).toEqual([]);
  });

  it('debe cargar los artículos comerciales y cambiar el estado a success', () => {
    GetAllCommerceUseCaseMock.execute.mockReturnValue(of(COMMERCE_MOCK));
    fixture.detectChanges();
    expect(component.commerceList).toEqual(COMMERCE_MOCK);
    expect(component.state).toBe('success');
  });

  it('no debería cargar los artículos comerciales y cambiar el estado a error', () => {
    GetAllCommerceUseCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.commerceList).toEqual([]);
    expect(component.state).toBe('error');
  });

});
