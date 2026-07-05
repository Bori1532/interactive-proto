import type { Product } from '@/lib/types'
import { PlaceholderImage } from './PlaceholderImage'
import { PrimaryButton } from './PrimaryButton'

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <article className="content-card overflow-hidden rounded-sm">
      <PlaceholderImage type="product" className="h-28 w-full" label={product.name} />
      <div className="p-4">
        <h3 className="text-[15px] font-semibold text-ivory">{product.name}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-ivory-dark/80">{product.description}</p>
        <p className="mt-3 text-sm font-medium text-gold">{product.price}</p>
        <PrimaryButton
          href={product.url}
          external
          className="mt-4 w-full text-xs"
          onClick={() => onProductClick(product)}
        >
          상품 보러 가기
        </PrimaryButton>
      </div>
    </article>
  )
}
