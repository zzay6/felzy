export default function Footer({ global }) {
  const logo = "/api/logo";
  return (
    <footer
      className="pt-10 mt-20 bg-gradient-to-t from-white via-white to-[#EAF1FF]"
      // style={{ background: "rgb(255,255,255, 0.6)" }}
    >
      <div className="mx-auto w-full container p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center mb-5">
              <img src={logo} className="w-16" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                {global.siteName}
              </span>
            </a>

            <p className=" mb-5 text-sm" style={{ maxWidth: "400px" }}>
              {global.siteDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-40">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Sitemap</h2>
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
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
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
