import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import { colors } from '@/constants/theme';

const PlaceholderImage = require('@/assets/images/placeholder.png');

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Elegir foto"
          onPress={() => alert('Presionaste un botón.')}
        />
        <Button label="Usar esta foto" onPress={() => alert('Presionaste un botón.')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 96, default: 20 }),
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
