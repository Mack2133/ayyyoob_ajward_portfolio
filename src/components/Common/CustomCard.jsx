// import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

// function CustomCard({ title1, description, title2, image, technologies, id }) {
//   return (
//     <>
//       <Card className="py-4">
//         <CardBody className="flex py-2 overflow-visible">
//           <Image
//             alt="Card background"
//             className="object-cover mx-auto rounded-xl h-[240px] flex-1 hover:rotate-2 hover:drop-shadow-lg transition-all duration-300 delay-150 "
//             src={image}
//           />
//         </CardBody>
//         <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
//           <h4 className="font-bold text-large">{title1}</h4>
//           <small className="text-default-500">{description}</small>
//           <p className="font-bold uppercase text-tiny">{title2}</p>
//           <div>
//             <div className="flex flex-wrap mt-2">
//               {technologies &&
//                 technologies.map((tech) => (
//                   <Chip key={id} color="primary" className="m-1">
//                     {tech}
//                   </Chip>
//                 ))}
//             </div>
//           </div>
//         </CardHeader>
//       </Card>
//     </>
//   );
// }


import { useState } from 'react';
import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react';
import { AiFillGithub } from 'react-icons/ai';

function CustomCard({ title1, description, title2, image, technologies, repoUrl }) {
  const [hover, setHover] = useState(false);

  const handleCardClick = () => {
    window.open(repoUrl, '_blank');
  };

  return (
    <>
      <Card className="py-4">
        <CardBody
          className="relative flex py-2 overflow-hidden transition-all duration-300 delay-150 hover:rotate-2 hover:drop-shadow-lg"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            alt="Card background"
            className="object-cover mx-auto rounded-xl h-[240px] flex-1 transition-all duration-300"
            src={image}
            
          />
          {hover && (
            <div
              className="absolute opacity-80 rounded-xl"
              style={{ zIndex: 10, backgroundImage: 'linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8))' }}
              
            />
          )}
          <div
          onClick={handleCardClick}
            className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 cursor-pointer hover:opacity-100"
            style={{ zIndex: 20 }}
          >
            <AiFillGithub className="text-3xl text-black bg-white rounded-full" />
          </div>
        </CardBody>
        <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
          <h4 className="font-bold text-large">{title1}</h4>
          <small className="text-default-500">{description}</small>
          <p className="font-bold uppercase text-tiny">{title2}</p>
          <div>
            <div className="flex flex-wrap mt-2">
              {technologies &&
                technologies.map((tech) => (
                  <Chip key={tech} color="primary" className="m-1">
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

