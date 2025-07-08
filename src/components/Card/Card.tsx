interface Url {
  url: string;
  alt?: string;
}

export default function Card({ url, alt }: Url) {
  return (
    <div>
      <img src={url} alt={alt} style = {{width: "200px"}}/>
    </div>
  );
}
