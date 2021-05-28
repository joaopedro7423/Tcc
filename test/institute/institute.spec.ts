import { CreateUserController } from "../../src/modules/accounts/useCases/createUser/CreateUserController";

describe('Institute Test', () => {
    test('should return 201', () => {
       
        const createUserController = new CreateUserController();
      
        expect(createUserController.handle).toBe(201)
    });
});