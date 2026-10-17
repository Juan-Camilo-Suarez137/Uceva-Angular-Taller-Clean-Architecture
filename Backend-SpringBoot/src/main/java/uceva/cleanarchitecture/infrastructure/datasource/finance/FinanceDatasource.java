package uceva.cleanarchitecture.infrastructure.datasource.finance;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.finance.Finance;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class FinanceDatasource {

    private Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] accountNames = {
            "Checking Account",
            "Savings Account",
            "Credit Card Account",
            "Personal Loan Account",
            "Money Market Account",
    };
    private final String[] types = {
            "deposit",
            "withdrawal",
            "payment",
            "invoice",
    };
    private final String[] currencies = {
            "USD",
            "EUR",
            "COP",
            "MXN",
            "GBP",
    };
    private final String[] issuers = {
            "visa",
            "mastercard",
            "american_express",
            "discover",
            "diners_club",
    };

    public List<Finance> getAll(int countFinance){
        List<Finance> finances = new ArrayList<Finance>();
        for (int i = 1; i <= countFinance; i++) {
            finances.add(generateFinance(i));
        }
        return finances;
    }

    private Finance generateFinance(Integer id){
        return new Finance(
                id,
                randomElement(accountNames),
                "****" + faker.number().numberBetween(1000, 10000),
                randomElement(types),
                faker.number().numberBetween(1000, 500000) / 100.0,
                randomElement(currencies),
                randomElement(issuers),
                LocalDate.now().minusDays(random.nextInt(30)).toString()
        );
    }

    private String randomElement(String[] values) {
        return values[random.nextInt(values.length)];
    }

}