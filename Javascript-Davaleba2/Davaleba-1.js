const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};

const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};

const gaertianebuli = 
{
    ...productsFeatures, ... productProperties
};

console.log(gaertianebuli)