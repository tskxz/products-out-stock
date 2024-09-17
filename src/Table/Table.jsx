import styles from './Table.module.css'

function Table(props){
    const items = props.item
    const listItems = items.map(item =>
        <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.stock === 0 ? (<td>Out of Stock</td>) : (item.stock)}</td>
        </tr>
    );

    return(
        <table className={styles}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    )
}

export default Table