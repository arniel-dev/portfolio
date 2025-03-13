import { TagCloud } from "react-tagcloud";
import "../../styles/components/tag-cloud.scss";

const tags = [
  { value: "ReactJS", count: 25 },
  { value: "TypeScript", count: 22 },
  { value: "Node.js", count: 20 },
  { value: "Micro Frontend", count: 18 },
  { value: "AWS", count: 16 },
  { value: "CI/CD", count: 15 },
  { value: "Material UI", count: 14 },
  { value: "React Native", count: 12 },
];

const CustomTagCloud = () => (
  <TagCloud
    minSize={14}
    maxSize={35}
    tags={tags}
    className="tag-cloud"
    renderer={(tag, size) => (
      <span
        key={tag.value}
        className="tag-cloud__item"
        style={{ fontSize: `${size}px` }}
      >
        {tag.value}
      </span>
    )}
  />
);

export default CustomTagCloud;
