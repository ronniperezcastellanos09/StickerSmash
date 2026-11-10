import { Pressable, StyleSheet, Text, type ImageSourcePropType } from 'react-native';
import { SymbolView, type AndroidSymbol, type SFSymbol } from 'expo-symbols';

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
    <Pressable style={styles.iconButton} onPress={onPress}>
      <SymbolView name={{ web: icon.web }} size={24} tintColor={colors.ink} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: colors.ink,
    marginTop: 12,
  },
});
