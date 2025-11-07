import AppHeader from "@/components/AppHeader";
import FormContainer from "@/components/checkout/FormContainer";
import Summary from "@/components/checkout/Summary";
import GoBack from "@/components/sharedUI/GoBack";

function page() {
  return (
    <section className="w-full bg-offwhite min-h-screen">
      <AppHeader />
      <div className="container pt-6 sm:pt-8 lg:pt-12 pb-[6.06rem] sm:pb-29 lg:pb-[8.81rem]">
        <div className="mb-6 sm:mb-8">
          <GoBack />
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <FormContainer />
          <Summary />
        </div>
      </div>
    </section>
  );
}

export default page;
