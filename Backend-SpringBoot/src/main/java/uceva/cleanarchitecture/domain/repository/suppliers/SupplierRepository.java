package uceva.cleanarchitecture.domain.repository.suppliers;

import uceva.cleanarchitecture.domain.entity.suppliers.Supplier;

import java.util.List;

public abstract class SupplierRepository {
    public abstract List<Supplier> getAll(int countSuppliers);
}
