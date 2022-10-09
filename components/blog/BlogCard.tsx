import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string 
  blog: any
}

export const BlogCard: React.FC<Props> = ({ title, blog }) => {
  return (
    <div>
      <Link href={`/blog/${title}_${blog.slug}`}>
        <a>
          <div className=''>
            <Image
              className="rounded-lg"
              src={`/${blog.frontMatter.image}`}
              width={1200}
              height={700}
              alt={blog.frontMatter.title}
            />
          </div>
          <div className="px-2">
            <h1 className="font-bold text-lg">{blog.frontMatter.title}</h1>
            <span className='text-xs'>{blog.frontMatter.date}</span>
          </div>
        </a>
      </Link>
      <div className="space-x-2">
        {blog.frontMatter.categories.map((category) => (
          <span className='bg-orange-500 text-white rounded px-2' key={category}>
            <Link href={`/categories/${category}`}>
              <a>{category}</a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};