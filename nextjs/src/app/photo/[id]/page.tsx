import { notFound } from "next/navigation";
import { CARS } from "../../page";

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;

  const car = CARS.find((c) => c.id === id);

  if (!car) return notFound();

  return (
    <div>
      <h1>{car.name}</h1>
      <p>ID: {car.id}</p>
    </div>
  );
}
