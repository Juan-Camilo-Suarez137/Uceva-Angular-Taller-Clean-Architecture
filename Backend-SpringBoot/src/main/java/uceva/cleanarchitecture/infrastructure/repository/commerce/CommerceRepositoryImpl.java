package uceva.cleanarchitecture.infrastructure.repository.commerce;

import uceva.cleanarchitecture.domain.entity.commerce.Commerce;
import uceva.cleanarchitecture.domain.repository.commerce.CommerceRepository;
import uceva.cleanarchitecture.infrastructure.datasource.commerce.CommerceDatasource;

import java.util.List;

public class CommerceRepositoryImpl extends CommerceRepository {

    private final CommerceDatasource commerceDatasource;

    public CommerceRepositoryImpl(CommerceDatasource commerceDatasource) {
        this.commerceDatasource = commerceDatasource;
    }

    @Override
    public List<Commerce> getAll(int countCommerce) {
        return commerceDatasource.getAll(countCommerce);
    }

}
