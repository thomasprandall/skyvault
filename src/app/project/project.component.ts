import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmbedVideoService } from 'ngx-embed-video';

import { Project } from './project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  projects: Project[];
  vidsource: string;
  mainColumns = 8;
  private sub;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private embedService: EmbedVideoService
  ) { }

  ngOnInit(): void {
    this.getProject();
    this.getProjects();
  }

  getProject(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = +this.route.snapshot.paramMap.get('id');
      this.projectService.getProject(id)
        .subscribe(project => this.project = project);

      this.vidsource = this.project.vidid ? this.embedService.embed(this.project.vidid, { attr: { class: 'embed-responsive-item' } }) : '';
      this.mainColumns = (this.project.desc || this.project.bullets) ? 8 : 12;
    });
  }

  getProjects(): void {
    this.sub = this.route.params.subscribe(params => {
      this.projectService.getProjects(true, this.project.id, this.project.related)
        .subscribe(projects => this.projects = projects);
    });
  }
}
