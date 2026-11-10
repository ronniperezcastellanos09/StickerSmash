/**
 * Identidad visual "Papel y tinta": papel cálido de fondo, tinta casi negra
 * para el texto y un vermellón de escritura como acento.
 *
 * Todos los componentes importan sus colores de este archivo para mantener
 * la identidad coherente en Android, iOS y web. Los contrastes cumplen WCAG AA.
 */
export const colors = {
  /** Fondo general de la app (papel). */
  background: '#F7F3EA',
  /** Tinta principal para textos e iconos (≈15:1 sobre papel). */
  ink: '#1C1B1A',
  /** Texto secundario sobre papel (≈5.3:1). */
  muted: '#6B6455',
  /** Acento vermellón para contenedores e iconos destacados (≈3.2:1 sobre papel). */
  accent: '#E4572E',
  /** Variante del acento apta para texto sobre papel (≈5.5:1). */
  accentText: '#B03A17',
  /** Texto e iconos sobre el acento (≈4.7:1). */
  onAccent: '#1C1B1A',
  /** Superficie de tarjetas y barras. */
  surface: '#FFFFFF',
  /** Bordes suaves sobre el papel. */
  border: '#E3DCCF',
} as const;
