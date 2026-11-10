import { StyleSheet, View } from 'react-native';
import { Host, Button, Image } from '@expo/ui/swift-ui';
import { background, buttonStyle, frame, shapes } from '@expo/ui/swift-ui/modifiers';

import { colors } from '@/constants/theme';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Host matchContents>
        <Button onPress={onPress} modifiers={[buttonStyle('plain')]}>
          <Image
            systemName="plus"
            size={38}
            color={colors.onAccent}
            modifiers={[frame({ width: 84, height: 84 }), background(colors.accent, shapes.circle())]}
          />
        </Button>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    marginHorizontal: 60,
  },
});
