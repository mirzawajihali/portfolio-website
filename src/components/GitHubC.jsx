import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubC = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="
          bg-base-300
          rounded-xl
          shadow-sm
          border border-base-300
          p-6
          hover:shadow-md transition-shadow
        ">
          <h3 className="
            text-2xl font-bold
            mb-6
            text-base-content
            flex items-center gap-2
          ">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Coding Activity
          </h3>
          <GitHubCalendar
  username="mirzawajihali"
  years={[2023, 2024]}
  blockSize={14}
  blockMargin={5}
  fontSize={14}
  hideColorLegend={false}
  hideMonthLabels={false}
  showWeekdayLabels
  theme={{
    light: [
      '#000000',
      '#99f6e4',
      '#2dd4bf',
      '#14b8a6',
      '#0f766e',
    ],
    dark: [
      '#ffffff',
      '#99f6e4',
      '#2dd4bf',
      '#14b8a6',
      '#0f766e',
    ],
  }}
  className={`
    w-full 
    [&>svg]:rounded-lg 
    [&>svg]:overflow-hidden
    [&_rect]:transition-all 
    [&_rect]:duration-200
    [&_rect:hover]:opacity-80
    [&_rect:hover]:scale-105
    [&>svg>text]:text-sm
    [&>svg>text]:text-base-content/80
    [&_rect]:border
    [&_rect]:border-gray-900
  `}
/>
          
          <div className="flex justify-between mt-4 text-sm text-base-content/60">
            <span>Less</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 ${
                    i === 0 ? 'bg-black dark:bg-white' :
                    i === 1 ? 'bg-teal-200 dark:bg-teal-200' :
                    i === 2 ? 'bg-teal-300 dark:bg-teal-300' :
                    i === 3 ? 'bg-teal-400 dark:bg-teal-400' :
                    'bg-teal-600 dark:bg-teal-600'
                  }`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubC;