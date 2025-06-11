"use client";
import Categories from "@/components/home/Categories";
import ChefSection from "@/components/home/ChefSection";
import Hero from "@/components/home/Hero";
import InstagramPosts from "@/components/home/InstagramPosts";
import NewsletterSection from "@/components/home/NewsletterSection";
import RecipeOfDay from "@/components/home/RecipeOfDay";
import Recipes from "@/components/home/Recipes";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <ChefSection />
      <InstagramPosts />
      <RecipeOfDay />
      <NewsletterSection />
    </div>
  );
}
