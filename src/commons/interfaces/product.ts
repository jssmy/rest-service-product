export interface IProduct {
    slug?: string;
    title: string;
    description: string;
    price: number;
    categories: ICategory[];
    images: IImage[];
    store: Store;
    state: boolean;
    created: number;
    updated: number;
}
export interface IImage {
    source: string;
}

interface ICategory {
    id: string;
    name: string;
}

export interface Store {
    id: string;
    slug: string;
    name: string;
}