//Типизация начинки репозитория
export interface Repository {
  id: number;
  name: string;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description: string | null;
  license: {
    spdx_id: string;
  } | null;
  topics: string[];
}
