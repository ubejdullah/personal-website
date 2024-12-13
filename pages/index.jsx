import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import fetch from 'isomorphic-unfetch';

async function fetchRepositories() {
  const token = 'YOUR-GITHUB-API-KEY';

  const response = await fetch('https://api.github.com/users/ubejdullah/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  const data = await response.json();
  return data;
}

export default function Home() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepositories().then(data => {
      setRepositories(data);
      setLoading(false);
    }).catch(err => {
      console.error('Error fetching repositories:', err);
      setError('Failed to load repositories');
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
      <div className="relative">
        <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
            <div className="flex items-center">
              <p className="flex items-center text-white text-4xl font-semibold">
                Ubejdullah Gashi
              </p>
              <Tippy content={`Online`} animation="shift-away" arrow={false}>
                <span className={`ml-2 text-online px-2 py-1 font-normal rounded-md text-sm`}>
                  <i className={`fa fa-circle text-online mr-2`} />Online
                </span>
              </Tippy>
            </div>
            <p className="text-white/50 text-md mt-3">
              Willkommen auf meiner Website! Ich bin Ubejdullah, ein 14-jähriger Schüler und begeisterter Hobby-Entwickler. Mit Erfahrung in JavaScript, HTML, CSS, ExpressJS, ReactJS und MongoDB erstelle ich spannende Projekte. Ich strebe eine Karriere als Applikationsentwickler an und freue mich über jede Gelegenheit, meine Fähigkeiten weiter auszubauen.
            </p>
          </div>
          <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online`}>
            <img src={`https://i.ibb.co/ZccXHZz/Screenshot-2024-07-16-175407.png`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
            <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
              <Tippy content="Online" animation="shift-away" arrow={false}>
                <i className={`fad fa-circle text-2xl text-online`} />
              </Tippy>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      <div className="py-20">
        <p className="text-3xl text-white font-semibold">GitHub Repositories</p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center mt-2">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-[#191932]/20 p-4 rounded-lg w-full">
                  <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                  <div className="mt-5 flex w-full justify-between items-center">
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                </div>
              ))
            : error
              ? <p className="text-white text-md">{error}</p>
              : Array.isArray(repositories) && repositories.length > 0
                ? repositories
                  .sort((a, b) => b.stargazers_count - a.stargazers_count)
                  .map((repo) => (
                    <a
                      key={repo.id}
                      href={`https://github.com/ubejdullah/${repo.name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                    >
                      <p className="text-md text-white">
                        <span className="text-sm text-white/50 bg-black/25 px-2 py-1 rounded-md mr-1">
                          {repo.owner.login}
                        </span>
                        {repo.name}
                      </p>
                      <div className="mt-5 flex justify-end w-full h-full items-center">
                        <div className="flex w-full justify-between items-center">
                          <Tippy content={"Stars"} arrow={false} animation="shift-away">
                            <div className="flex items-center">
                              <p className="text-sm">
                                <i className="fal fa-star mr-2" />
                              </p>
                              <p>{repo.stargazers_count}</p>
                            </div>
                          </Tippy>
                          <div className="text-sm text-white bg-black/25 px-2 py-1 rounded-md mr-1">
                            {repo.language || "Empty"}
                          </div>
                          <Tippy content={"Forks"} arrow={false} animation="shift-away">
                            <div className="flex items-center justify-end">
                              <p>{repo.forks_count}</p>
                              <p className="text-sm">
                                <i className="fal fa-code-branch ml-2" />
                              </p>
                            </div>
                          </Tippy>
                        </div>
                      </div>
                    </a>
                  ))
                : <p className="text-white text-md">No repositories found.</p>}
        </div>
      </div>
    </div>
  );
}
