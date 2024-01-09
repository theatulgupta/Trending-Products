declare module '*.png';
declare module '*.jpg';


interface Product {
    id: string,
    name: string,
    imageUrl: string,
    originalPrice: Number,
    discountPrice: Number,
    offerPercentage: Number,
    rating: Number,
    ratingCount: Number,
    tags: string[]
}