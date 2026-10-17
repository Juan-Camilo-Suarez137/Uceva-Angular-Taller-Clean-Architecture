package uceva.cleanarchitecture.infrastructure.controller.commerce;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uceva.cleanarchitecture.application.usecase.commerce.GetAllCommerceUseCase;
import uceva.cleanarchitecture.domain.entity.commerce.Commerce;

import java.util.List;

@RestController
@RequestMapping("/commerce")
public class CommerceController {

    private final GetAllCommerceUseCase getAllCommerceUseCase;

    public CommerceController(GetAllCommerceUseCase getAllCommerceUseCase) {
        this.getAllCommerceUseCase = getAllCommerceUseCase;
    }

    @GetMapping("/{countCommerce}")
    public List<Commerce> getAll(@PathVariable int countCommerce) {
        return getAllCommerceUseCase.execute(countCommerce);
    }

}
