import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CartItemsComponent from "./CartItemsComponent";
import ProductsComponent from "./ProductsComponent";
import { useSelector, useDispatch } from "react-redux";

export default function IshopIndexComponent() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [electronicsCount, setElectronicsCount] = useState<number>(0);
  const [mensCount, setMensCount] = useState<number>(0);
  const [womenCount, setWomenCount] = useState<number>(0);
  const [jewCount, setJewCount] = useState<number>(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/categories").then((res) => {
      setCategories(res.data);
    });
    axios.get("http://127.0.0.1:8080/products").then((res) => {
      setProducts(res.data);
      setElectronicsCount(
        res.data.filter((product: any) => product.category == "electronics")
          .length
      );
      setMensCount(
        res.data.filter((product: any) => product.category == "men's clothing")
          .length
      );
      setWomenCount(
        res.data.filter(
          (product: any) => product.category == "women's clothing"
        ).length
      );
      setJewCount(
        res.data.filter((product: any) => product.category == "jewelery").length
      );
    });
  }, []);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-danger p-2 text-white text-center">
          <h2>
            {" "}
            <span className="bi bi-cart4"></span> I-Shop SPA
          </h2>
        </header>
        <section>
          <div className="row">
            <div className="col-3">
              <ul className="list-unstyled mt-2">
                <li>
                  <Link
                    className="btn btn-danger w-100 mb-2"
                    to={`/products/electronics`}
                  >
                    Electronics ({electronicsCount})
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-danger w-100 mb-2"
                    to={`/products/men's clothing`}
                  >
                    Men's Clothing ({mensCount})
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    className="btn btn-danger w-100 mb-2"
                    to={`/products/women's clothing`}
                  >
                    Women's Clothing ({womenCount})
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-danger w-100 mb-2"
                    to={`/products/jewelery`}
                  >
                    Jewelery ({jewCount})
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-7">
              <Routes>
                <Route
                  path="/products/:category"
                  element={<ProductsComponent></ProductsComponent>}
                ></Route>
              </Routes>
            </div>
            <div className="col-2">
              <div className="mt-2">
                <span>[] Your Cart Items</span>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}
