package uceva.cleanarchitecture.application.usecase.commerce;

import uceva.cleanarchitecture.domain.entity.commerce.Commerce;
import uceva.cleanarchitecture.domain.repository.commerce.CommerceRepository;

import java.util.List;

public class GetAllCommerceUseCase {

    private final CommerceRepository commerceRepository;

    public GetAllCommerceUseCase(CommerceRepository commerceRepository) {
        this.commerceRepository = commerceRepository;
    }

    public List<Commerce> execute(int countCommerce) {
        return commerceRepository.getAll(countCommerce);
    }

}
