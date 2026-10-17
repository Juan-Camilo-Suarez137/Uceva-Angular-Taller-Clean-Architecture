package uceva.cleanarchitecture.infrastructure.repository.suppliers;

import uceva.cleanarchitecture.domain.entity.suppliers.Supplier;
import uceva.cleanarchitecture.domain.repository.suppliers.SupplierRepository;
import uceva.cleanarchitecture.infrastructure.datasource.suppliers.SupplierDatasource;

import java.util.List;

public class SupplierRepositoryImpl extends SupplierRepository {

    private final SupplierDatasource supplierDatasource;

    public SupplierRepositoryImpl(SupplierDatasource supplierDatasource){
        this.supplierDatasource = supplierDatasource;
    }

    @Override
    public List<Supplier> getAll(int countSuppliers) {
        return supplierDatasource.getAll(countSuppliers);
    }
}
