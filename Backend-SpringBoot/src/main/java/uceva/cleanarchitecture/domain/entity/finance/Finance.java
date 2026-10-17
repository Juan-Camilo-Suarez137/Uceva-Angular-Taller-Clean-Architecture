package uceva.cleanarchitecture.domain.entity.finance;

public class Finance {
    public Integer id;
    public String accountName;
    public String accountNumber;
    public String type;
    public Double amount;
    public String currency;
    public String issuer;
    public String date;

    public Finance(Integer id, String accountName, String accountNumber, String type,
                   Double amount, String currency, String issuer, String date) {
        this.id = id;
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.type = type;
        this.amount = amount;
        this.currency = currency;
        this.issuer = issuer;
        this.date = date;
    }
}