import React, { useState } from "react";
import PaginationAll from "@/app/components/PaginationAll";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/research/researchCard.module.css";
import ResearchCards from "@/app/cards/research/ResearchCards";
import Skeleton from "react-loading-skeleton";

function ResearchSkeleton() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(4);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    // const url = constructUrl(category, pageNumber, typeParam, authorsParam, yearsParam)
    // const options = constructOptions(category, pageNumber, typeParam, authorsParam, yearsParam)
    // dispatch(fetchPodcastList(options) as any);
    // router.push(url);
  };

  const arr = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: "Executive Summary",
      title2: "Executive Summary",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: "Introduction",
      title2: "Introduction",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: "Chapter 1",
      title2: "Global economic inequality insights",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: "Chapter 3",
      title2: "Global Carbon inequality",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: "Chapter 2",
      title2: "Rich Countries, poor Government",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: "Chapter 4",
      title2: "Global Health",
    },
  ];

  return (
  
      <div className="row pb-4">
        <div className="container">
          <div
            className={`row align-items-center justify-content-center mainHeader`}
          >
            <Skeleton width={300} />
          </div>
          <div className="container position-relative">
            <div id="exTab3" className="container pt-2">
              <ul
                className="nav nav-tabs mx-auto my-4"
                style={{ justifyContent: "center" }}
              >
                <li className="nav-item">
                  <button className={`nav-link`}>
                    <Skeleton width={180} />
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link`}>
                    <Skeleton width={180} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ResearchSkeleton;
