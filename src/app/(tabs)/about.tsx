import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/theme';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <View style={styles.monogram}>
          <Text style={styles.monogramText}>R</Text>
        </View>
        <Text style={styles.name}>Ronni Alejandro Pérez Castellanos</Text>
        <Text style={styles.tagline}>Estudiante · Práctica evaluada de Expo</Text>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Correo</Text>
          <Text style={styles.rowValue}>ronniperezcastellanos09@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>GitHub</Text>
          <Text style={styles.rowValue}>@ronniperezcastellanos09</Text>
        </View>
      </View>

      <Text style={styles.footer}>
        StickerSmash · App universal construida con el tutorial oficial de Expo
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingTop: Platform.select({ web: 96, default: 24 }),
    gap: 24,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    shadowColor: colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  monogram: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monogramText: {
    color: colors.onAccent,
    fontSize: 32,
    fontWeight: '700',
  },
  name: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  tagline: {
    color: colors.muted,
    fontSize: 14,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 4,
  },
  row: {
    width: '100%',
    gap: 2,
  },
  rowLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  rowValue: {
    color: colors.ink,
    fontSize: 15,
  },
  footer: {
    color: colors.muted,
    fontSize: 13,
    textAlign: 'center',
  },
});
