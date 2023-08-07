import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./comp.css";
import woodsy from "../images/woodsy.png";
import spacedOut from "../images/A4 - 1.png";
import immersiveBionic from "../images/Desktop - 1.png";
import purebet from "../images/Purebet.png";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="projects-wrapper">
        <h1 className="font-b">Projects!</h1>
        <div className="project-items">
          <div className="project-item">
            <img
              src={immersiveBionic}
              alt="project thumbil"
              className="item1"
            />
            <div className="project-links">
              <div className="more-info font">
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5234 0C5.16958 0 0 5.38314 0 12C0 18.6169 5.16958 24 11.5234 24C17.8769 24 23.0462 18.6169 23.0467 12C23.0467 5.38314 17.8774 0 11.5234 0ZM11.5234 22.4159C6.00798 22.4159 1.52114 17.7433 1.52114 12C1.52114 6.25675 6.00798 1.58405 11.5234 1.58405C17.0387 1.58405 21.5256 6.25675 21.5256 12C21.5251 17.7433 17.0382 22.4159 11.5234 22.4159Z"
                    fill="black"
                  />
                  <path
                    d="M11.5235 4.9502C10.875 4.9502 10.3474 5.49986 10.3474 6.17493C10.3472 6.50204 10.4694 6.80961 10.6914 7.04088C10.9135 7.27215 11.2091 7.39967 11.5235 7.39967C12.172 7.39967 12.6996 6.85027 12.6996 6.17493C12.6996 5.4996 12.172 4.9502 11.5235 4.9502Z"
                    fill="black"
                  />
                  <path
                    d="M11.5233 9.40967C10.976 9.40967 10.5305 9.87353 10.5305 10.4435V18.2727C10.5305 18.8424 10.976 19.3058 11.5233 19.3058C12.0702 19.3058 12.5156 18.8424 12.5159 18.2727V10.4435C12.5159 9.87353 12.0707 9.40967 11.5233 9.40967Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="visit-project font">
                Visit Project
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5605 13.753C17.5605 13.0829 17.8203 12.5396 18.4567 12.5396C19.0932 12.5396 19.225 13.0829 19.225 13.753V21.0336C19.225 23.044 18.0613 23.9997 16.1521 23.9997H3.47638C1.56713 23.9997 0.787598 23.044 0.787598 21.0335L1.04367 7.68599C1.04367 5.67552 1.56713 4.4502 3.47638 4.4502H10.2624C10.8988 4.4502 11.5427 4.58892 11.5427 5.25907C11.5427 5.92922 11.0268 6.06809 10.3904 6.06809H3.47638C2.83996 6.06809 2.58012 7.01583 2.58012 7.68599L2.45208 21.0335C2.45208 21.7037 2.83996 22.247 3.47638 22.247H16.1521C16.7885 22.247 17.5605 21.7037 17.5605 21.0335V13.753Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2976 1.48307H16.1518C15.5154 1.48307 14.9995 1.4791 14.9995 0.808947C14.9995 0.138793 15.5154 0 16.1518 0H23.0659C23.7023 0 23.8341 0.138793 23.8341 0.808947V8.08947C23.8341 8.75963 23.7023 9.30289 23.0659 9.30289C22.4294 9.30289 22.2976 8.75963 22.2976 8.08947V1.48307Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4707 15.5377C10.0207 16.0116 9.22516 16.077 9.0157 15.8564C8.80623 15.6358 8.74033 14.933 9.19034 14.4591L21.93 1.04405C22.3801 0.570182 22.871 0.318864 23.321 0.792735C23.771 1.2666 23.5324 1.78362 23.0824 2.25749L10.4707 15.5377Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="project-item">
            <img
              src={spacedOut}
              alt="project thumbil"
              className="project-item item2"
            />
            <div className="project-links">
              <div className="more-info font">
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5234 0C5.16958 0 0 5.38314 0 12C0 18.6169 5.16958 24 11.5234 24C17.8769 24 23.0462 18.6169 23.0467 12C23.0467 5.38314 17.8774 0 11.5234 0ZM11.5234 22.4159C6.00798 22.4159 1.52114 17.7433 1.52114 12C1.52114 6.25675 6.00798 1.58405 11.5234 1.58405C17.0387 1.58405 21.5256 6.25675 21.5256 12C21.5251 17.7433 17.0382 22.4159 11.5234 22.4159Z"
                    fill="black"
                  />
                  <path
                    d="M11.5235 4.9502C10.875 4.9502 10.3474 5.49986 10.3474 6.17493C10.3472 6.50204 10.4694 6.80961 10.6914 7.04088C10.9135 7.27215 11.2091 7.39967 11.5235 7.39967C12.172 7.39967 12.6996 6.85027 12.6996 6.17493C12.6996 5.4996 12.172 4.9502 11.5235 4.9502Z"
                    fill="black"
                  />
                  <path
                    d="M11.5233 9.40967C10.976 9.40967 10.5305 9.87353 10.5305 10.4435V18.2727C10.5305 18.8424 10.976 19.3058 11.5233 19.3058C12.0702 19.3058 12.5156 18.8424 12.5159 18.2727V10.4435C12.5159 9.87353 12.0707 9.40967 11.5233 9.40967Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="visit-project font">
                Visit Project
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5605 13.753C17.5605 13.0829 17.8203 12.5396 18.4567 12.5396C19.0932 12.5396 19.225 13.0829 19.225 13.753V21.0336C19.225 23.044 18.0613 23.9997 16.1521 23.9997H3.47638C1.56713 23.9997 0.787598 23.044 0.787598 21.0335L1.04367 7.68599C1.04367 5.67552 1.56713 4.4502 3.47638 4.4502H10.2624C10.8988 4.4502 11.5427 4.58892 11.5427 5.25907C11.5427 5.92922 11.0268 6.06809 10.3904 6.06809H3.47638C2.83996 6.06809 2.58012 7.01583 2.58012 7.68599L2.45208 21.0335C2.45208 21.7037 2.83996 22.247 3.47638 22.247H16.1521C16.7885 22.247 17.5605 21.7037 17.5605 21.0335V13.753Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2976 1.48307H16.1518C15.5154 1.48307 14.9995 1.4791 14.9995 0.808947C14.9995 0.138793 15.5154 0 16.1518 0H23.0659C23.7023 0 23.8341 0.138793 23.8341 0.808947V8.08947C23.8341 8.75963 23.7023 9.30289 23.0659 9.30289C22.4294 9.30289 22.2976 8.75963 22.2976 8.08947V1.48307Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4707 15.5377C10.0207 16.0116 9.22516 16.077 9.0157 15.8564C8.80623 15.6358 8.74033 14.933 9.19034 14.4591L21.93 1.04405C22.3801 0.570182 22.871 0.318864 23.321 0.792735C23.771 1.2666 23.5324 1.78362 23.0824 2.25749L10.4707 15.5377Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="project-item">
            <img
              src={purebet}
              alt="project thumbil"
              className="project-item item3"
            />
            <div className="project-links">
              <div className="more-info font">
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5234 0C5.16958 0 0 5.38314 0 12C0 18.6169 5.16958 24 11.5234 24C17.8769 24 23.0462 18.6169 23.0467 12C23.0467 5.38314 17.8774 0 11.5234 0ZM11.5234 22.4159C6.00798 22.4159 1.52114 17.7433 1.52114 12C1.52114 6.25675 6.00798 1.58405 11.5234 1.58405C17.0387 1.58405 21.5256 6.25675 21.5256 12C21.5251 17.7433 17.0382 22.4159 11.5234 22.4159Z"
                    fill="black"
                  />
                  <path
                    d="M11.5235 4.9502C10.875 4.9502 10.3474 5.49986 10.3474 6.17493C10.3472 6.50204 10.4694 6.80961 10.6914 7.04088C10.9135 7.27215 11.2091 7.39967 11.5235 7.39967C12.172 7.39967 12.6996 6.85027 12.6996 6.17493C12.6996 5.4996 12.172 4.9502 11.5235 4.9502Z"
                    fill="black"
                  />
                  <path
                    d="M11.5233 9.40967C10.976 9.40967 10.5305 9.87353 10.5305 10.4435V18.2727C10.5305 18.8424 10.976 19.3058 11.5233 19.3058C12.0702 19.3058 12.5156 18.8424 12.5159 18.2727V10.4435C12.5159 9.87353 12.0707 9.40967 11.5233 9.40967Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="visit-project font">
                Visit Project
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5605 13.753C17.5605 13.0829 17.8203 12.5396 18.4567 12.5396C19.0932 12.5396 19.225 13.0829 19.225 13.753V21.0336C19.225 23.044 18.0613 23.9997 16.1521 23.9997H3.47638C1.56713 23.9997 0.787598 23.044 0.787598 21.0335L1.04367 7.68599C1.04367 5.67552 1.56713 4.4502 3.47638 4.4502H10.2624C10.8988 4.4502 11.5427 4.58892 11.5427 5.25907C11.5427 5.92922 11.0268 6.06809 10.3904 6.06809H3.47638C2.83996 6.06809 2.58012 7.01583 2.58012 7.68599L2.45208 21.0335C2.45208 21.7037 2.83996 22.247 3.47638 22.247H16.1521C16.7885 22.247 17.5605 21.7037 17.5605 21.0335V13.753Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2976 1.48307H16.1518C15.5154 1.48307 14.9995 1.4791 14.9995 0.808947C14.9995 0.138793 15.5154 0 16.1518 0H23.0659C23.7023 0 23.8341 0.138793 23.8341 0.808947V8.08947C23.8341 8.75963 23.7023 9.30289 23.0659 9.30289C22.4294 9.30289 22.2976 8.75963 22.2976 8.08947V1.48307Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4707 15.5377C10.0207 16.0116 9.22516 16.077 9.0157 15.8564C8.80623 15.6358 8.74033 14.933 9.19034 14.4591L21.93 1.04405C22.3801 0.570182 22.871 0.318864 23.321 0.792735C23.771 1.2666 23.5324 1.78362 23.0824 2.25749L10.4707 15.5377Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="project-item">
            <img
              src={woodsy}
              alt="project thumbil"
              className="project-item item4"
            />
            <div className="project-links">
              <div className="more-info font">
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5234 0C5.16958 0 0 5.38314 0 12C0 18.6169 5.16958 24 11.5234 24C17.8769 24 23.0462 18.6169 23.0467 12C23.0467 5.38314 17.8774 0 11.5234 0ZM11.5234 22.4159C6.00798 22.4159 1.52114 17.7433 1.52114 12C1.52114 6.25675 6.00798 1.58405 11.5234 1.58405C17.0387 1.58405 21.5256 6.25675 21.5256 12C21.5251 17.7433 17.0382 22.4159 11.5234 22.4159Z"
                    fill="black"
                  />
                  <path
                    d="M11.5235 4.9502C10.875 4.9502 10.3474 5.49986 10.3474 6.17493C10.3472 6.50204 10.4694 6.80961 10.6914 7.04088C10.9135 7.27215 11.2091 7.39967 11.5235 7.39967C12.172 7.39967 12.6996 6.85027 12.6996 6.17493C12.6996 5.4996 12.172 4.9502 11.5235 4.9502Z"
                    fill="black"
                  />
                  <path
                    d="M11.5233 9.40967C10.976 9.40967 10.5305 9.87353 10.5305 10.4435V18.2727C10.5305 18.8424 10.976 19.3058 11.5233 19.3058C12.0702 19.3058 12.5156 18.8424 12.5159 18.2727V10.4435C12.5159 9.87353 12.0707 9.40967 11.5233 9.40967Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="visit-project font">
                Visit Project
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5605 13.753C17.5605 13.0829 17.8203 12.5396 18.4567 12.5396C19.0932 12.5396 19.225 13.0829 19.225 13.753V21.0336C19.225 23.044 18.0613 23.9997 16.1521 23.9997H3.47638C1.56713 23.9997 0.787598 23.044 0.787598 21.0335L1.04367 7.68599C1.04367 5.67552 1.56713 4.4502 3.47638 4.4502H10.2624C10.8988 4.4502 11.5427 4.58892 11.5427 5.25907C11.5427 5.92922 11.0268 6.06809 10.3904 6.06809H3.47638C2.83996 6.06809 2.58012 7.01583 2.58012 7.68599L2.45208 21.0335C2.45208 21.7037 2.83996 22.247 3.47638 22.247H16.1521C16.7885 22.247 17.5605 21.7037 17.5605 21.0335V13.753Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2976 1.48307H16.1518C15.5154 1.48307 14.9995 1.4791 14.9995 0.808947C14.9995 0.138793 15.5154 0 16.1518 0H23.0659C23.7023 0 23.8341 0.138793 23.8341 0.808947V8.08947C23.8341 8.75963 23.7023 9.30289 23.0659 9.30289C22.4294 9.30289 22.2976 8.75963 22.2976 8.08947V1.48307Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4707 15.5377C10.0207 16.0116 9.22516 16.077 9.0157 15.8564C8.80623 15.6358 8.74033 14.933 9.19034 14.4591L21.93 1.04405C22.3801 0.570182 22.871 0.318864 23.321 0.792735C23.771 1.2666 23.5324 1.78362 23.0824 2.25749L10.4707 15.5377Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
