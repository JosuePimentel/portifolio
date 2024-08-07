import { Component, Input } from '@angular/core';
import { ProjectsInterface } from '../../module/interfaces/projects.interface';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';

type social = { link: string, svg: string };

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    SocialMediaComponent,
    MatTooltipModule
  ],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input({required: true}) data: ProjectsInterface | undefined;


  constructor() {}
}
