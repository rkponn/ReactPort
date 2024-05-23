import stockApp from './assets/images/stock-app.png';
import wordle from './assets/images/wordle.png';
import './assets/css/project.css';


const myProjects = [
    {
        id: 1,
        title: 'Learn more about Stocks',
        href: '#',
        description:
        'This application is taking advantage of a third-party API to display stock prices. As well as a section to learn and view charts. (In Progress)',
        date: 'Mar 16, 2022',
        datetime: '2020-03-16',
        category: { title: 'Stock App', href: '#' },
        imageUrl: stockApp,
        framework: 'React',
        language: 'JavaScript',

    },
    {
        id: 2,
        title: 'Wordle Game',
        href: '#',
        description:
          'After the famous word game wordle, Using tailwind and Vue to build a clone of the game',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Wordle', href: '#' },
        imageUrl: wordle,
        framework: 'Vue',
        language: 'JavaScript',
      },
    
  ]
  
  export default function Projects() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here are some projects in progress or complete
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {myProjects.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <img src={post.imageUrl} alt="" className="proj-image" />
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <p className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.framework}</p>
                <p className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.language}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  