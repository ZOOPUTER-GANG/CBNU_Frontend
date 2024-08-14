import { useState, useEffect } from "react";
import { Category, Product } from "@/interfaces/product";

const categoryData: Category[] = [
  {
    category_id: 0,
    category: "전체",
    sort: 0,
  },
  {
    category_id: 1,
    category: "TV",
    sort: 0,
  },
  {
    category_id: 2,
    category: "냉장고",
    sort: 0,
  },
  {
    category_id: 3,
    category: "컴퓨터",
    sort: 0,
  },
];

const productData: Product[] = [
  { product_id: 1, category_id: 1, product_name: "티비1" },
  { product_id: 2, category_id: 1, product_name: "티비1" },
  { product_id: 3, category_id: 2, product_name: "냉장고1" },
  { product_id: 4, category_id: 2, product_name: "냉장고2" },
  { product_id: 5, category_id: 3, product_name: "컴퓨터1" },
  { product_id: 6, category_id: 3, product_name: "컴퓨터2" },
];

const Products = () => {
  const [categorys, setCategorys] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    category_id: 0,
    category: "전체",
    sort: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);

  //  최초 화면 로딩시점
  useEffect(() => {
    setCategorys(categoryData);
    setProducts(productData);
    setSelectedCategory({
      category_id: 0,
      category: "전체",
      sort: 0,
    });
  }, []);

  // 특정 상태값이 변경되는 시점을 확인해서 기능구현
  useEffect(() => {
    const searchResult = productData.filter(
      (p) => p.category_id == selectedCategory.category_id
    );

    if (selectedCategory.category_id == 0) {
      setProducts(productData);
    } else {
      setProducts(searchResult);
    }
  }, [selectedCategory]);

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = categorys.find(
      (c) => c.category_id == Number(e.target.value)
    ) as Category;

    setSelectedCategory(category);
  };

  return (
    <div className="p-20">
      {/* 제품 카테고리 선택영역 */}
      <div>
        <select
          onChange={changeCategory}
          value={selectedCategory.category_id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {categorys.map((category, index) => (
            <option key={index} value={category.category_id}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
      <br />
      {/* 제품 목록 출력영역 */}
      <div>
        <table className="border-separate border border-slate-400 ... w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 ...">제품번호</th>
              <th className="border border-slate-300 ...">제품명</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="border border-slate-300 ...">
                  {product.product_id}
                </td>
                <td className="border border-slate-300 ...">
                  {product.product_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
