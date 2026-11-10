import { NativeTabs } from 'expo-router/native-tabs';

import { colors } from '@/constants/theme';

export default function TabLayout() {
  return (
    <NativeTabs
      tintColor={colors.accent}
      backgroundColor={colors.background}
      indicatorColor={colors.accent}
      rippleColor={colors.border}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Inicio</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md="home"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Label>Acerca de</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'info.circle', selected: 'info.circle.fill' }}
          md="info"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
