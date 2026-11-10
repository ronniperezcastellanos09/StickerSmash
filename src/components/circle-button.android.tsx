import { StyleSheet, View } from 'react-native';
import { Host, FloatingActionButton, Icon } from '@expo/ui/jetpack-compose';
import { clip, Shapes, size } from '@expo/ui/jetpack-compose/modifiers';

import { colors } from '@/constants/theme';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Host matchContents>
        <FloatingActionButton
          containerColor={colors.accent}
          onClick={onPress}
          modifiers={[size(84, 84), clip(Shapes.Circle)]}>
          <FloatingActionButton.Icon>
            <Icon source={require('@expo/material-symbols/add.xml')} size={38} tint={colors.onAccent} />
          </FloatingActionButton.Icon>
        </FloatingActionButton>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    marginHorizontal: 60,
  },
});
