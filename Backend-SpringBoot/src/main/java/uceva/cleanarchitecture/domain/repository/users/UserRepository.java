package uceva.cleanarchitecture.domain.repository.users;

import uceva.cleanarchitecture.domain.entity.users.User;

import java.util.List;

public abstract class UserRepository {
    public abstract List<User> getAll(int countUsers);
}
