import MetaTag from "@/app/services/api/general_api/meta-tag-api";
import { CONSTANTS } from "@/app/services/config/app-config";
import React, { useEffect, useState } from "react";

export async function fetchMetaData(url: string) {
  try {
    const meta_data: any = await MetaTag(
      `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.meta_tags.api.meta_tags.get_meta_tags?project_name=${CONSTANTS.PROJECT_NAME}&page_name=${url}`
    );
    // console.log("@@@ meta", meta_data?.data?.message?.data);
    if (
      meta_data?.data?.message?.status === "success" &&
      meta_data?.data?.message?.data !== null
    ) {
      return meta_data?.data?.message?.data;
    }
  } catch (error) {
    console.error("Error fetching meta tags:", error);
  }
  return [];
}

async function useMetaData(url:string) {
  const fetchedDataFromServer = await fetchMetaData(url);
  // console.log("@@@ data in generateMeta", fetchedDataFromServer);

  // Optionally access and extend (rather than replace) parent metadata

  return {
    title: fetchedDataFromServer[0]?.meta_title || "Pradan - Research",
    description: fetchedDataFromServer[0]?.description || "Pradan - Research",
    openGraph: {
      images: fetchedDataFromServer[0]?.og_image
        ? [fetchedDataFromServer[0].og_image]
        : [],
      title: fetchedDataFromServer[0]?.og_title || "Pradan - Research",
      description: fetchedDataFromServer[0]?.og_description || "Pradan - Research",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: fetchedDataFromServer[0]?.meta_title || "Pradan - Research",
      description: fetchedDataFromServer[0]?.description || "Pradan - Research",
      // image: fetchedDataFromServer[0]?.og_image || '',
    },
    robots: fetchedDataFromServer[0]?.robot_name || "index",
    viewport: "width=device-width, initial-scale=1",
    // canonical: fullUrl || '',
  };
}

export default useMetaData;
