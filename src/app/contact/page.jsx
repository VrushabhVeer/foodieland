import FormSection from '@/components/contact/FormSection'
import RecipeSection from '@/components/contact/RecipeSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import React from 'react'

const page = () => {
  return (
    <>
      <FormSection />
      <NewsletterSection />
      <RecipeSection />
    </>
  )
}

export default page