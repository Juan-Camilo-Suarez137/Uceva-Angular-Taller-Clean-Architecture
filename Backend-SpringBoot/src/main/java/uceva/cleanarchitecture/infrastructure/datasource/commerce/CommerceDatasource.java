package uceva.cleanarchitecture.infrastructure.datasource.commerce;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.commerce.Commerce;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class CommerceDatasource {

    private final Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] departments = {
            "Tecnologia",
            "Hogar",
            "Ropa",
            "Deportes",
            "Juguetes"
    };

    public List<Commerce> getAll(int countCommerce) {
        List<Commerce> commerceList = new ArrayList<>();
        for (int i = 1; i <= countCommerce; i++) {
            commerceList.add(generateCommerce(i));
        }
        return commerceList;
    }

    private Commerce generateCommerce(Integer id) {
        return new Commerce(
                id,
                faker.commerce().productName(),
                faker.commerce().material(),
                faker.lorem().sentence(),
                faker.code().isbn13(),
                (float) faker.number().numberBetween(10, 500),
                randomDepartment()
        );
    }

    private String randomDepartment() {
        return departments[random.nextInt(departments.length)];
    }

}
