package uceva.cleanarchitecture.application.usecase.finance;

import uceva.cleanarchitecture.domain.entity.finance.Finance;
import uceva.cleanarchitecture.domain.repository.finance.FinanceRepository;

import java.util.List;

public class GetAllFinanceUseCase {
    private final FinanceRepository financeRepository;

    public GetAllFinanceUseCase(FinanceRepository financeRepository){
        this.financeRepository = financeRepository;
    }

    public List<Finance> execute(int countFinance){
        return financeRepository.getAll(countFinance);
    }
}