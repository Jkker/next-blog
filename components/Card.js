import Link from '@/components/Link'
import Image from 'next/image'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md " style={{ maxWidth: '544px' }}>
    <div className="h-full card-shadow overflow-hidden">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3 text-black dark:text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
