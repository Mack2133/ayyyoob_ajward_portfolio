import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

function CustomCard({ title1, description, title2, image, technologies, id }) {
  return (
    <>
      <Card className="py-4">
        <CardBody className="flex py-2 overflow-visible">
          <Image
            alt="Card background"
            className="object-cover mx-auto rounded-xl h-[240px] flex-1"
            src={image}
          />
        </CardBody>
        <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
          <h4 className="font-bold text-large">{title1}</h4>
          <small className="text-default-500">{description}</small>
          <p className="font-bold uppercase text-tiny">{title2}</p>
          <div>
            <div className="flex flex-wrap mt-2">
              {technologies &&
                technologies.map((tech) => (
                  <Chip key={id} color="primary" className="m-1">
                    {tech}
                  </Chip>
                ))}
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}

export default CustomCard;
