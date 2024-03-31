import { ImageLeftCopyRight } from "@/components/ImageLeftCopyRight";
import { projectsConstants } from "@/constants/projects";
import Image from "next/image";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projectsConstants.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Not project found</div>;
  }

  return (
    <div>
        <ImageLeftCopyRight
          leftTemplate={
            <div className="w-full h-[530px] lg:h-[720px] relative">
              <Image
                src={project?.thumbnail as string}
                fill
                alt={project?.slug as string}
              />
            </div>
          }
          rightTemplate={
            <div className="h-full py-6 lg:pl-6 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold mb-2">{project.title}</p>
                <p className="mb-8">{project.address}</p>
                <p>{project.description}</p>
              </div>
              <div className="flex justify-between">
                {project.attributes.map((attr, i) => (
                  <div key={i}>
                    <p className="font-semibold">{attr.label}</p>
                    <p>{attr.value}</p>
                  </div>
                ))}
              </div>
            </div>
          }
          wrapperClassName="gap-6"
        />
      <div className="py-10">
        <div className="aspect-video relative mb-6">
          <Image src={project.image[0]} fill alt="" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {project.image.map((img, i) => (
            <div className="h-44 lg:h-64 relative" key={i}>
              <Image src={img} fill alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
