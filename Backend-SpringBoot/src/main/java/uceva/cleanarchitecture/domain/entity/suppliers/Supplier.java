package uceva.cleanarchitecture.domain.entity.suppliers;

public class Supplier {
    public Integer id;
    public String companyName;
    public String catchPhrase;
    public String city;
    public String country;
    public String email;
    public String phone;
    public String status;

    public Supplier(Integer id, String companyName, String catchPhrase, String city,
                    String country, String email, String phone, String status) {
        this.id = id;
        this.companyName = companyName;
        this.catchPhrase = catchPhrase;
        this.city = city;
        this.country = country;
        this.email = email;
        this.phone = phone;
        this.status = status;
    }
}
