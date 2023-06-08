import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Repo } from '@/types';

async function getRepos() {
  const endpoint = '/users/jeanmrtns/repos';
  const { data } = await api.get<Repo[]>(endpoint);
  return data;
}

export const useFetchRepos = () => {
  return useQuery(['userRepos'], getRepos);
};
