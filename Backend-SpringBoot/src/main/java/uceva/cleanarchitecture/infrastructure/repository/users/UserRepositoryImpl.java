package uceva.cleanarchitecture.infrastructure.repository.users;

import uceva.cleanarchitecture.domain.entity.users.User;
import uceva.cleanarchitecture.domain.repository.users.UserRepository;
import uceva.cleanarchitecture.infrastructure.datasource.users.UserDatasource;

import java.util.List;

public class UserRepositoryImpl extends UserRepository {

    private final UserDatasource userDatasource;

    public UserRepositoryImpl(UserDatasource userDatasource){
        this.userDatasource = userDatasource;
    }

    @Override
    public List<User> getAll(int countUsers) {
        return userDatasource.getAll(countUsers);
    }
}
