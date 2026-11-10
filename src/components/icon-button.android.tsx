import type { ImageSourcePropType } from 'react-native';
import { Host, TextButton, Column, Icon, Text } from '@expo/ui/jetpack-compose';
import type { AndroidSymbol, SFSymbol } from 'expo-symbols';

import { colors } from '@/constants/theme';

type Props = {
  icon: {
    android: ImageSourcePropType;
    ios: SFSymbol;
    web: AndroidSymbol;
  };
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Host matchContents>
      <TextButton onClick={onPress} colors={{ contentColor: colors.ink }}>
        <Column horizontalAlignment="center" verticalArrangement={{ spacedBy: 12 }}>
          <Icon source={icon.android} size={24} tint={colors.ink} />
          <Text color={colors.ink}>{label}</Text>
        </Column>
      </TextButton>
    </Host>
  );
}
