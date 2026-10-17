package uceva.cleanarchitecture.domain.repository.commerce;

import uceva.cleanarchitecture.domain.entity.commerce.Commerce;

import java.util.List;

public abstract class CommerceRepository {
    public abstract List<Commerce> getAll(int countCommerce);
}
