
import ShopSection from '@/components/home/ShopSection'
import BestAudioGear from '@/components/BestAudioGear'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {children}
      <ShopSection />
      <BestAudioGear />
    </div>
  )
}

export default layout