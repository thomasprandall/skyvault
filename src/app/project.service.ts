import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project/project';
import { PROJECTS } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects(requireImg: boolean, exclude?: number, related?: any): Observable<Project[]> {

    return of(PROJECTS.filter(project => project.id !== exclude));
  }

  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(project => project.id === id));
  }
  constructor() { }
}
