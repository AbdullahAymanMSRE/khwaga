import { CarPost } from "./CarPostsList";
import { forwardRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale, useTranslations } from "next-intl";
import { localizeValue } from "@/lib/utils";

export default forwardRef<HTMLDivElement, { carPost: CarPost }>(
  function CarPost({ carPost }, ref) {
    const t = useTranslations("Home");
    const locale = useLocale();
    return (
      <Card
        key={carPost.id}
        ref={ref}
        className="flex justify-between py-4 px-4 gap-4"
      >
        <div className="h-[200px] md:h-[250px] lg:h-[300px] bg-gray-200 rounded-md overflow-hidden">
          {carPost.carPostImages?.[0] ? (
            <Image
              src={carPost.carPostImages[0].url}
              alt={carPost.title}
              width={400}
              height={200}
              className="object-cover aspect-w-16 aspect-h-8 w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {carPost.title}
          </h3>
          <p className=" text-gray-600">
            {localizeValue(carPost.carModel.carMake, "name", locale)}{" "}
            {localizeValue(carPost.carModel, "name", locale)} • {carPost.year}
          </p>
          <p className="text-2xl font-bold text-blue-600">
            {carPost.price.toLocaleString()} {t("currency")}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>
              {carPost.mileage.toLocaleString()} {t("mileage")}
            </Badge>
            {carPost.carFuelType && (
              <Badge>
                {localizeValue(carPost.carFuelType, "name", locale)}
              </Badge>
            )}
            {carPost.carTransmission && (
              <Badge>
                {localizeValue(carPost.carTransmission, "name", locale)}
              </Badge>
            )}
            {carPost.carBodyType && (
              <Badge>
                {localizeValue(carPost.carBodyType, "name", locale)}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    );
  }
);
