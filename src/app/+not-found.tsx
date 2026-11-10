import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '¡Ups! Página no encontrada' }} />
      <View style={styles.container}>
        <Text style={styles.text}>Esta pantalla no existe.</Text>
        <Link href="/" style={styles.link}>
          Volver a la pantalla de inicio
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
