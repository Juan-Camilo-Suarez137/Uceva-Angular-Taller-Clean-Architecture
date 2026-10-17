package uceva.cleanarchitecture.infrastructure.repository.products;

import uceva.cleanarchitecture.domain.entity.products.Product;
import uceva.cleanarchitecture.domain.repository.products.ProductRepository;
import uceva.cleanarchitecture.infrastructure.datasource.products.ProductDatasource;

import java.util.List;

public class ProductRepositoryImpl extends ProductRepository {

    private final ProductDatasource productDatasource;

    public ProductRepositoryImpl(ProductDatasource productDatasource){
        this.productDatasource = productDatasource;
    }

    @Override
    public List<Product> getAll(int countProducts) {
        return productDatasource.getAll(countProducts);
    }
}
