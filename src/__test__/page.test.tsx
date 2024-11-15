import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import  Home  from '@/app/page';
import { GithubData } from '@/types/github';
import { fetchGithubData } from '@/lib/github';
import '@testing-library/jest-dom';

jest.mock('@/lib/github');

describe('Home component', () => {
  it('renders initial state with no GitHub data', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches GitHub data on mount', async () => {
    const githubData: GithubData = { name: 'Utsav Joshi', pinned: [], avatar: '', repos: 10 };
    (fetchGithubData as jest.Mock).mockResolvedValue(githubData);
    const { getByText } = render(<Home />);
    await waitFor(() => expect(getByText('Utsav Joshi')).toBeInTheDocument());
  });

  it('handles failed fetch of GitHub data', async () => {
    (fetchGithubData as jest.Mock).mockRejectedValue(new Error('Failed to fetch GitHub data'));
    const { getByText } = render(<Home />);
    await waitFor(() => expect(getByText('Failed to fetch GitHub data')).toBeInTheDocument());
  });

  it('renders HeroSection and FeaturedProjects components', () => {
    const githubData: GithubData = { name: 'Utsav Joshi', pinned: [], avatar: '', repos: 10 };
    (fetchGithubData as jest.Mock).mockResolvedValue(githubData);
    const { getByText } = render(<Home />);
    expect(getByText('HeroSection')).toBeInTheDocument();
    expect(getByText('FeaturedProjects')).toBeInTheDocument();
  });
});
