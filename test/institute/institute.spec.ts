import { CreateInstituteUseCase } from "../../src/modules/Institutes/useCases/createInstitute/CreateInstituteUseCase";

let createInstituteUseCase : CreateInstituteUseCase

const mockInstitute = {
    name: "Unigran",
    campus: "Dourados"
  };
  


describe('Institute Test', () => {
    beforeEach(()=>{
        createInstituteUseCase = new CreateInstituteUseCase(create(mockInstitute))
    })

    it("Should be able to create a new Institute", async () => {
        const institute = await createInstituteUseCase.execute(mockInstitute)
        expect(institute).toHaveProperty("id");
      })

    test('should return 201', async () => {
       const institute = await createInstituteUseCase.execute(mockInstitute)
       expect(institute).toBe(true);
    });

    


});

function create(mockInstitute: { name: string; campus: string; }): import("../../src/modules/Institutes/repositories/IInstituteRepository").IInstituteRepository {
    throw new Error("Function not implemented.");
}
