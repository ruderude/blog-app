import type { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import { BlogCard, CategoriesNav, categories } from '../../components/blog';

export const getStaticProps = ({ params }) => {
  const dirList = fs.readdirSync('posts');
  let allposts = []
  for (let i = 0; i < dirList.length; i++) {
    const files = fs.readdirSync(`posts/${dirList[i]}`);
    const posts = files.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(`posts/${dirList[i]}/${fileName}`, 'utf-8');
      const { data } = matter(fileContent);
      return {
        frontMatter: data,
        slug: slug,
        year: dirList[i],
      };
    });

    allposts = allposts.concat(posts);
  }

  // console.log(allposts)

  const sortedPosts = allposts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

const Category: NextPage<any> = ({ posts }) => {
  return (
    <>
      <CategoriesNav
        categories={categories}
      ></CategoriesNav>
      <br />
      <div className="my-8">
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard
              title={ post.year }
              blog={post}
              key={post.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;