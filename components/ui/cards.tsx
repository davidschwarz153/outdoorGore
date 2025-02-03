type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
      rate: number, 
      count: number,
  }
}

export default async function Cards(){
    const cards = await fetch("https://fakestoreapi.com/products")
    const data = await cards.json()

    return (
      <div className="md:grid md:grid-cols-4 md:gap-10">
        {data.map((el: Product )=> {
            return (
              <article className="text-emerald-950 h-[40vh] flex flex-col justify-center p-10 border-2 rounded-lg shadow-sm cursor-pointer transform transition-transform duration-200 hover:scale-105" >
                  <img src={el.image} className="h-60 w-auto object-contain mb-2" alt={el.title + ' ' + 'img'} />
                  <h1 className="truncate">{el.title}</h1>
                  <p className="truncate mb-6">{el.description}</p>
                  <div className="flex justify-between">
                    <p>{el.rating.rate + '/5'}</p>
                    <p>{el.price}</p>
                  </div>

              </article>
            )
        })}
      </div>
    )
}