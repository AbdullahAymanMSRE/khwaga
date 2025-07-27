import { getTranslations, setRequestLocale } from "next-intl/server";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import CarPostsList from "./components/CarPostsList";
import getCarPosts from "@/actions/carPosts";

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    q?: string;
    make?: string;
    model?: string;
    bodyType?: string;
    fuelType?: string;
    transmission?: string;
  }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Home");
  setRequestLocale(locale);

  const initialData = await getCarPosts({
    skip: 0,
    take: 5,
    ...(await searchParams),
  });

  return (
    <div className="flex flex-col py-9 container gap-4">
      <h2 className="text-2xl lg:text-4xl font-bold">{t("title")}</h2>
      <SearchBar />
      <Filters />
      <CarPostsList initialData={initialData} />
    </div>
  );
}
