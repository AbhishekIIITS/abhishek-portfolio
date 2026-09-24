const username = "AbhishekIIITS";

type GithubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

async function getGithubData() {
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2026-03-10",
    };

    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=12`,
        {
          headers,
          next: { revalidate: 3600 },
        }
      ),
    ]);

    if (!profileResponse.ok || !reposResponse.ok) {
      return null;
    }

    const profile: GithubProfile = await profileResponse.json();
    const repositories: GithubRepo[] = await reposResponse.json();

    return {
      profile,
      repositories: repositories
        .filter((repo) => !repo.fork)
        .slice(0, 6),
    };
  } catch {
    return null;
  }
}

export default async function GithubSection() {
  const data = await getGithubData();

  return (
    <section id="github" className="section github-section">
      <div className="section-number">07 / GITHUB</div>

      <div className="github-header">
        <div>
          <p className="github-eyebrow">OPEN SOURCE · DEVELOPMENT</p>

          <h2>
            Code.
            <br />
            Build.
            <br />
            <span>Commit.</span>
          </h2>
        </div>

        <div className="github-intro">
          <p>
            Explore my GitHub profile, repositories and ongoing development
            work.
          </p>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            github.com/{username} ↗
          </a>
        </div>
      </div>

      {data ? (
        <>
          <div className="github-stats">
            <div className="github-stat">
              <strong>{data.profile.public_repos}</strong>
              <span>PUBLIC REPOSITORIES</span>
            </div>

            <div className="github-stat">
              <strong>{data.profile.followers}</strong>
              <span>FOLLOWERS</span>
            </div>

            <div className="github-stat">
              <strong>{data.profile.following}</strong>
              <span>FOLLOWING</span>
            </div>
          </div>

          <div className="github-repositories">
            <div className="github-repositories-heading">
              <span>RECENT REPOSITORIES</span>
              <span>01 — 06</span>
            </div>

            <div className="github-repo-grid">
              {data.repositories.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-repo"
                >
                  <div className="github-repo-top">
                    <span>0{index + 1}</span>
                    <span>↗</span>
                  </div>

                  <h3>{repo.name}</h3>

                  <p>
                    {repo.description ||
                      "Software development project and repository."}
                  </p>

                  <div className="github-repo-bottom">
                    <span>
                      {repo.language || "CODE"}
                    </span>

                    <span>★ {repo.stargazers_count}</span>

                    <span>⑂ {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="github-fallback">
          <p>
            GitHub data is temporarily unavailable. Visit my profile to
            explore my repositories.
          </p>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Visit GitHub →
          </a>
        </div>
      )}

      <div className="github-footer">
        <span>MORE PROJECTS ON GITHUB</span>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Explore GitHub →
        </a>
      </div>
    </section>
  );
}