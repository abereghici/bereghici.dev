import { css } from '@emotion/react';
import { colors } from '@bereghici/design-system.primitives';
import { hexToRgba } from '@bereghici/design-system.utils/colors';

import type { Palette } from './palette';
import { transformObjectKeysToCSSVars } from './utils';

export const rawDarkPalette: Palette = {
  // Background
  backgroundPrimary: colors.gray900,
  backgroundSecondary: colors.gray800,
  backgroundTertiary: colors.gray700,
  backgroundInversePrimary: colors.gray200,
  backgroundInverseSecondary: colors.gray300,
  backgroundStateDisabled: colors.gray800,
  backgroundOverlayDark: hexToRgba(colors.black, '0.3'),
  backgroundOverlayLight: hexToRgba(colors.black, '0.08'),
  backgroundAccent: colors.blue400,
  backgroundNegative: colors.red500,
  backgroundWarning: colors.yellow500,
  backgroundPositive: colors.green400,
  backgroundLightAccent: colors.blue700,
  backgroundLightPositive: colors.green700,
  backgroundLightNegative: colors.red700,
  backgroundLightWarning: colors.yellow700,
  backgroundAlwaysDark: colors.gray900,
  backgroundAlwaysLight: colors.gray100,

  // Content
  contentPrimary: colors.gray200,
  contentSecondary: colors.gray400,
  contentTertiary: colors.gray500,
  contentInversePrimary: colors.gray900,
  contentInverseSecondary: colors.gray600,
  contentInverseTertiary: colors.gray500,
  contentStateDisabled: colors.gray600,
  contentAccent: colors.blue300,
  contentOnColor: colors.white,
  contentOnColorInverse: colors.black,
  contentNegative: colors.red300,
  contentWarning: colors.yellow300,
  contentPositive: colors.green300,

  // Border
  borderStateDisabled: colors.gray800,
  borderAccent: colors.blue400,
  borderAccentLight: colors.blue500,
  borderNegative: colors.red500,
  borderWarning: colors.yellow500,
  borderPositive: colors.green500,
  borderOpaque: colors.gray700,
  borderTransparent: hexToRgba(colors.gray200, '0.08'),
  borderSelected: colors.gray200,
  borderInverseOpaque: colors.gray400,
  borderInverseTransparent: hexToRgba(colors.gray900, '0.2'),
  borderInverseSelected: colors.gray900,
  border100Color: `hsla(0, 0%, 100%, 0.04)`,
  border200Color: `hsla(0, 0%, 100%, 0.08)`,
  border300Color: `hsla(0, 0%, 100%, 0.12)`,
  border400Color: `hsla(0, 0%, 100%, 0.16)`,
  border500Color: `hsla(0, 0%, 100%, 0.20)`,
  border600Color: `hsla(0, 0%, 100%, 0.24)`,

  // Links
  linkText: colors.white,
  linkVisited: colors.gray100,
  linkHover: colors.gray200,
  linkActive: colors.gray300,

  // Buttons
  buttonPrimaryFill: colors.white,
  buttonPrimaryText: colors.black,
  buttonPrimaryHover: colors.gray100,
  buttonPrimaryActive: colors.gray200,
  buttonPrimarySelectedText: colors.black,
  buttonPrimarySelectedFill: colors.gray200,
  buttonPrimarySpinnerForeground: colors.gray700,
  buttonPrimarySpinnerBackground: colors.gray300,

  buttonSecondaryFill: colors.gray700,
  buttonSecondaryText: colors.white,
  buttonSecondaryHover: colors.gray600,
  buttonSecondaryActive: colors.gray500,
  buttonSecondarySelectedText: colors.white,
  buttonSecondarySelectedFill: colors.gray500,
  buttonSecondarySpinnerForeground: colors.white,
  buttonSecondarySpinnerBackground: colors.gray400,

  buttonTertiaryFill: 'transparent',
  buttonTertiaryText: colors.white,
  buttonTertiaryHover: colors.gray700,
  buttonTertiaryActive: colors.gray600,
  buttonTertiarySelectedText: colors.white,
  buttonTertiarySelectedFill: colors.gray600,
  buttonTertiarySpinnerForeground: colors.gray50,
  buttonTertiarySpinnerBackground: colors.gray500,

  buttonMinimalFill: 'transparent',
  buttonMinimalText: colors.white,
  buttonMinimalHover: colors.gray700,
  buttonMinimalActive: colors.gray600,
  buttonMinimalSelectedText: colors.white,
  buttonMinimalSelectedFill: colors.gray600,
  buttonMinimalSpinnerForeground: colors.gray50,
  buttonMinimalSpinnerBackground: colors.gray500,

  buttonDisabledFill: colors.gray750,
  buttonDisabledText: colors.gray500,
  buttonDisabledSpinnerForeground: colors.gray400,
  buttonDisabledSpinnerBackground: colors.gray600,

  // Header
  headerBackground: hexToRgba(colors.gray900, '0.6') as string,
};

export const darkPalette = css({
  ...transformObjectKeysToCSSVars(rawDarkPalette),
});
