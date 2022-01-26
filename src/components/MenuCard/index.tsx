import { Container } from "./styles";

interface MenuCardProps {
  title: string;
  description: string;
  image: string;
  info: string
}

export default function MenuCard({ title, description, image, info }: MenuCardProps) {
  return (
    <Container>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>{info}</div>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </Container>
  );
}
