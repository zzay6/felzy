export default function Footer() {
  return (
    <footer className="bg-white pt-10 mt-20">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center mb-5">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Felzy
              </span>
            </a>

            <p className=" mb-5 text-sm" style={{ maxWidth: "400px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas
              cum obcaecati nobis quaerat quo ducimus veniam sint aliquid. Quis
              expedita possimus vitae eveniet, illo dolorem perferendis deserunt
              ex doloribus.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Halaman</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/hubungi-kami" className="hover:underline">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">
                Tentang Kami
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/login" className="hover:underline ">
                    Felissa Vivian
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/login" className="hover:underline ">
                    Zacky Zalfa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="md:flex md:items-center text-center md:justify-between mb-32 md:mb-0">
          <span className="text-sm sm:text-center text-gray-400">
            © 2025{" "}
            <a href="https://felzy.id" className="hover:underline">
              felzy
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-3 md:mt-0">
            <a href="/" className="text-sm sm:text-center text-gray-400">
              <i className="far fa-globe mr-2"></i> http://felzy.id
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
