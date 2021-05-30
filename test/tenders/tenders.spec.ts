
let createTenderUseCase : CreateTenderUseCase

const mockTender = {
    title: "string",
    description: "string",
    user: "string"
  };
  


describe('Tender Test', () => {
    beforeEach(()=>{
        createTenderUseCase = new CreateTenderUseCase(create(mockTender))
    })

    it("Should be able to create a new Tender", async () => {
        const tender = await createTenderUseCase.execute(mockTender)
        expect(tender).toHaveProperty("id");
      })

    test('should return 201', async () => {
       const tender = await createTenderUseCase.execute(mockTender)
       expect(tender).toBe(true);
    });

    


});

