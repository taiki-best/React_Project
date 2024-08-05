const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const products = [
    { title: 'Cabbage', fruit: true, id: 1 },
    { title: 'Garlic', fruit: false, id: 2 },
    { title: 'Apple', fruit: true, id: 3 },
];

const listItems = products.map(product => {
    if (product.fruit) {
        <li key={product.id} style={{color : "red"}}>
            {product.title}
        </li>
    }

});



export default function Profile() {
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
            <ul>{listItems}</ul>
        </>
    );
}