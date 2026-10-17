package uceva.cleanarchitecture.infrastructure.repository.finance;

import uceva.cleanarchitecture.domain.entity.finance.Finance;
import uceva.cleanarchitecture.domain.repository.finance.FinanceRepository;
import uceva.cleanarchitecture.infrastructure.datasource.finance.FinanceDatasource;

import java.util.List;

public class FinanceRepositoryImpl extends FinanceRepository {

    private final FinanceDatasource financeDatasource;

    public FinanceRepositoryImpl(FinanceDatasource financeDatasource){
        this.financeDatasource = financeDatasource;
    }

    @Override
    public List<Finance> getAll(int countFinance) {
        return financeDatasource.getAll(countFinance);
    }
}