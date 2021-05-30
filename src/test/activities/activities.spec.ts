
let createActivitiesUseCase : CreateActivitieUseCase

const mockActivitie = {
    name: "string",
    campus: "string"
  };
  


describe('Tender Test', () => {
    beforeEach(()=>{
        createActivitiesUseCase = new CreateActivitieUseCase(create(mockActivitie))
    })

    it("Should be able to create a new Tender", async () => {
        const activitie = await createActivitiesUseCase.execute(mockActivitie)
        expect(activitie).toHaveProperty("id");
      })

    test('should return 201', async () => {
       const activitie = await createActivitiesUseCase.execute(mockActivitie)
       expect(activitie).toBe(true);
    });

    


});

