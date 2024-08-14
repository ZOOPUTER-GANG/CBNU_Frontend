import { useState, useEffect } from "react";

interface ProductInfo {
  categoryId: number;
  productId: number;
  productName: string;
}

interface CategoryInfo {
  categoryId: number;
  categoryName: string;
}

const categoryData: CategoryInfo[] = [
  { categoryId: 1, categoryName: "과일" },
  { categoryId: 2, categoryName: "동물" },
  { categoryId: 3, categoryName: "의류" },
];

const productData: ProductInfo[] = [
  { categoryId: 1, productId: 1, productName: "사과" },
  { categoryId: 1, productId: 2, productName: "수박" },
  { categoryId: 2, productId: 3, productName: "고양이" },
  { categoryId: 2, productId: 4, productName: "강아지" },
  { categoryId: 3, productId: 5, productName: "원피스" },
  { categoryId: 3, productId: 6, productName: "티셔츠" },
];

const Product = () => {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | "">("");
  const [products, setProducts] = useState<ProductInfo[]>([]);

  useEffect(() => {
    setCategories(categoryData);
    setProducts(productData);
  }, []);

  useEffect(() => {
    if (selectedCategory == "") {
      // 선택된 카테고리가 비어 있는 경우 모든 제품을 표시합니다.
      setProducts(productData);
    } else {
      // 선택된 카테고리에 따라 제품 필터링
      const filteredProducts = productData.filter(
        (product) => product.categoryId === Number(selectedCategory)
      );
      setProducts(filteredProducts);
    }
  }, [selectedCategory]);

  return (
    <div>
      {/* <div className="m-4">
        <select>
          {categorys.map((item, index) => (
            <option key={index} value={item.categoryId}>
              {item.categoryName}
            </option>
          ))}
        </select>
      </div> */}

      <div className="m-4">
        <select
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
          value={selectedCategory || ""}
        >
          <option value="">카테고리 선택</option>
          {categories.map((item) => (
            <option key={item.categoryId} value={item.categoryId}>
              {item.categoryName}
            </option>
          ))}
        </select>
      </div>

      <h1 className="m-4 font-bold">Product List</h1>

      <hr />

      <div className="m-4">
        <table className="border-collapse border border-slate-400 ... w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 ...">제품번호</th>
              <th className="border border-slate-300 ...">제품명</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-300 ...">
                  {item.productId}
                </td>
                <td className="border border-slate-300 ...">
                  {item.productName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
