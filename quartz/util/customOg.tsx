import { SocialImageOptions } from "./og"
import { getFontSpecificationName } from "./theme"

export const minimalImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,
  fileData,
  iconBase64,
}) => {
  const { colorScheme } = userOpts
  const colors = cfg.theme.colors[colorScheme]
  const headerFont = getFontSpecificationName(cfg.theme.typography.header)
  const bodyFont = getFontSpecificationName(cfg.theme.typography.body)
  const useSmallerFont = title.length > 32

  const pageUrl = `${cfg.baseUrl}/${fileData.slug ?? ""}`

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
      {/* Header: icon + site url */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {iconBase64 && (
          <img
            src={iconBase64}
            width={56}
            height={56}
            style={{ borderRadius: "50%" }}
          />
        )}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: colors.gray,
            fontFamily: bodyFont,
          }}
        >
          {cfg.baseUrl}
        </div>
      </div>

      {/* Title */}
      <div style={{ display: "flex", marginTop: "1rem", marginBottom: "1.5rem" }}>
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

      {/* Footer: separator + page url */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "1.25rem",
          borderTop: `1px solid ${colors.lightgray}`,
        }}
      >
        <span
          style={{
            fontSize: 24,
            color: colors.gray,
            fontFamily: bodyFont,
          }}
        >
          {pageUrl}
        </span>
      </div>
    </div>
  )
}
