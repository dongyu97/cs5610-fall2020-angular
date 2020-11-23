import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (courseId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/courses/${courseId}/modules`)
      .then(response => response.json())

  deleteModules = (moduleId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/modules/${moduleId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createModuleForCourse = (courseId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  updateModule = (module: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/modules/${module._id}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
