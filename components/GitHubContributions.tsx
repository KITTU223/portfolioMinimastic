// components/GitHubContributions.tsx
import Image from "next/image";
import React from "react";
import GitHubCalendar from "react-github-calendar";

interface GitHubContributionsProps {
  username: string;
  size?: number; // Optional size in pixels
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ username,size = 100 }) => {
    const avatarUrl = `https://github.com/${username}.png`;
  return (
    <div className="bg- p-6 rounded-lg shadow-md" id="contribution">
      <h2 className="heading">
        My <span className="text-purple">GitHub Contributions</span>
      </h2>
      <div className="overflow-x-auto flex justify-between items-center mt-10">
      <Image
        src={avatarUrl}
        alt={`${username}'s GitHub Avatar`}
        className="rounded-full"
        width={100}
        height={100}
      />
        <GitHubCalendar 
          username={username}
          colorScheme="dark"
          style={{
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
};

export default GitHubContributions;
