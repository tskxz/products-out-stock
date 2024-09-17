import Table from './Table/Table';
import './App.css'

function App() {

  const products = [
    { name: 'Aluminium', price: 4.99, stock: 100 },
    { name: 'Steel', price: 2.99, stock: 500 },
    { name: 'Iron', price: 5.99, stock: 525 },
    { name: 'Cooper', price: 7.99, stock: 0 },
  ]

  return (
    <>
      <h1>Products</h1>
      <Table item={products}></Table>
    </>
  )
}

export default App
