package uceva.cleanarchitecture.application.usecase.suppliers;

import uceva.cleanarchitecture.domain.entity.suppliers.Supplier;
import uceva.cleanarchitecture.domain.repository.suppliers.SupplierRepository;

import java.util.List;

public class GetAllSuppliersUseCase {
    private final SupplierRepository supplierRepository;

    public GetAllSuppliersUseCase(SupplierRepository supplierRepository){
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> execute(int countSuppliers){
        return supplierRepository.getAll(countSuppliers);
    }
}
