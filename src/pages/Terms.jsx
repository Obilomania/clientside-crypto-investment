import React from "react";
import styled from "styled-components";
import MainLayout from "../components/layout/MainLayout";
import AboutImage from "../assets/about top.jpg";

const Terms = () => {
  return (
    <MainLayout>
      <TermCondition>
        <div className="about-landing">
          <div className="overlay"></div>
          <img src={AboutImage} alt="about page" />
          <div className="hero-content">
            <h1>
              TERMS <span>&</span> CONDITIONS
            </h1>
          </div>
        </div>
        <div className="term-writeUps">
          <h1 className="heading">GENERAL PROVISIONS</h1>
          <p>
            All visitors to the <span>Nova Vault Ventures</span> website
            (hereinafter referred to as the “User”, “You”) and operates this
            website (hereinafter referred to as the “Platform”, "
            <span>Nova Vault Ventures</span>", “We”) shall comply with the
            following terms & conditions (hereinafter referred to as the
            “Terms”). Your use of the Platform website, means you acknowledge
            and confirm your complete agreement with these Terms and agree to
            unconditionally comply with them throughout the entire period of
            use. The Platform website is governed and regulated by Australian
            Securities & Investments Commission,the current laws of the
            Australia, including the principle that access cannot be granted to
            persons under the age of eighteen (18). By accepting these terms,
            You confirm that You comply with our international standards
            regarding the age requirements, rules and restrictions of using the
            Platform. To gain access to the <span>Nova Vault Ventures</span>{" "}
            back office (hereinafter referred to as the “Back Office”) and to
            all features of the Platform, You need to register to create a
            personal account (hereinafter referred to as the “Account”). You
            confirm your acceptance of these Terms when You click the “Register”
            button after completing the registration form on the
            <span> Nova Vault Ventures </span>
            website. <span>Nova Vault Ventures</span> reserves the right to add,
            modify, in whole or in part, temporarily or permanently, these Terms
            at any time and for any reason without prior notice to Users. If You
            do not agree with these Terms or any subsequent amendments, changes
            or updates, You cannot use the Platform and must immediately exit
            this website. The Platform shall provide products and services
            (hereinafter referred to as the “Services”) in an appropriate
            manner, in an appropriate amount and in accordance with these Terms.
            The Platform’s liability is limited to the software and hardware
            required to provide the Services. In exchange for agreeing and fully
            complying with these Terms and other regulatory documents of the
            Platform, the Platform provides You with free use of all the
            functionality provided for by the Platform, documents housed on the
            Platform and all capabilities which the Back Office and the Services
            provide.
          </p>
          <br />
          <h1 className="heading">LIMITATION OF LIABILITY</h1>
          <p>
            You, as the User, shall agree that the Platform – its developers,
            employees, agents, partners, users or providers of additional
            services – is not responsible for any losses, costs, expenses,
            missed opportunities and non-commercial, material or other losses
            that may arise as a result of using information on the Platform’s
            website. In addition, the Platform is not responsible for the
            behavior of any <span> Nova Vault Ventures</span> User or for the
            behavior of any third-party partners. The Platform does not bear any
            responsibility nor obligations, does not cover any costs nor does it
            accept claims arising directly or indirectly due to inaccuracy of
            the information presented on the Platform’s website, in the Back
            Office and/or due to the User’s non-compliance of these Terms or
            other Platform regulatory documents.{" "}
            <span> Nova Vault Ventures </span> is not responsible for any
            inaccuracies, errors, delays or omissions of information, incorrect
            transmission or delivery of information, nor for any loss or damage
            resulting from a force majeure. <span> Nova Vault Ventures</span>{" "}
            does not provide its Users with trading recommendations, strategies,
            algorithms, etc., and the User has no right to request such
            information from the Platform. The Platform performs only the
            execution of the Users’ system requests and transactions. Under no
            circumstances should any information provided by the Platform, its
            official partners or employees, be considered financial, investment
            or other professional advice. Both the User and the Platform agree
            to notify the other party in writing of any lawsuits and/or disputes
            arising in connection with the operation of the{" "}
            <span> Nova Vault Ventures </span>
            website, the User Account or these Terms within thirty (30) days
            from the occurrence of such a situation, as well as agree to try to
            peacefully resolve such a situation first, through friendly
            correspondence, before filing a lawsuit in court or other authority.
          </p>{" "}
          <br />
          <h1 className="heading">THE USER’S RESPONSIBILITY</h1>
          <p>
            By becoming a Platform User, You agree that: You will not distribute
            spam using the <span> Nova Vault Ventures</span> name, nor use the
            <span> Nova Vault Ventures </span> website for any commercial
            purposes or activities aimed at personal profit which bypasses the
            general goals and benefits of the Platform Users; In no way will You
            interfere with the proper operation of the Platform by performing
            any actions that could adversely affect the operation or reputation
            of <span> Nova Vault Ventures</span> You are responsible for taking
            appropriate measures to ensure that you comply with all laws of your
            country of residence, including applicable tax laws; You agree to
            pay in full all amounts payable, including any additional costs
            established by the Platform; You are responsible, including
            recognizing a potential complete loss of funds, for any erroneous
            transactions, made inside or outside{" "}
            <span> Nova Vault Ventures</span>, due to your fault/inattention.
          </p>
          <br />
          <h1 className="heading">
            CAUSES AND CONDITIONS OF POTENTIAL ACCOUNT SUSPENSION
          </h1>
          <p>
            If evidence of violation of these Terms or incorrect behavior of the
            User is discovered, the User Account may be temporarily or fully
            suspended. The suspension period is up to sixty (60) days.
          </p>
          <br />
          <h1 className="heading">
            Nova Vault Ventures Account usage violations:
          </h1>
          <p>
            ️Account balance replenishment with illegally-obtained funds;
            ️Conducting transactions using illegally-obtained funds, or upon
            receipt of affiliate commissions from Users dealing with trafficking
            in funds; Attempts to mislead other Users or the Platform;
            Lawbreaking. ️Public defamation of the Platform or its Users;
            ️Intentional misrepresentation of the Platform’s Services, mission
            or functionality; ️Any attempt to interrupt the{" "}
            <span> Nova Vault Ventures </span>
            website operation using possible vulnerabilities; Hacking or hacking
            attempt to access <span> Nova Vault Ventures </span> Users’ Accounts;
            Spam mailing that damages the Platform’s reputation; Use and
            disclosure of confidential information about Platform Users;
            Aggressive behavior, rudeness, threats, or provocations against the
            Platform developers, employees or other Users.
          </p>
        </div>
      </TermCondition>
    </MainLayout>
  );
};

const TermCondition = styled.div`
  width: 100%;
  overflow: hidden;
  .about-landing {
    position: relative;
    height: 40vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 5;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 8;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 500;
      span {
        color: var(--primary);
      }
    }
  }
  .term-writeUps {
    padding: 2rem 10rem;
    text-align: justify;
    span {
      color: var(--primary);
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1200px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .term-writeUps {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 900px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .term-writeUps {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 600px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .term-writeUps {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 420px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .term-writeUps {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 350px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .term-writeUps {
      padding: 1rem;
      text-align: justify;
    }
  }
`;
export default Terms;
