interface Props {
    id: number
    title: string
    detail: string
}

export const Chaild: React.FC<Props> = (props) => {
  const { id, title, detail } = props;
  return (<>
    <h1>Chaild</h1>
    <h2>{ id }</h2>
    <h2>{ title }</h2>
    <h2>{ detail }</h2>
  </>)
}
