import { CreateUserUseCase } from "../../modules/accounts/useCases/createUser/CreateUserUseCase";


let createUserUseCase : CreateUserUseCase

const mockUser = {
    name: "jooj",
    password: "string",
    email: "string",
    role:"string"
  };
  


describe('User Test', () => {
    beforeEach(()=>{
        createUserUseCase = new CreateUserUseCase(create(mockUser))
    })

    it("Should be able to create a new User", async () => {
        const user = await createUserUseCase.execute(mockUser)
        expect(user).toHaveProperty("id");
      })

    test('should return 201', async () => {
       const user = await createUserUseCase.execute(mockUser)
       expect(user).toBe(true);
    });

    


});


function create(mockUser: { name: string; password: string; email: string; role: string; }): import("../../modules/accounts/repositories/IUsersRepository").IUsersRepository {
    throw new Error("Function not implemented.");
}

