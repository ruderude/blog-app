import { Tabs } from '../parts'
import { CategoriesNav, categories } from '../../components/blog';

interface Props {
  titles: Array<string>
  posts: any
}

export const Blogs: React.FC<any> = (props) => {
  const { titles, posts } = props;
  return (
    <>
      <h1>Blogs</h1>
      <CategoriesNav
        categories={categories}
      ></CategoriesNav>
      <br />
      <Tabs color={ 'pink' } titles={titles} posts={posts}></Tabs>
    </>
  )
}
