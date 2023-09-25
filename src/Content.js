import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h3 style={{ background: 'lightgrey', color: '#777', padding: '2rem', margin: 'auto' }}>Your list is empty.</h3>
      )}
    </main>
  );
}

export default Content;