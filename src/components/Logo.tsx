import { Link } from "@/i18n/navigation";
import LogoSvg from "@/svgs/LogoSvg";
import { useTranslations } from "next-intl";

const Logo = () => {
  const t = useTranslations();
  return (
    <Link href="/" className="flex items-center">
      <LogoSvg />
      <span className="text-3xl font-bold">{t("logo")}</span>
    </Link>
  );
};

export default Logo;
