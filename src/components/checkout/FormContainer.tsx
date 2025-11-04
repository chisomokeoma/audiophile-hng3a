import CheckOutForm from "./CheckOutForm"

function FormContainer() {
  return (
    <div className="w-full font-manrope bg-white rounded-lg">
      <div className="w-full flex flex-col gap-8 sm:gap-[2.56rem] grow px-6 pt-6 pb-[1.94rem] sm:px-7 sm:py-[1.88rem] lg:pt-12 lg:pb-[3.38rem] lg:px-12">
        <h5 className="text-[1.75rem]/[100%] sm:text-[2rem]/[112.5%] tracking-[0.0625rem] sm:tracking-[0.07144rem] font-bold uppercase ">
          CHECKOUT
        </h5>
        <CheckOutForm/>
      </div>
    </div>
  )
}

export default FormContainer