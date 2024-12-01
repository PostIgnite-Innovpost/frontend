import React from 'react';
import Svg from "../../../assets/img/dashboards/AlgeriePoste.svg 1.svg";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../../components/Container";
// import { SvgIcon } from "../../../components/SvgIcon";
import { Button } from "../../../components/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const user = useSelector((state: RootState) => state.user.userId);
  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
        >
          <Span>
            <NavLink to={user ? "/dashboard/home" : "/auth/login"}>
              <Button>{t("Get Started")}</Button>
            </NavLink>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/dashboard/home" aria-label="homepage">
            {/* <SvgIcon src="logo.svg" width="200px" height="80px" /> */}
            <Image src={Svg} maxH={50} />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>e
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
