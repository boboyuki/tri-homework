export const Banner = ({ className }: { className?: string }) => {
  return (
      <div className={`${className} flex justify-end items-bottom bg-[url('./assets/banner.png')] bg-cover bg-right bg-no-repeat p-[28px]`}>
          <div className="flex flex-col justify-end items-bottom text-white text-right">
              <h2 className="text-[48px] font-bold">
                白頭翁 (Chinese bulbul)
              </h2>
              <p className='text-[18px]'>又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</p>
          </div>
      </div>
  )
}