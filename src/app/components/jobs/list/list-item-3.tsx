"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import verify from "@/assets/images/icon/icon_51.svg";
import { IJobType } from "@/types/job-data-type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_to_wishlist } from "@/redux/features/wishlist";

const ListItemThree = ({ item }: { item: IJobType }) => {
  const { id, duration, salary, salary_duration, location, experience, title } =
    item || {};
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const isActive = wishlist.some((p) => p.id === id);
  const dispatch = useAppDispatch();

  // handle add wishlist
  const handleAddWishlist = (item: IJobType) => {
    dispatch(add_to_wishlist(item));
  };

  return (
    <div className="job-list-three d-flex h-100 w-100">
      <div className="main-wrapper h-100 w-100">
        <div className="list-header">
          <div className="info-wrapper">
            <Link href={`/job-details-v1/${id}`} className="title fw-500">
              {title}
            </Link>
            <ul className="info-data d-flex style-none">
              <li>Salary : ${salary}</li>
              <li>{experience}</li>
              <li>{location}</li>
            </ul>
          </div>
          <button
            onClick={() => handleAddWishlist(item)}
            className={`save-btn text-center rounded-circle tran3s ${
              isActive ? "active" : ""
            }`}
            title="Save Job"
          >
            <i className="bi bi-bookmark-dash"></i>
          </button>
        </div>
        <div className="d-sm-flex align-items-center justify-content-between mt-auto">
          <div className="d-flex align-items-center">
            <Image src={verify} alt="icon" />
            <span className="fw-500 client-status">Verified Client .</span>
            <Link
              href={`/job-details-v1/${id}`}
              className={`job-duration fw-500 ${
                duration === "Part time" ? "part-time" : ""
              }`}
            >
              {duration}
            </Link>
          </div>
          <Link
            href={`/job-details-v1/${id}`}
            className="apply-btn text-center tran3s xs-mt-20"
          >
            APPLY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListItemThree;
