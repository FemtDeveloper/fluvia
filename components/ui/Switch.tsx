import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

const SwitchTheme = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export default SwitchTheme;
