import AppHeader from "@/components/AppHeader";
import FormContainer from "@/components/checkout/FormContainer";
import Summary from "@/components/checkout/Summary";

function page() {
  return (
    <section className='w-full bg-offwhite'>
      <AppHeader />
      <div className='container flex flex-col lg:flex-row gap-8 lg:gap-10 mb-[6.06rem] sm:mb-29 lg:[8.81rem]'>
        <FormContainer />
        <Summary />
      </div>
    </section>
  );
}

export default page;