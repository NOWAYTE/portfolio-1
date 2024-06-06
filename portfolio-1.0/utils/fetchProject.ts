import { Project } from '../pages/api/typings';

export const fetchProjects = async (): Promise<Project[]> => {
    const res = await fetch(`api/getProject`);
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
};

