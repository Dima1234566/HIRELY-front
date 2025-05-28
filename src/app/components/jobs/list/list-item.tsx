"use client";
import React from "react";
import Link from "next/link";
import { IJobType } from "@/types/job-data-type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_to_wishlist } from "@/redux/features/wishlist";

const ListItem = ({
  item,
  style_2,
  cls = "",
}: {
  item: IJobType;
  style_2?: boolean;
  cls?: string;
}) => {
  const { id, duration, title, date, company, location } = item || {};
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const isActive = wishlist.some((p) => p.id === id);
  const dispatch = useAppDispatch();
  // handle add wishlist
  const handleAddWishlist = (item: IJobType) => {
    dispatch(add_to_wishlist(item));
  };
  return (
    <div
      className={`job-list-one position-relative ${cls} ${
        style_2 ? "border-style mb-20" : "bottom-border"
      }`}
    >
      <div className="row justify-content-between align-items-center">
        <div className="col-xxl-3 col-lg-4">
          <div className="job-title d-flex align-items-center">
            <Link
              href={`/job-details-v1/${id}`}
              className="title fw-500 tran3s"
            >
              {title}
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
          <Link
            href={`/job-details-v1/${id}`}
            className={`job-duration fw-500 ${
              duration === "Part time" ? "part-time" : ""
            }`}
          >
            {duration}
          </Link>
          <div className="job-date">
            {date} by <Link href={`/job-details-v1/${id}`}>{company}</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="job-location">
            <Link href={`/job-details-v1/${id}`}>{location}</Link>
          </div>
        </div>
        <div className="col-lg-1">
          <Link
            href={`/job-details-v1/${id}`}
            className="apply-btn text-center tran3s"
          >
            APPLY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
