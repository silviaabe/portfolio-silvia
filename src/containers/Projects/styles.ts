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

  h3 {
    margin-bottom: 8px;;
  }
`

export const ProjectsImg = styled.img`
  height: 270px;
  object-fit: cover;
  width: 100%;
  border: 2px solid #503A8F;
  border-radius: 5px;
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