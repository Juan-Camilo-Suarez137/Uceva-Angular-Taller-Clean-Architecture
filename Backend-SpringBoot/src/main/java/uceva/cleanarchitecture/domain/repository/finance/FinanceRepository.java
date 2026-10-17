package uceva.cleanarchitecture.domain.repository.finance;

import uceva.cleanarchitecture.domain.entity.finance.Finance;

import java.util.List;

public abstract class FinanceRepository {
    public abstract List<Finance> getAll(int countFinance);
}