package uceva.cleanarchitecture.application.usecase.products;

import uceva.cleanarchitecture.domain.entity.products.Product;
import uceva.cleanarchitecture.domain.repository.products.ProductRepository;

import java.util.List;

public class GetAllProductsUseCase {
    private final ProductRepository productRepository;

    public GetAllProductsUseCase(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public List<Product> execute(int countProducts){
        return productRepository.getAll(countProducts);
    }
}
