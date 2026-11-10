import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet, RNHostView } from '@expo/ui';

import { colors } from '@/constants/theme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <BottomSheet
      isPresented={isVisible}
      onDismiss={onClose}
      snapPoints={['half']}
      containerColor={colors.background}>
      <RNHostView>
        <View>
          <Text style={styles.title}>Elige un sticker</Text>
          {children}
        </View>
      </RNHostView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.ink,
    fontSize: 16,
    marginBottom: 20,
  },
});
