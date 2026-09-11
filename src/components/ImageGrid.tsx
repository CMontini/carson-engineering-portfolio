type ImageItem = { src: string; alt: string; caption: string };
export default function ImageGrid({ items, columns = 2 }: { items: ImageItem[]; columns?: 2 | 3 }) {
  return (
    <div className={`image-grid image-grid-${columns}`}>
      {items.map((item) => (
        <figure className="image-card" key={item.src}>
          <div className="image-frame"><img src={item.src} alt={item.alt} /></div>
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
