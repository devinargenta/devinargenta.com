export default () => (<div>hi</div>);

export async function getServerProps(context) {
  const { query } = context.query;
  console.log(query)
  return {
    props: { 
      ...query
    }
  }
}