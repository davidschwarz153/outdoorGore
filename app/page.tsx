import Cards from "@/components/ui/cards";
import Categories from "@/components/ui/catergories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <section id="categories">
          <Categories />
        </section>

        <section id="sale-cards" className="m-20 ">
          <Cards></Cards>
        </section>
    </div>
  );
}