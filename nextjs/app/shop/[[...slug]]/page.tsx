interface ShopPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;

  const currentSlug = slug || [];
  const [category, brand, model] = currentSlug;

  return (
    <div>
      <span>
        <p>Category: {category || "All categories"}</p>
      </span>
      <span>
        <p>Brand: {brand || "All brands"}</p>
      </span>
      <span>
        <p>Model: {model || "All models"}</p>
      </span>
      <span>
        <p>DEBUG Raw Segment Array: {JSON.stringify(slug)}</p>
      </span>
    </div>
  );
}
