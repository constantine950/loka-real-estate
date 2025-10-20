import Image from "next/image";

const listings = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Lekki, Lagos",
    price: "$450,000",
    description:
      "A spacious 4-bedroom family home located in the heart of Lekki. Comes with a swimming pool, smart home system, and modern kitchen.",
    image: "/list1.avif",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Victoria Island, Lagos",
    price: "$320,000",
    description:
      "A stylish 3-bedroom apartment with sea view, gym access, and 24-hour power supply in the heart of Victoria Island.",
    image: "/list2.avif",
  },
  {
    id: 3,
    title: "Cozy Beach House",
    location: "Ilashe, Lagos",
    price: "$600,000",
    description:
      "Relax in this 5-bedroom beachfront home with private access, open terrace, and panoramic ocean view.",
    image: "/list3.avif",
  },
];

export default async function ListingDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = listings.find((item) => item.id === Number(id));

  if (!listing) {
    return (
      <main className="pt-24 text-center">
        <h1 className="text-2xl text-red-500 font-semibold">
          Property not found 😢
        </h1>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-bold text-teal-600">{listing.title}</h1>
        <p className="text-gray-500 text-lg mt-2">{listing.location}</p>
        <p className="text-teal-600 font-bold text-2xl mt-4">{listing.price}</p>

        <p className="text-gray-700 leading-relaxed mt-6">
          {listing.description}
        </p>

        <button className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition">
          Contact Agent
        </button>
      </div>
    </main>
  );
}
