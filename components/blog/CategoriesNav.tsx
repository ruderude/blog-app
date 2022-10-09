import { CategoryBtn } from './CategoryBtn'
import { useRouter } from 'next/router'

interface Props {
  categories: Array<string>
}

export const CategoriesNav: React.FC<Props> = (props) => {
  const { categories } = props;
  const router = useRouter()

  const changeCategory = (e) => {
    console.log(e.target.textContent)
    const category = e.target.textContent
    category === 'all' ? router.push(`/categories`) : router.push(`/categories/${category}`)
  }

  return (<>
    <div className="flex flex-row justify-start mt-6">
      {categories.map((category, index) => (
        <CategoryBtn
          onClick={changeCategory}
          key={index}
        >{category}</CategoryBtn>
      ))}
    </div>
  </>)
}
