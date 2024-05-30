"use client";

import * as S from "./styles";
import Card from "../card";
import * as v from "@/app/lib/variable/variables";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Projects = () => {
  const projects = v.projectGit;

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <S.Section id='projetos' className="mx-width">
        <S.Container>
          <S.Title>Projetos</S.Title>
        </S.Container>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Link key={index} href={project.link} target="blank">
              <Card
                languages={project.languages}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </Link>
          ))}
        </Slider>
      </S.Section>
  );
};

export default Projects;
