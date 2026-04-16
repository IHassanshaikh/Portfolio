import React from "react";
import CategoryPage from "@/components/category/CategoryPage";
import { specialtiesData } from "@/data/specialties";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const categoryInfo = specialtiesData.find((cat) => cat.slug === slug);

    return {
        title: categoryInfo ? `${categoryInfo.title} | Portfolio` : "Specialty Not Found",
        description: categoryInfo?.description || "Explore our specialized project portfolios."
    };
}

// Ensure the routes are statically generated if possible
export function generateStaticParams() {
    return specialtiesData.map((cat) => ({
        slug: cat.slug,
    }));
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;
    return <CategoryPage slug={slug} />;
}
