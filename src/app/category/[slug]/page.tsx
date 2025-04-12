import React from 'react'

type CategoryPageProps = {
    params: Promise<{slug: string}>
}

const CategoryPage = async () => {

    const {slug} = await params;

    
    
  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage