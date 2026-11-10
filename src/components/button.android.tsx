import { StyleSheet, View } from 'react-native';
import { Host, Button as ComposeButton, TextButton, Icon, Row, Text } from '@expo/ui/jetpack-compose';

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
        <Host matchContents>
          <ComposeButton
            onClick={onPress}
            colors={{ containerColor: colors.accent, contentColor: colors.onAccent }}>
            <Row verticalAlignment="center" horizontalArrangement={{ spacedBy: 8 }}>
              <Icon source={require('@expo/material-symbols/image.xml')} size={18} tint={colors.onAccent} />
              <Text color={colors.onAccent}>{label}</Text>
            </Row>
          </ComposeButton>
        </Host>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Host matchContents>
        <TextButton onClick={onPress} colors={{ contentColor: colors.ink }}>
          <Text color={colors.ink}>{label}</Text>
        </TextButton>
      </Host>
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
});
