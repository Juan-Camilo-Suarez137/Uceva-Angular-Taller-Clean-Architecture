package uceva.cleanarchitecture.domain.repository.products;

import uceva.cleanarchitecture.domain.entity.products.Product;

import java.util.List;

public abstract class ProductRepository {
    public abstract List<Product> getAll(int countProducts);
}
