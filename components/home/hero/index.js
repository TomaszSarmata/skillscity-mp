export default function Hero({ img_url, title, subtitle }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-col py-4 items-center space-y-4 md:flex-row md:space-x-4">
        <div className="w-48 border-l-2 border-t-2 border-gray rounded-lg">
          <img src={img_url} className="rounded-lg" />
        </div>
        <div className="w-full text-center md:text-left">
          <h1
            className={`
              text-6xl font-bold italic text-gray-700
              sm:text-red-700 md:text-blue-400 lg:text-blue-700
              `}
          >
            {title}
          </h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
