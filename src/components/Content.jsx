export default function Content({ content, isSub }) {
  if (isSub) {
    const contentMap = content.map((block) => {
      if (block.type === "paragraph")
        return block.children.map((child) => child.text)[0];
    });
    return contentMap;
  } else {
    return (
      <>
        {content.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p key={index}>
                {block.children.map((child, i) =>
                  child.text ? (
                    <span
                      key={i}
                      style={{ fontWeight: child.bold ? "bold" : "normal" }}
                    >
                      {child.text}
                    </span>
                  ) : (
                    <br />
                  )
                )}
              </p>
            );
          }

          if (block.type === "heading") {
            const size = {
              3: 1,
              2: 2,
              1: 3,
            };
            return (
              <h1
                className={`text-${size[block.level]}xl font-bold`}
                key={index}
              >
                {block.children.map((child, i) => (
                  <span key={i}>{child.text}</span>
                ))}
              </h1>
            );
          }

          if (block.type === "list") {
            const ListTag = block.format === "bulleted" ? "ul" : "ol";
            return (
              <ListTag key={index}>
                {block.children.map((item, i) => (
                  <li key={i}>{item.children[0].text}</li>
                ))}
              </ListTag>
            );
          }

          return null;
        })}
      </>
    );
  }
}
