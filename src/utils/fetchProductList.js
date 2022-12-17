import { productList } from '../static/mock_data';

function fetchList(pageNumber, number_of_items) {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            try {
                const productListclone = [...productList];
                const startIndex = !(pageNumber < 2) ? (pageNumber - 1) * number_of_items : 0;
                const endIndex = pageNumber * number_of_items;
                const sortItems = productListclone.splice(startIndex, number_of_items);
                resolve(sortItems);
            } catch (error) {
                console.log("Erorr while fetching the productList error: ", error);
                rejected([]);
            }
        }, 1000);
    });
}
export async function fetchProductList(pageNumber, number_of_items) {
    const item = await fetchList(pageNumber, number_of_items);
    return item;
}