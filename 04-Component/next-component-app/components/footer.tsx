import { FooterType } from '@/interface/main';

function Footer({ list }: { list: FooterType[] }) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {list.map((content: FooterType, index: number) => (
        <a
          href={content.href}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {content.title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {content.desc}
          </p>
        </a>
      ))}
    </div>
  );
}

export default Footer;
