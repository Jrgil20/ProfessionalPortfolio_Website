import { Octokit } from '@octokit/rest';
import { Project } from '../types/portfolio';

export class GitHubService {
  private octokit: Octokit;
  private username: string;

  constructor(token: string, username: string) {
    this.octokit = new Octokit({ auth: token });
    this.username = username;
  }

  async fetchRepositories(): Promise<Project[]> {
    try {
      const { data: repos } = await this.octokit.repos.listForUser({
        username: this.username,
        sort: 'updated',
        per_page: 100,
      });

      return Promise.all(
        repos
          .filter(repo => !repo.fork && !repo.private)
          .map(async repo => {
            const { data: languages } = await this.octokit.repos.listLanguages({
              owner: this.username,
              repo: repo.name,
            });

            return {
              id: repo.id.toString(),
              title: repo.name,
              description: repo.description || '',
              longDescription: repo.description || '',
              imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
              technologies: Object.keys(languages).map(lang => ({
                name: lang,
                color: 'bg-primary-600'
              })),
              role: 'Developer',
              duration: 'Ongoing',
              repoUrl: repo.html_url,
              features: [],
              category: 'personal',
              lastUpdated: repo.updated_at,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
            };
          })
      );
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  }
}