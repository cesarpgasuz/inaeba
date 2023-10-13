import Image from "next/image"

function Header() {
  return (
    <header className="bg-gradient-to-bl from-gray-200 via-gray-100 to-gray-200 w-full pt-0 pb-8">
        <div className="container max-w-screen-xl mx-auto w-[90%]">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-8/12 order-2">
                        <h1 className="font-bold text-3xl mb-5 text-sky-900 text-center">INAEBA Doctor Mora</h1>
                        <p className="text-gray-800 text-center">Registra una cita para que personal de <strong>INAEBA</strong> vaya directamente hasta tu domicilio</p>
                    </div>
                    <div className="w-full md:w-4/12 flex justify-center items-center order-1">
                        <Image 
                            src='/inaeba-remove.png'
                            alt="inaeba logo"
                            width='300'
                            height='180'
                        />
                    </div>
                </div>
                
            </div>
    </header>
    
  )
}
export default Header