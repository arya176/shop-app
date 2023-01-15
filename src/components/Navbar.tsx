export const Navbar = () => {
  return (
    <div className="px-4 bg-black text-white m-0 text-sm z-10 mb-10">
      <div>
        <div className="flex flex-row flex-wrap pt-6 font-bold  text-center w-3/4 m-auto">
          <div className=" basis-1/12">Dominugo</div>
          <div className="basis-1/12 md:border-b-2 pb-4">WOMEN</div>
          <div className=" basis-1/12">MEN</div>
          <div className=" basis-1/12">KIDS</div>
          <div className=" basis-1/12">SPORTS</div>
          <div className=" basis-1/12">BEAUTY</div>
          <div className=" basis-1/12">HOME</div>
          <div className=" basis-5/12">
            <div>sign in, love , shop, seach symbol</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row flex-wrap pt-4 pb-6 bg-black text-white text-sm w-3/4 m-auto text-center">
          <div className=" basis-1/12">NEW IN</div>
          <div className=" basis-1/12">CLOTHING</div>
          <div className=" basis-1/12">SHOES</div>
          <div className=" basis-1/12">ACCESORIES</div>
          <div className=" basis-1/12">SPORT</div>
          <div className=" basis-1/12">GIFTS</div>
          <div className=" basis-1/12">BRANDS</div>
          <div className=" basis-1/12">DESIGNER</div>
          <div className=" basis-1/12">SNEAKERHUB</div>
          <div className="text-red-700 basis-3/12">SALE</div>
        </div>
      </div>
    </div>
  );
};
