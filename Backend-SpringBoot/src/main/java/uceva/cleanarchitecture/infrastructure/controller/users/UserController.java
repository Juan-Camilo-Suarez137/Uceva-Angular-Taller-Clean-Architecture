package uceva.cleanarchitecture.infrastructure.controller.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uceva.cleanarchitecture.application.usecase.users.GetAllUsersUseCase;
import uceva.cleanarchitecture.domain.entity.users.User;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final GetAllUsersUseCase getAllUsersUseCase;

    public UserController(GetAllUsersUseCase getAllUsersUseCase){
        this.getAllUsersUseCase = getAllUsersUseCase;
    }

    @GetMapping("/{countUsers}")
    public List<User> getAll(@PathVariable int countUsers) {
        return getAllUsersUseCase.execute(countUsers);
    }

}
