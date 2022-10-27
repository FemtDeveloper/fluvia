import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "../../assets/sunIcon";
import { MoonIcon } from "../../assets/moonIcon";

const SwitchTheme = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div>
      <Switch
        checked={isDark}
        // @ts-ignore
        iconOn={<SunIcon filled />}
        // @ts-ignore
        iconOff={<MoonIcon filled />}
        size="sm"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export default SwitchTheme;
