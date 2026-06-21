// Components.d.ts — the complete catalog of the 11 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ButtonButton) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button/Button" (node 16215:37602)
export interface ButtonButtonProps {
  className?: string;
  style?: React.CSSProperties;
  loading?: boolean;
  label?: string;
  leadingIcon?: boolean;
  variant?: "solid" | "outlined";
  disable?: boolean;
  color?: "primary" | "assistive";
  trailingIcon?: boolean;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Chip/Chip" (node 16215:42078)
export interface ChipChipProps {
  className?: string;
  style?: React.CSSProperties;
  instance?: React.ReactNode;
  text?: string;
  trailingContent?: boolean;
  instance2?: React.ReactNode;
  leadingContent?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outlined";
  disable?: boolean;
  active?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Circular/Circular" (node 16215:24960)
export interface CircularCircularProps {
  className?: string;
  style?: React.CSSProperties;
  animate?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Content Badge/Content Badge" (node 16215:25365)
export interface ContentBadgeContentBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "solid" | "outlined";
  size?: "md" | "sm" | "xs";
  color?: "neutral" | "accent";
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  text?: string;
}

// figma layer: "Control/.Switch" (node 137:460)
export interface ControlSwitchProps {
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  disable?: boolean;
  size?: "md" | "sm";
}

// figma layer: "Icon/Normal/!Blank" (node 16215:13728)
export interface IconNormalBlank3Props {
  className?: string;
  style?: React.CSSProperties;
  name?: "blank";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Icons/Icons" (node 16215:25199)
export interface IconsIconsProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  prop?: "null";
}

// figma layer: "Interaction/Light" (node 16215:17261)
export interface InteractionLightProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "normal" | "hovered" | "focused" | "pressed";
}

// figma layer: "Interaction/Normal" (node 16215:17256)
export interface InteractionNormalProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "normal" | "hovered" | "focused" | "pressed";
}

// figma layer: "Interaction/Strong" (node 16215:17266)
export interface InteractionStrongProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "normal" | "hovered" | "focused" | "pressed";
}

// figma layer: "Ratio/Vertical" (node 16215:17327)
export interface RatioVertical2Props {
  className?: string;
  style?: React.CSSProperties;
  ratio?: "1:1" | "1:2" | "2:3" | "3:4";
}

declare const ButtonButton: React.FC<ButtonButtonProps>;
declare const ChipChip: React.FC<ChipChipProps>;
declare const CircularCircular: React.FC<CircularCircularProps>;
declare const ContentBadgeContentBadge: React.FC<ContentBadgeContentBadgeProps>;
declare const ControlSwitch: React.FC<ControlSwitchProps>;
declare const IconNormalBlank3: React.FC<IconNormalBlank3Props>;
declare const IconsIcons: React.FC<IconsIconsProps>;
declare const InteractionLight: React.FC<InteractionLightProps>;
declare const InteractionNormal: React.FC<InteractionNormalProps>;
declare const InteractionStrong: React.FC<InteractionStrongProps>;
declare const RatioVertical2: React.FC<RatioVertical2Props>;
declare global {
  interface Window {
    ButtonButton: React.FC<ButtonButtonProps>;
    ChipChip: React.FC<ChipChipProps>;
    CircularCircular: React.FC<CircularCircularProps>;
    ContentBadgeContentBadge: React.FC<ContentBadgeContentBadgeProps>;
    ControlSwitch: React.FC<ControlSwitchProps>;
    IconNormalBlank3: React.FC<IconNormalBlank3Props>;
    IconsIcons: React.FC<IconsIconsProps>;
    InteractionLight: React.FC<InteractionLightProps>;
    InteractionNormal: React.FC<InteractionNormalProps>;
    InteractionStrong: React.FC<InteractionStrongProps>;
    RatioVertical2: React.FC<RatioVertical2Props>;
  }
}
