import { brandsType } from "../details/brands";

type HomeProps = {
  brandName: brandsType;
};

export const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="">
      <div className="" key={props.brandName[0].id}>
        <div>
          {props.brandName.map((each) => {
            return (
              <div>
                <div className="pt-10 w-3/4 px-2  m-auto">
                  <div className="my-8 ">
                    <h1 className="text-black text-center mb-9 text-7xl font-bold ">
                      {each.brand}
                    </h1>
                    <h2 className="text-black text-center mb-28 text-2xl font-sans  ">
                      {each.history}
                    </h2>
                  </div>
                  <div className=" flex justify-center mb-12 pb-36 border-spacing-2 md:border-b-4 border-zinc-800 ">
                    <div className="mx-3 mb-6 px-4 pt-1 rounded font-sans font-small w-2/12 border-spacing-2 border-2 border-zinc-800">
                      <img
                        className="w-36 rounded-md m-auto mt-4 shadow-black shadow-md"
                        src={each.products[0].picture}
                        alt="product pic"
                      ></img>
                      <div className="mt-3  ml-[20%] mb-6">
                        <h3 className="text-m text-slate-800">
                          {each.products[0].name}
                        </h3>
                        <h4 className="text-m text-slate-800">
                          SIZE: {each.products[0].size}
                        </h4>
                        <h4 className="text-m text-slate-800">
                          PRICE: {each.products[0].price}$
                        </h4>
                      </div>
                    </div>
                    <div className="mx-3 mb-6 px-4 pt-1 rounded font-sans font-small w-2/12 border-spacing-2 border-2 border-zinc-800">
                      <img
                        className="w-36 rounded-md m-auto mt-4 shadow-black shadow-md"
                        src={each.products[1].picture}
                        alt="product pic"
                      ></img>
                      <div className="mt-3 ml-[20%]">
                        <h3 className="text-m text-slate-800">
                          {each.products[1].name}
                        </h3>
                        <h4 className="text-m text-slate-800">
                          SIZE: {each.products[1].size}
                        </h4>
                        <h4 className="text-m text-slate-800">
                          PRICE: {each.products[1].price}$
                        </h4>
                      </div>
                    </div>
                    <div className="mx-3 mb-6 px-4 pt-1 rounded font-sans font-small w-2/12 border-spacing-2 border-2 border-zinc-800">
                      <img
                        className="w-36 rounded-md m-auto mt-4 shadow-black shadow-md"
                        src={each.products[2].picture}
                        alt="product pic"
                      ></img>
                      <div className="mt-3 ml-[20%]">
                        <h3 className="text-m text-slate-800">
                          {each.products[2].name}
                        </h3>
                        <h4 className="text-m text-slate-800">
                          SIZE: {each.products[2].size}
                        </h4>
                        <h4 className="text-m text-slate-800">
                          PRICE: {each.products[2].price}$
                        </h4>
                      </div>
                    </div>
                    <div className="mx-3 mb-6 px-4 pt-1 rounded font-sans font-small w-2/12 border-spacing-2 border-2 border-zinc-800">
                      <img
                        className="w-36 rounded-md m-auto mt-4 shadow-black shadow-md"
                        src={each.products[3].picture}
                        alt="product pic"
                      ></img>
                      <div className="mt-3 ml-[20%]">
                        <h3 className="text-m text-slate-800">
                          {each.products[3].name}
                        </h3>
                        <h4 className="text-m text-slate-800">
                          SIZE: {each.products[3].size}
                        </h4>
                        <h4 className="text-m text-slate-800">
                          PRICE: {each.products[3].price}$
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
