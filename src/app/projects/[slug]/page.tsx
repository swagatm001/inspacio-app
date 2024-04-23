"use client";

import { ImageLeftCopyRight } from "@/components/ImageLeftCopyRight";
import { Modal } from "@/components/Modal";
import { projectsConstants } from "@/constants/projects";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const [imgIdx, setImgIdx] = useState<number | null>(null);
  const project = projectsConstants.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Not project found</div>;
  }

  const next = () => {
    if(typeof imgIdx === "number" && project.image?.[imgIdx + 1]){
      setImgIdx(imgIdx + 1)
    }
  }

  const prev = () => {
    if(typeof imgIdx === "number" && project.image?.[imgIdx - 1]){
      setImgIdx(imgIdx - 1)
    }
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
              className="object-cover"
            />
          </div>
        }
        rightTemplate={
          <div className="h-full py-6 lg:pl-6 flex flex-col">
            <p className="text-2xl lg:text-3xl mb-2">{project.title}</p>
            <div className="flex gap-2">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 13H14V11H16M16 17H14V15H16M10 5H8V3H10M10 9H8V7H10M10 13H8V11H10M10 17H8V15H10M4 9H2V7H4M4 13H2V11H4M4 17H2V15H4M12 9V3L9 0L6 3V5H0V19H18V9H12Z"
                  fill="#6C757D"
                />
              </svg>
              <p className="mb-8">{project.address}</p>
            </div>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {project.attributes.map((attr, i) => (
                <div
                  key={i}
                  className={clsx(
                    i !== project.attributes.length - 1
                      ? "border-r border-gray-200 pr-6"
                      : ""
                  )}
                >
                  <p className="text-gray-500 font-semibold">{attr.label}</p>
                  <p>{attr.value}</p>
                </div>
              ))}
            </div>
            <p>{project.description}</p>
          </div>
        }
        wrapperClassName="gap-6"
      />
      <div className="py-10">
        <div className="aspect-video relative mb-6">
          <Image src={project.image[0]} fill alt="" className="object-cover" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {project.image.map((img, i) => (
            <div className="h-44 lg:h-64 relative cursor-pointer" key={i}>
              <Image src={img} fill alt="" onClick={() => setImgIdx(i)} />
            </div>
          ))}
        </div>
      </div>
      <Modal open={typeof imgIdx === "number"} onClose={() => setImgIdx(null)}>
        <div className="relative aspect-square w-full h-full">
          <Image
            src={typeof imgIdx === "number" ? project.image[imgIdx] : ""}
            fill
            alt=""
            className="object-contain"
          />
          <div onClick={next} className="absolute bottom-4 left-1/2 bg-white w-8 h-8 rounded-r-full flex justify-center items-center active:bg-gray-200 duration-300 cursor-pointer">
            {">"}
          </div>
          <div onClick={prev} className="absolute bottom-4 right-1/2 bg-white w-8 h-8 rounded-l-full flex justify-center items-center active:bg-gray-200 duration-300 cursor-pointer">
            {"<"}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectPage;
