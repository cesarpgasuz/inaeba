import Link from "next/link"
import Image from "next/image"

const CitaFamiliar = () => {
  return (
    <section className='container mx-auto'>
        <Link 
            href='/'
            className="bg-blue-400 text-slate-100 text-center p-2 fixed top-0 left-0 w-full"
        ><Image
            src='back.svg'
            alt="regresar"
            width={35}
            height={35}
        /></Link>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSiRZQQoD4r92kgZ6DRGZI4lVoBmRNIrPNjr3C4z_WdqOnEg/viewform?embedded=true" className="w-full h-screen mt-10">Cargando…</iframe>
    </section>
    
  )
}
export default CitaFamiliar