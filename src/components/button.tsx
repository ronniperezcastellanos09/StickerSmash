import { StyleSheet, View, Pressable, Text } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { colors } from '@/constants/theme';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.primaryButton]} onPress={onPress}>
          <SymbolView
            name={{ ios: 'photo', android: 'image', web: 'image' }}
            size={18}
            tintColor={colors.onAccent}
          />
          <Text style={[styles.buttonLabel, { color: colors.onAccent }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  primaryButton: {
    backgroundColor: colors.accent,
  },
  buttonLabel: {
    color: colors.ink,
    fontSize: 16,
  },
});
