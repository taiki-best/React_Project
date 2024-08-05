const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const products = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const handleClick =()=>{
 window.alert("You clicked")
};




export default function Profile() {

    const listItems = products.map(product =>
        <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
            {product.title}
        </li>
    );

    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <div>
                <ul>{listItems}</ul>
                <button onClick={handleClick}>mybutton</button>
            </div>
        </>
    );
}