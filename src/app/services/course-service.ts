import {Injectable} from '@angular/core';



@Injectable()
export class CourseService{
  findAllCourses =() =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/courses`)
      .then(response => response.json())

  createCourse = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateCourse = (course: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteCourse = (id: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/courses/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  findCourseById = (courseId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}`)
      .then(response => response.json())
}
