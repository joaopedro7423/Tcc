
let createNotificationUseCase : CreateNotificationUseCase

const mockNotification = {
    title: "string",
    description: "string",
    user: "string"
  };
  


describe('User Test', () => {
    beforeEach(()=>{
        createNotificationUseCase = new CreateNotificationUseCase(create(mockNotification))
    })

    it("Should be able to create a new Notification", async () => {
        const user = await createNotificationUseCase.execute(mockNotification)
        expect(user).toHaveProperty("id");
      })

    test('should return 201', async () => {
       const user = await createNotificationUseCase.execute(mockNotification)
       expect(user).toBe(true);
    });

    


});

