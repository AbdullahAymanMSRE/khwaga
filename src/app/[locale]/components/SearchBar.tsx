"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function SearchBar() {
  const t = useTranslations("Home");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearchTerm) {
      params.set("q", debouncedSearchTerm);
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedSearchTerm, router, searchParams, pathname]);

  return (
    <div className="relative">
      <Search className="absolute start-3 md:start-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5 md:size-6" />
      <Input
        type="text"
        className="md:text-xl w-full block py-1 md:py-2 h-auto ps-9 md:ps-12 px-3 md:px-4 rounded-xl text-base "
        placeholder={t("search")}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
