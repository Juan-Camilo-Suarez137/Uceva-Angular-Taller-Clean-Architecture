package uceva.cleanarchitecture.application.usecase.users;

import uceva.cleanarchitecture.domain.entity.users.User;
import uceva.cleanarchitecture.domain.repository.users.UserRepository;

import java.util.List;

public class GetAllUsersUseCase {

    private final UserRepository userRepository;

    public GetAllUsersUseCase(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> execute(int countUsers){
        return userRepository.getAll(countUsers);
    }

}
