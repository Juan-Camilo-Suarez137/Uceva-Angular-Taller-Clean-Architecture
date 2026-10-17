package uceva.cleanarchitecture.domain.entity.commerce;

public class Commerce {
    public Integer id;
    public String product;
    public String material;
    public String description;
    public String isbn;
    public Float price;
    public String department;

    public Commerce(Integer id, String product, String material, String description, String isbn, Float price, String department) {
        this.id = id;
        this.product = product;
        this.material = material;
        this.description = description;
        this.isbn = isbn;
        this.price = price;
        this.department = department;
    }
}
