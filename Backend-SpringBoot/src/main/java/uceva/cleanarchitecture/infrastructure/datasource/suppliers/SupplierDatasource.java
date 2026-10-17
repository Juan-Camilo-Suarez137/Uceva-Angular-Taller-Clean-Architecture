package uceva.cleanarchitecture.infrastructure.datasource.suppliers;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.suppliers.Supplier;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class SupplierDatasource {

    private Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] statuses = {
            "active",
            "inactive",
            "pending",
    };

    public List<Supplier> getAll(int countSuppliers){
        List<Supplier> suppliers = new ArrayList<Supplier>();
        for (int i = 1; i <= countSuppliers; i++) {
            suppliers.add(generateSupplier(i));
        }
        return suppliers;
    }

    private Supplier generateSupplier(Integer id){
        return new Supplier(
                id,
                faker.company().name(),
                faker.company().catchPhrase(),
                faker.address().city(),
                faker.address().country(),
                faker.internet().emailAddress().toLowerCase(),
                faker.phoneNumber().phoneNumber(),
                statuses[random.nextInt(statuses.length)]
        );
    }

}
