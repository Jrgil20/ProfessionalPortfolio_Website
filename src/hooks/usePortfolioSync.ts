import { useState, useEffect } from 'react';
import { PortfolioSyncService } from '../services/sync';
import { Project } from '../types/portfolio';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const LINKEDIN_TOKEN = import.meta.env.VITE_LINKEDIN_TOKEN;

export function usePortfolioSync() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const syncService = new PortfolioSyncService(
      GITHUB_TOKEN,
      GITHUB_USERNAME,
      LINKEDIN_TOKEN
    );

    async function syncPortfolio() {
      try {
        setIsLoading(true);
        const updatedProjects = await syncService.syncProjects();
        setProjects(updatedProjects);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    syncPortfolio();
    syncService.startAutoSync(60); // Sync every hour

    return () => {
      syncService.stopAutoSync();
    };
  }, []);

  return { projects, isLoading, error };
}