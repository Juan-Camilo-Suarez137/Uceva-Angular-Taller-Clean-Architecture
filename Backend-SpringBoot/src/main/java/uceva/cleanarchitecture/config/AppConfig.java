package uceva.cleanarchitecture.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uceva.cleanarchitecture.application.usecase.commerce.GetAllCommerceUseCase;
import uceva.cleanarchitecture.application.usecase.finance.GetAllFinanceUseCase;
import uceva.cleanarchitecture.application.usecase.products.GetAllProductsUseCase;
import uceva.cleanarchitecture.application.usecase.users.GetAllUsersUseCase;
import uceva.cleanarchitecture.domain.repository.commerce.CommerceRepository;
import uceva.cleanarchitecture.domain.repository.finance.FinanceRepository;
import uceva.cleanarchitecture.domain.repository.products.ProductRepository;
import uceva.cleanarchitecture.domain.repository.users.UserRepository;
import uceva.cleanarchitecture.infrastructure.datasource.commerce.CommerceDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.finance.FinanceDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.products.ProductDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.users.UserDatasource;
import uceva.cleanarchitecture.infrastructure.repository.commerce.CommerceRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.finance.FinanceRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.products.ProductRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.users.UserRepositoryImpl;

@Configuration
public class AppConfig {

    @Bean
    UserDatasource userDatasource(){
        return new UserDatasource();
    }

    @Bean
    ProductDatasource productDatasource(){
        return new ProductDatasource();
    }

    @Bean
    CommerceDatasource commerceDatasource(){
        return new CommerceDatasource();
    }

    @Bean
    FinanceDatasource financeDatasource(){
        return new FinanceDatasource();
    }

    @Bean
    UserRepository userRepository(UserDatasource userDatasource) {
        return new UserRepositoryImpl(userDatasource);
    }

    @Bean
    ProductRepository productRepository(ProductDatasource productDatasource) {
        return new ProductRepositoryImpl(productDatasource);
    }

    @Bean
    CommerceRepository commerceRepository(CommerceDatasource commerceDatasource) {
        return new CommerceRepositoryImpl(commerceDatasource);
    }

    @Bean
    FinanceRepository financeRepository(FinanceDatasource financeDatasource) {
        return new FinanceRepositoryImpl(financeDatasource);
    }

    @Bean
    GetAllUsersUseCase getAllUsersUseCase(UserRepository userRepository) {
        return new GetAllUsersUseCase(userRepository);
    }

    @Bean
    GetAllProductsUseCase getAllProductsUseCase(ProductRepository productRepository) {
        return new GetAllProductsUseCase(productRepository);
    }

    @Bean
    GetAllCommerceUseCase getAllCommerceUseCase(CommerceRepository commerceRepository) {
        return new GetAllCommerceUseCase(commerceRepository);
    }

    @Bean
    GetAllFinanceUseCase getAllFinanceUseCase(FinanceRepository financeRepository) {
        return new GetAllFinanceUseCase(financeRepository);
    }

}