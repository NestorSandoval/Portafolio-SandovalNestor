import { useState } from "react";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <article
      className="flex flex-col gap-[calc(var(--size)/14)] mx-auto max-w-full p-[20px_10px]"
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        className={`relative flex overflow-hidden select-none gap-[calc(var(--size)/14)] w-full mask-horizontal ${
          direction === "vertical" ? "flex-col h-full mask-vertical" : ""
        } ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            aria-hidden={i > 0 ? "true" : undefined}
            className={`flex-shrink-0 flex items-center justify-around gap-[calc(var(--size)/14)] min-w-full animate-scrollX ${
              direction === "vertical"
                ? "flex-col min-h-full animate-scrollY"
                : ""
            }`}
          >
            {items.map((item, idx) => (
              <img
                key={`${i}-${idx}`}
                src={item.imgUrl}
                alt={item.altText}
                className={`bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video w-[var(--size)] p-[calc(var(--size)/10)] ${
                  direction === "vertical"
                    ? "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
                    : ""
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}

export default LogoWall;
