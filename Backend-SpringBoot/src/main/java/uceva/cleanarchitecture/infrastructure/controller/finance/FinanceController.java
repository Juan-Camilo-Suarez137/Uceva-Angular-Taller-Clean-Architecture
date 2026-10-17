package uceva.cleanarchitecture.infrastructure.controller.finance;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uceva.cleanarchitecture.application.usecase.finance.GetAllFinanceUseCase;
import uceva.cleanarchitecture.domain.entity.finance.Finance;

import java.util.List;

@RestController
@RequestMapping("/finance")
public class FinanceController {

    private final GetAllFinanceUseCase getAllFinanceUseCase;

    public FinanceController(GetAllFinanceUseCase getAllFinanceUseCase){
        this.getAllFinanceUseCase = getAllFinanceUseCase;
    }

    @GetMapping("/{countFinance}")
    public List<Finance> getAll(@PathVariable int countFinance) {
        return getAllFinanceUseCase.execute(countFinance);
    }

}