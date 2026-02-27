import { SocialImageOptions } from "./og"
import { getFontSpecificationName } from "./theme"

export const minimalImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,
  iconBase64,
}) => {
  const { colorScheme } = userOpts
  const colors = cfg.theme.colors[colorScheme]
  const headerFont = getFontSpecificationName(cfg.theme.typography.header)
  const bodyFont = getFontSpecificationName(cfg.theme.typography.body)
  const useSmallerFont = title.length > 32

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: colors.light,
        padding: "2.5rem",
        fontFamily: bodyFont,
      }}
    >
      {/* Title */}
      <div style={{ display: "flex", marginBottom: "1.5rem" }}>
        <h1
          style={{
            margin: 0,
            fontSize: useSmallerFont ? 64 : 72,
            fontFamily: headerFont,
            fontWeight: 700,
            color: colors.dark,
            lineHeight: 1.2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Description */}
      <div
        style={{
          display: "flex",
          flex: 1,
          fontSize: 36,
          color: colors.darkgray,
          lineHeight: 1.4,
        }}
      >
        <p
          style={{
            margin: 0,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>
      </div>

      {/* Footer: separator + icon + url */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "1.25rem",
          borderTop: `1px solid ${colors.lightgray}`,
        }}
      >
        {iconBase64 && (
          <img
            src={iconBase64}
            width={48}
            height={48}
            style={{ borderRadius: "50%" }}
          />
        )}
        <span
          style={{
            fontSize: 28,
            color: colors.gray,
            fontFamily: bodyFont,
          }}
        >
          {cfg.baseUrl}
        </span>
      </div>
    </div>
  )
}
