import React from "react";
import styled from "styled-components";
import { Layout} from 'antd';
import { Row, Col } from 'antd';

import { BsGithub } from "react-icons/bs"
import { GrDocker } from "react-icons/gr"
import { FaResearchgate } from "react-icons/fa"
import { ImNewspaper } from "react-icons/im"
import { MdOutlinePrivacyTip } from "react-icons/md"
import { GoBook } from "react-icons/go"

const { Footer } = Layout;

const FirstBlock = styled.div`
  color: white;
  position: relative;
  top:-10px;
`;

const FooterStyle =styled(Footer)`
  background: #343a40;
  position: fixed;
  opacity:0.6;
  left: 0;
  bottom: 0;
  height: 4%;
  width: 100%;
`;

const ImageStyle = styled.div`
position: relative;
top:-25px;
  img{
    width: 4%;
    height: 4%;
    margin:20px;
  }
`;

const IconStyleBlock = styled.div`
position: relative;
top:-15px;
`;

const IconStyle = {
    width: "5%",
    height: "5%",
    margin: "5px",
    color: "white",
}

export class Foot extends React.Component {
  public render() {
    return (
      <FooterStyle>  
      <Row>
        <Col md={11} > 
          <FirstBlock>
            2020 <a href="https://www.grycap.upv.es/" target="_blank" rel="noreferrer">GRyCAP</a><br/>
          </FirstBlock>
        </Col>
        <Col md={8}>
          <ImageStyle>
              <a href="https://ai-sprint-project.eu/" target="_blank" rel="noreferrer"><img src="https://appsgrycap.i3m.upv.es:31443/im-dashboard/static/images/ai-sprint_logo.png" alt="ai-sprint"/></a>
          </ImageStyle>   
        </Col>
        <Col md={5}>
          <IconStyleBlock>
            <a href="https://github.com/grycap/" target="_blank" rel="noreferrer" title="Github"> <BsGithub style={IconStyle}/> </a>
            <a href="https://hub.docker.com/orgs/grycap" target="_blank" rel="noreferrer" title="DockerHub"> <GrDocker style={IconStyle}/> </a>
            <a href="https://www.researchgate.net/lab/GRyCAP-Ignacio-Blanquer" target="_blank" rel="noreferrer" title="ResearchGate"> <FaResearchgate style={IconStyle}/> </a>
            <a href="https://docs.oscar.grycap.net/" target="_blank" rel="noreferrer" title="Documentation"> <GoBook style={IconStyle}/></a>
            <a href="https://docs.oscar.grycap.net/license/" target="_blank" rel="noreferrer" title="OSCAR Licence"> <ImNewspaper style={IconStyle}/></a>
            <a href="https://github.com/grycap/fdl-composer/blob/main/LICENSE" target="_blank" rel="noreferrer" title="FDL-Composer Licence"> <MdOutlinePrivacyTip style={IconStyle}/></a>
          </IconStyleBlock>
        </Col>
      </Row>
    </FooterStyle>
    );
  }
}