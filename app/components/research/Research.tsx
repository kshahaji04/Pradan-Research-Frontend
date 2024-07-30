"use client";
import React, { useState } from "react";
import OngoingResearch from "./OngoingResearch";
import ConcludedResearch from "./ConcludedResearch";
import whiteBanner from "@/public/assets/images/bg/whiteBannerDots.jpg";
import whitebg from "@/public/assets/images/bg/whitebg.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Research() {
  let searchParams = new URLSearchParams(window.location.search);
  const type = searchParams.get("type");
  const router = useRouter();
  const pageNo = searchParams.get("page");
  const [tab, setTab] = useState(type || "ongoing");
  const [pageChange, setCurrentPage] = useState(pageNo || 1);
  const handleTabChange = (e: any) => {
    router.push(`research/?page=1&type=${e}`);
    setTab(e);
    setCurrentPage(1);
  };
  return (
    <>
      <div className="row p-0">
        <div className="bgImageWrapper">
          <div
            className={`row align-items-center justify-content-center mainHeader`}
            style={{ zIndex: "2", position: "relative" }}
          >
            Pradan Research
          </div>
          <div
            className="container"
            style={{
              zIndex: "2",
              position: "relative",
              padding: "100px 0 200px",
            }}
          >
            <h2
              // className={`d-flex align-items-center justify-content-center`}
              style={{
                maxWidth: "600px",
                textAlign: "center",
                width: "100%",
                margin: "0 auto 18px",
              }}
            >
              Some of Our Best
              <span
                style={{
                  fontFamily: "Caveat, cursive",
                  fontOpticalSizing: "auto",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "48px",
                  color: "var(--primary)",
                }}
              >
                {" "} Squarespace {" "}
              </span>{" "}
              Website Examples
            </h2>
            <p
              style={{
                maxWidth: "600px",
                textAlign: "center",
                width: "100%",
                margin: "0 auto",
              }}
            >
              Browse a few of the 500+ websites we’ve built on Squarespace.
              These sites were built using our collaborative, live-design
              process, some in as little as one day!
            </p>
          </div>
          <figure>
            <Image
              width={1400}
              height={400}
              style={{
                objectFit: "contain",
                left: "0px",
                top: "-531.8px",
                width: "1683px",
                height: "1009.8px",
                position: "relative",
              }}
              src={whitebg}
              alt="bg"
            />
          </figure>
        </div>
        <div className="bgImageWrapper">
          <div
            className="container"
            style={{ zIndex: "2", position: "relative" }}
          >
            <div id="exTab3" className="container pt-2">
              <ul
                className="nav nav-tabs mx-auto my-4"
                style={{
                  justifyContent: "center",
                  borderBottomColor: "var(--primary)",
                }}
              >
                <li className="nav-item">
                  <button
                    className={`nav-link ${tab === "ongoing" ? "active" : ""}`}
                    onClick={() => handleTabChange("ongoing")}
                  >
                    Ongoing
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      tab === "concluded" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("concluded")}
                  >
                    Concluded
                  </button>
                </li>
              </ul>
              {tab === "ongoing" ? (
                <OngoingResearch pageNumber={pageChange} />
              ) : (
                <ConcludedResearch pageNumber={pageChange} />
              )}
            </div>
          </div>
          <figure>
            <Image width={1400} height={1400} src={whiteBanner} alt="bg" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Research;
