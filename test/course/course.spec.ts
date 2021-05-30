import { CreateCourseUseCase } from "../../src/modules/course/useCases/createInstitute/CreateCourseUseCase";

let createCourseUseCase : CreateCourseUseCase

const mockCourse = {
    name: "Eng. Software",
    institute_id: "1"
  };
  


describe('Course Test', () => {
    beforeEach(()=>{
        createCourseUseCase = new CreateCourseUseCase(create(mockCourse))
    })

    it("Should be able to create a new Course", async () => {
        const course = await createCourseUseCase.execute(mockCourse)
        expect(course).toHaveProperty("id");
      })

    test('should return 201', async () => {
       const course = await createCourseUseCase.execute(mockCourse)
       expect(course).toBe(true);
    });

    


});

function create(mockCourse: { name: string; institute_id: string; }): import("../../src/modules/course/repositories/ICourseRepository").ICourseRepository {
    throw new Error("Function not implemented.");
}

