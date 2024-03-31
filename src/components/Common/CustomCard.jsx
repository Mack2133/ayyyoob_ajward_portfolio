import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


function CustomCard() {
  return (
    <>
         <Card className="py-4">
            <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
              <p className="font-bold uppercase text-tiny">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="py-2 overflow-visible">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1060&t=st=1711897661~exp=1711898261~hmac=923d7ed43d275696a4bbcf8f4e7908c921dc65c5d9ea8d6e5640c06289725a4d"
                width={270}
              />
            </CardBody>
          </Card>
    </>
  );
}

export default CustomCard;
