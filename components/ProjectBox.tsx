import { IProjectBoxProps } from "@/model";
import Link from "next/link";
import React from "react";

const ProjectBox = ({ goto, desc }: IProjectBoxProps) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center shadow p-3 rounded my-3 text-capitalize">
        <h2>{desc}</h2>
        <Link href={goto}>
          <button className="btn btn-primary">See Demo</button>
        </Link>
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default ProjectBox;
