import { BlogCard } from '../blog';

interface Props {
  title: string
  blogs: any
  number: number
  openTab: number
}


export const TabDetail: React.FC<Props> = (props) => {
  const { title, blogs, number, openTab } = props;
  console.log(title)
  console.log(blogs)
  return (<>
    <div className={openTab === number ? "block" : "hidden"} id={`link${number}`}>
      <div className="grid grid-cols-3 gap-3">
        {blogs.map((blog) => (
          <BlogCard
            title={ title }
            blog={blog}
            key={blog.slug}
          ></BlogCard>
        ))}
      </div>
    </div>
  </>)
}