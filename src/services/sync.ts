import { GitHubService } from './github';
import { LinkedInService } from './linkedin';
import { Project } from '../types/portfolio';

export class PortfolioSyncService {
  private githubService: GitHubService;
  private linkedInService: LinkedInService;
  private syncInterval: NodeJS.Timeout | null = null;

  constructor(
    githubToken: string,
    githubUsername: string,
    linkedInToken: string
  ) {
    this.githubService = new GitHubService(githubToken, githubUsername);
    this.linkedInService = new LinkedInService(linkedInToken);
  }

  async syncProjects(): Promise<Project[]> {
    try {
      const projects = await this.githubService.fetchRepositories();
      // Store in local storage for now, but could be expanded to use a proper database
      localStorage.setItem('portfolio_projects', JSON.stringify(projects));
      return projects;
    } catch (error) {
      console.error('Error syncing projects:', error);
      throw error;
    }
  }

  startAutoSync(intervalMinutes: number = 60) {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }

    this.syncInterval = setInterval(() => {
      this.syncProjects().catch(console.error);
    }, intervalMinutes * 60 * 1000);
  }

  stopAutoSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }
}