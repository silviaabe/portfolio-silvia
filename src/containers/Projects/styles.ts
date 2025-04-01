import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding-bottom: 100px;
  position: relative;
  transition: opacity 0.5s ease-in-out;
`

export const ProjectsTitle = styled.h2`
  color: #ffd700;
  font-size: 35px;
  margin-bottom: 25px;
  text-align: center;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const GridItem = styled.div`
  background-color: #fff;
  color: #503A8F;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  h3 {
    margin-bottom: 8px;;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`

export const ProjectsImg = styled.img`
  height: 270px;
  object-fit: cover;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 2px rgba(80, 58, 143, 0.6);
`

export const ProjectsDescription = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: 480px) {
    display: block;
  }
`

export const ProjectsButtons = styled.div`
  @media (max-width: 480px) {
    display: flex;
    justify-content: left;
    gap: 8px;
  }
`

export const ProjectsButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffd700;
  color: #503A8F;
  margin-right: 5px;
  text-align: center;
  text-decoration: none;
  border: none;
  font-size: 12px;
  border-radius: 26px;
  border: 1px solid #ffd700;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #503A8F;
    border: 1px solid #503A8F;
  }
`

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 480px) {
    justify-content: left;
    margin-left: 4px;
    margin-top: 12px;
  }

  .tag-icon {
    font-size: 25px;
    transition: transform 0.5s ease;
  }

  .tag-icon:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`