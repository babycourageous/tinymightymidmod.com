import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-full flex flex-col justify-center items-center">
        <div className="w-20 h-20 relative">
          <Image
            objectFit="cover"
            src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/227565168_2740306469427065_5507447205079120382_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=Jet5d1HGE0YQ7kNvgH8pnrA&_nc_gid=f730681ed6ed46f1ad694c847b3b04bc&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYD0KoplRhafvDvl-IxMeJmT82Wtnsnpr6Lupc8Y7OfYrw&oe=66FBE6A7&_nc_sid=22de04"
            alt="icon"
            fill
          />
        </div>
      </main>
    </div>
  )
}
