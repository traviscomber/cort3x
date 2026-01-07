// This prevents the "dynamic Tailwind classes don't work in production" issue
// by using inline styles instead of dynamically generated class names

type ColorTheme = "blue" | "green" | "red" | "purple" | "amber" | "pink" | "cyan" | "slate"

// Safe color maps - these are evaluated at build time, not runtime
const colorMaps: Record<ColorTheme, Record<string, string>> = {
  blue: {
    bg: "rgb(219 234 254)", // bg-blue-100
    border: "rgb(59 130 246)", // border-blue-500
    text: "rgb(30 58 138)", // text-blue-900
    light: "rgb(191 219 254)", // text-blue-300
  },
  green: {
    bg: "rgb(220 252 231)", // bg-green-100
    border: "rgb(34 197 94)", // border-green-500
    text: "rgb(20 83 45)", // text-green-900
    light: "rgb(134 239 172)", // text-green-400
  },
  red: {
    bg: "rgb(254 226 226)", // bg-red-100
    border: "rgb(239 68 68)", // border-red-500
    text: "rgb(127 29 29)", // text-red-900
    light: "rgb(252 165 165)", // text-red-300
  },
  purple: {
    bg: "rgb(243 232 255)", // bg-purple-100
    border: "rgb(168 85 247)", // border-purple-500
    text: "rgb(88 28 135)", // text-purple-900
    light: "rgb(216 180 254)", // text-purple-300
  },
  amber: {
    bg: "rgb(254 252 232)", // bg-amber-100
    border: "rgb(245 158 11)", // border-amber-500
    text: "rgb(120 53 15)", // text-amber-900
    light: "rgb(252 191 73)", // text-amber-400
  },
  pink: {
    bg: "rgb(252 231 243)", // bg-pink-100
    border: "rgb(236 72 153)", // border-pink-500
    text: "rgb(131 24 67)", // text-pink-900
    light: "rgb(249 168 212)", // text-pink-300
  },
  cyan: {
    bg: "rgb(207 250 254)", // bg-cyan-100
    border: "rgb(34 211 238)", // border-cyan-500
    text: "rgb(21 94 109)", // text-cyan-900
    light: "rgb(165 243 252)", // text-cyan-300
  },
  slate: {
    bg: "rgb(241 245 249)", // bg-slate-100
    border: "rgb(100 116 139)", // border-slate-500
    text: "rgb(30 41 59)", // text-slate-900
    light: "rgb(203 213 225)", // text-slate-300
  },
}

/**
 * Get safe inline styles for a color theme
 * Use this instead of dynamic Tailwind classes that break in production
 */
export function getColorStyles(theme: ColorTheme) {
  const colors = colorMaps[theme]
  return {
    background: colors.bg,
    border: colors.border,
    text: colors.text,
    lightText: colors.light,
  }
}

/**
 * Get inline style object for backgrounds
 */
export function getColorBackgroundStyle(theme: ColorTheme) {
  return { backgroundColor: colorMaps[theme].bg }
}

/**
 * Get inline style object for borders
 */
export function getColorBorderStyle(theme: ColorTheme) {
  return { borderColor: colorMaps[theme].border }
}

/**
 * Get inline style object for text
 */
export function getColorTextStyle(theme: ColorTheme) {
  return { color: colorMaps[theme].text }
}

/**
 * Map common status values to color themes
 */
export function getStatusColor(status: string | undefined | null): ColorTheme {
  if (!status) return "slate"

  const normalized = status.toLowerCase()
  if (normalized.includes("publish") || normalized.includes("completed") || normalized.includes("success"))
    return "green"
  if (normalized.includes("draft") || normalized.includes("pending")) return "amber"
  if (normalized.includes("error") || normalized.includes("failed") || normalized.includes("archived")) return "red"
  if (normalized.includes("progress") || normalized.includes("active")) return "blue"

  return "slate"
}

/**
 * Get gradient style using CSS variables (works in production)
 */
export function getGradientStyle(fromTheme: ColorTheme, toTheme: ColorTheme = "slate") {
  const fromColor = colorMaps[fromTheme].border
  const toColor = colorMaps[toTheme].border
  return {
    backgroundImage: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
  }
}
