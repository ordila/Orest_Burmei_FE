import { FC, SVGProps } from "react";

import { ICONS_HASH_MAP } from "../../utils/iconMap";

interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: keyof typeof ICONS_HASH_MAP;
}

export const IconCurrency: FC<IIconProps> = ({ icon, ...rest }) => {
  const IconComponent = ICONS_HASH_MAP[icon];

  if (!IconComponent) {
    console.error(`Icon component for '${icon}' not found.`);
    return null;
  }

  return <IconComponent {...rest} />;
};
