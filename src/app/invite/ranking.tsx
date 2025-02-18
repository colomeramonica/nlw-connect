import Image from 'next/image'
import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            1° | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-300 leading-none">
            1030
          </span>

          <Image className="absolute top-0 right-8" src={gold} alt="" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            2° | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-300 leading-none">
            1030
          </span>

          <Image className="absolute top-0 right-8" src={silver} alt="" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            3° | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-300 leading-none">
            1030
          </span>

          <Image className="absolute top-0 right-8" src={cooper} alt="" />
        </div>
      </div>
    </div>
  )
}
