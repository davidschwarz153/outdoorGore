export default async function Categories() {
  const data = await fetch("https://fakestoreapi.com/products/categories");
  const cat = await data.json();

  return (
    <div className="flex justify-center items-center gap-20 mt-5 mb-20">
      {cat.map((el: string) => {
        return (
          <div
            key={el} 
            className="border-2 py-2 px-4 bg-emerald-700 rounded-xl shadow-xl text-sm cursor-pointer transform transition-transform duration-200 hover:scale-105"
            id={el}
          >
            {el.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}