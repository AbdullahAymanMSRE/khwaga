import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import SwitchLanguage from "./SwitchLanguage";

const Navbar = () => {
  const t = useTranslations();
  return (
    <nav className="py-3 border-b border-gray-300">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <SwitchLanguage />
          <Button>{t("sell-my-car")}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
