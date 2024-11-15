"use server";

import gs from "github-scraper";
import { GithubData } from "@/types/github";

const githubUsername: string = "joshiutsav";

/**
 * A server component that fetches GitHub profile data and renders it.
 *
 * @param {string} [username] - The GitHub username to fetch data for. Defaults to {@link githubUsername}.
 * @returns A React component displaying the user's GitHub profile data.
 */
export default async function GitHubProfile({
  username = githubUsername,
}: {
  username?: string;
}) {
  const data = await fetchGithubData(username);
  return data;
}

/**
 * Fetches the GitHub profile data asynchronously.
 *
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Promise<GithubData>} A Promise resolving to the user's GitHub profile data.
 */
async function fetchGithubData(username: string): Promise<GithubData> {
  return new Promise((resolve, reject) => {
    gs(username, (err, data) => {
      if (err) {
        console.error("Error fetching GitHub data:", err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// /**
//  * Fetches the pinned projects for a specified GitHub username.
//  *
//  * @param {string} [username] - The GitHub username to fetch pinned projects for.
//  * @returns {Promise<ProjectData[]>} A Promise resolving to an array of pinned projects.
//  */
// export function fetchPinnedProjects(
//   username: string = githubUsername
// ): Promise<ProjectData[]> {
//   return new Promise((resolve, reject) => {
//     gs(username, (error, data) => {
//       if (error) {
//         reject(error);
//       } else if (data && data.pinnedProjects) {
//         resolve(data.pinnedProjects as ProjectData[]);
//       } else {
//         reject(new Error(`Failed to fetch pinned projects for ${username}`));
//       }
//     });
//   });
// }

// /**
//  * Fetches detailed project data from a specified GitHub URL.
//  *
//  * @param {string} url - The GitHub URL of the project.
//  * @returns {Promise<ProjectData>} A Promise resolving to the project's details.
//  */
// export function fetchProjectData(url: string): Promise<ProjectData> {
//   return new Promise((resolve, reject) => {
//     gs(url, (error, data) => {
//       if (error || !data) {
//         reject(new Error(`Failed to fetch project data for ${url}`));
//       } else {
//         resolve(data as ProjectData);
//       }
//     });
//   });
// }
