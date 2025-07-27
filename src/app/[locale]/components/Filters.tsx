"use client";

import { useTranslations } from "next-intl";

import ApiInfiniteFilter from "./ApiInfiniteFilter";
import { useSearchParams } from "next/navigation";

import {
  getCarMakes,
  getCarModels,
  getCarBodyTypes,
  getCarFuelTypes,
  getCarTransmissions,
  getCarTransmissionBySlug,
  getCarFuelTypeBySlug,
  getCarBodyTypeBySlug,
  getCarModelBySlug,
  getCarMakeBySlug,
} from "@/actions";

export default function Filters() {
  const t = useTranslations("Home.filters");
  const searchParams = useSearchParams();
  const make = searchParams.get("make");

  return (
    <div className="flex gap-2 md:gap-4 flex-wrap">
      <ApiInfiniteFilter
        id="make"
        label={t("make")}
        getAll={getCarMakes}
        getSingle={getCarMakeBySlug}
      />
      <ApiInfiniteFilter
        id="model"
        label={t("model")}
        getAll={getCarModels}
        getSingle={getCarModelBySlug}
        extraQueryParams={{ make: make ?? "" }}
      />
      <ApiInfiniteFilter
        id="bodyType"
        label={t("bodyType")}
        getAll={getCarBodyTypes}
        getSingle={getCarBodyTypeBySlug}
      />
      <ApiInfiniteFilter
        id="fuelType"
        label={t("fuelType")}
        getAll={getCarFuelTypes}
        getSingle={getCarFuelTypeBySlug}
      />
      <ApiInfiniteFilter
        id="transmission"
        label={t("transmission")}
        getAll={getCarTransmissions}
        getSingle={getCarTransmissionBySlug}
      />
    </div>
  );
}
