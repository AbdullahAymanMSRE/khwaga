import { usePathname, useRouter } from "@/i18n/navigation";
import useCreateQueryString from "@/hooks/useCreateQueryString";
import { useSearchParams } from "next/navigation";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { localizeValue } from "@/lib/utils";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useLocale, useTranslations } from "next-intl";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { PaginationResult } from "@/lib/pagination";

const limit = 10;

export default function ApiInfiniteFilter({
  id,
  label,
  extraQueryParams,
  getAll,
  getSingle,
}: {
  id: string;
  label: string;
  getAll: (params: {
    skip: number;
    take: number;
    extraQueryParams?: Record<string, string>;
  }) => Promise<PaginationResult<{ slug: string; name: string }>>;
  getSingle: (slug: string) => Promise<{ slug: string; name: string } | null>;
  extraQueryParams?: Record<string, string>;
}) {
  const createQueryString = useCreateQueryString();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Home.filters");

  const selectedValue = searchParams.get(id);

  const {
    isLoading,
    data: queryData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [id, extraQueryParams],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const skip = (pageParam - 1) * limit;
      const params = {
        skip,
        take: limit,
        ...extraQueryParams,
      };

      return await getAll(params);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasNextPage
        ? lastPage.pagination.currentPage + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  // Fetch the selected item separately if it's not found in the current data
  const { data: selectedItemData } = useQuery({
    queryKey: [id, "single", selectedValue],
    queryFn: async () => {
      if (!selectedValue) return null;
      const result = await getSingle(selectedValue);
      return result;
    },
    enabled: !!selectedValue && selectedValue.length > 0,
  });

  const { data, lastElementRef } = useInfiniteScroll({
    queryData,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  });

  // Combine paginated data with the selected item (if it exists and is not already in the data)
  const combinedData = useMemo(() => {
    if (!data) return data;
    if (!selectedItemData) return data;

    // Check if the selected item is already in the data
    const isAlreadyInData = data.some(
      (item) => item.slug === selectedItemData.slug
    );
    if (isAlreadyInData) return data;

    // Add the selected item to the beginning of the list
    return [selectedItemData, ...data];
  }, [data, selectedItemData]);

  const selectedOption =
    selectedValue && combinedData
      ? combinedData.find((option) => option.slug === selectedValue)
      : null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("text-sm md:text-base justify-between", {
            "text-muted-foreground": !selectedOption,
          })}
        >
          {selectedOption
            ? localizeValue(selectedOption, "name", locale)
            : label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput
            placeholder={`${t("search")} ${label.toLowerCase()}...`}
          />
          <CommandList className="max-h-[300px]">
            <CommandEmpty>{t("noResults")}</CommandEmpty>
            <CommandGroup>
              {combinedData?.map((option) => (
                <CommandItem
                  key={option.slug}
                  value={`${option.slug}-${localizeValue(
                    option,
                    "name",
                    locale
                  )}`}
                  onSelect={() => {
                    const queryString = createQueryString(id, option.slug);
                    router.push(`${pathname}?${queryString}`);
                    setOpen(false);
                  }}
                  ref={lastElementRef}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValue === option.slug
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {localizeValue(option, "name", locale)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
